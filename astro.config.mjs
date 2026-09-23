// @ts-check
// SPDX-FileCopyrightText: 2026 Voca Synth <https://github.com/didvc>
// SPDX-License-Identifier: AGPL-3.0-only
import { defineConfig } from 'astro/config';

// Keep Astro's and Vite's caches inside the project (see .gitignore).
export default defineConfig({
  // Served by GitHub Pages at https://voca-synth.github.io/my-synthv-list/
  site: 'https://voca-synth.github.io',
  base: '/my-synthv-list',
  cacheDir: './.cache/astro',
  vite: { cacheDir: './.cache/vite' },
});
