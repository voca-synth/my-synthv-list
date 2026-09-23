// SPDX-FileCopyrightText: 2026 Voca Synth <https://github.com/didvc>
// SPDX-License-Identifier: AGPL-3.0-only

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Single source of truth: tracklist.txt at the repo root, read at build time.
// Format: one "<youtube url>, <title>" per line; blank lines split groups;
// lines starting with "#" are comments. Order is preserved.
const LIST_PATH = fileURLToPath(new URL('../../tracklist.txt', import.meta.url));

export interface Track {
  n: number;
  id: string;
  url: string;
  title: string;
  /** Best-effort BCP 47 tag for the title: kana → ja, Han without kana → zh. */
  lang?: string;
}

function titleLang(title: string): string | undefined {
  if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(title)) return 'ja';
  if (/\p{Script=Han}/u.test(title)) return 'zh';
  return undefined;
}

function videoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null;
    if (u.searchParams.has('v')) return u.searchParams.get('v');
    const m = u.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

export function loadGroups(): Track[][] {
  const groups: Track[][] = [[]];
  let n = 0;
  for (const raw of readFileSync(LIST_PATH, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith('#')) continue;
    if (!line) {
      if (groups.at(-1)!.length) groups.push([]);
      continue;
    }
    const comma = line.indexOf(',');
    const url = (comma < 0 ? line : line.slice(0, comma)).trim();
    const title = comma < 0 ? url : line.slice(comma + 1).trim();
    const id = videoId(url);
    if (!id) throw new Error(`tracklist.txt: no YouTube video id in line: ${raw}`);
    groups.at(-1)!.push({ n: ++n, id, url, title, lang: titleLang(title) });
  }
  return groups.filter((g) => g.length);
}
