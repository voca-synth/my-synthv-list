# Synth V Favorites

English | [简体中文](README.zh-CN.md)

A small, hand-picked list of favorite songs sung with Synthesizer V: originals and covers, played straight from YouTube, in a fixed order.

Listen at **[https://voca-synth.github.io/my-synthv-list/](https://voca-synth.github.io/my-synthv-list/)**, or [make your own list](#make-your-own-list).

![Synth V Favorites — top of the page](docs/screenshots/hero.png)

## Tracklist

Nine tracks in three sets, meant to be played in this order. Song titles are given in the language the song was written in, with the established English or Japanese title after it. Singer names are given in Japanese and English. Chinese voices keep their Chinese name, with the Japanese reading.

| Set | # | | Song | Singer | Original or cover |
|---|---|---|---|---|---|
| 01 | 01 | <a href="https://www.youtube.com/watch?v=H7_1LDku7sg"><img src="https://img.youtube.com/vi/H7_1LDku7sg/mqdefault.jpg" width="120" alt=""></a> | [taste the rain](https://www.youtube.com/watch?v=H7_1LDku7sg) | エレノア・フォルテ / Eleanor Forte | Original by ippo.tsk |
| 01 | 02 | <a href="https://www.youtube.com/watch?v=KUy2Es4d4CQ"><img src="https://img.youtube.com/vi/KUy2Es4d4CQ/mqdefault.jpg" width="120" alt=""></a> | [Just Be Friends](https://www.youtube.com/watch?v=KUy2Es4d4CQ) | Mai | Cover of Dixie Flatline feat. 巡音ルカ (Megurine Luka). Tuned by Jim |
| 01 | 03 | <a href="https://www.youtube.com/watch?v=By-a9NeeHzE"><img src="https://img.youtube.com/vi/By-a9NeeHzE/mqdefault.jpg" width="120" alt=""></a> | [fiction模樣](https://www.youtube.com/watch?v=By-a9NeeHzE) | 夏語遙 (シアユーヤオ) / Xia Yuyao | Cover of the Taiwanese band 計畫通行. Tuned by Hugwalk for VOICEMITH |
| 02 | 04 | <a href="https://www.youtube.com/watch?v=cQLzNtaZTxw"><img src="https://img.youtube.com/vi/cQLzNtaZTxw/mqdefault.jpg" width="120" alt=""></a> | [マーシャル・マキシマイザー (Marshall Maximizer)](https://www.youtube.com/watch?v=cQLzNtaZTxw) | POPY | English cover of 柊マグネタイト (Hiiragi Magnetite) feat. 可不 (KAFU). English lyrics by Bread Box, tuned by LuvP |
| 02 | 05 | <a href="https://www.youtube.com/watch?v=74rKqbs-E1Y"><img src="https://img.youtube.com/vi/74rKqbs-E1Y/mqdefault.jpg" width="120" alt=""></a> | [Leia](https://www.youtube.com/watch?v=74rKqbs-E1Y) | ROSE | Cover of ゆよゆっぺ (Yuyoyuppe) feat. 巡音ルカ (Megurine Luka). Tuned by 連殤 |
| 02 | 06 | <a href="https://www.youtube.com/watch?v=vjBFftpQxxM"><img src="https://img.youtube.com/vi/vjBFftpQxxM/mqdefault.jpg" width="120" alt=""></a> | [BUTCHER VANITY](https://www.youtube.com/watch?v=vjBFftpQxxM) | 奕夕 / Yi Xi | Original by FLAVOR FOLEY (Vane Lily, Jamie Paige, ricedeity) |
| 03 | 07 | <a href="https://www.youtube.com/watch?v=wFLn_d51bNc"><img src="https://img.youtube.com/vi/wFLn_d51bNc/mqdefault.jpg" width="120" alt=""></a> | [Vermilion](https://www.youtube.com/watch?v=wFLn_d51bNc) | 重音テト / Kasane Teto | Original by Circus (CircusP), from the album DAEMON/DOLL |
| 03 | 08 | <a href="https://www.youtube.com/watch?v=jU_CG_FF6WI"><img src="https://img.youtube.com/vi/jU_CG_FF6WI/mqdefault.jpg" width="120" alt=""></a> | [あなぐらぐらし (Hole-Dwelling)](https://www.youtube.com/watch?v=jU_CG_FF6WI) | エレノア・フォルテ / Eleanor Forte | English cover of Kikuo feat. 初音ミク (Hatsune Miku). English lyrics and tuning by GumiWorms |
| 03 | 09 | <a href="https://www.youtube.com/watch?v=wdNjJ3eh8EQ"><img src="https://img.youtube.com/vi/wdNjJ3eh8EQ/mqdefault.jpg" width="120" alt=""></a> | [大女優さん (actress)](https://www.youtube.com/watch?v=wdNjJ3eh8EQ) | 花隈千冬 / Hanakuma Chifuyu | Original by いよわ (Iyowa) |

Every singer here is a Synthesizer V voice. Original singers of the covered songs are VOCALOID or CeVIO voices, apart from 計畫通行, whose own vocalist sings the original.

![The tracklist, three sets of three](docs/screenshots/list.png)

## Motivation

Synthesizer V voices turn up across a lot of channels, languages and genres, and good finds get buried in watch history and scattered playlists. This is one quiet page that keeps a handful of favorites together, in the order they're meant to be heard, and credits the people who made them.

## Quick start

Requires Node.js 18.20+ (20+ recommended).

```sh
npm install
npm run dev        # preview at http://localhost:4321
npm run build      # static site written to dist/
npm run preview    # serve the built site locally
```

`dist/` is plain static files, so any static host works. This repo deploys to GitHub Pages on every push to `main`.

### Editing the list

The tracklist lives in `tracklist.txt`, one video per line:

```text
https://www.youtube.com/watch?v=VIDEO_ID, Title as you want it shown
```

- Order in the file is the order on the page.
- A blank line starts a new set.
- Lines starting with `#` are ignored.

Rebuild after editing.

## Make your own list

Everyone's favorites are different, and this project is open source so you can build your own page with them. It doesn't have to be Synthesizer V: VOCALOID, UTAU, CeVIO or any mix of YouTube videos works the same way.

1. Click [Use this template](https://github.com/new?template_name=my-synthv-list&template_owner=voca-synth) to create your own copy with a clean history, and give it your own name. You can also [fork it](https://github.com/voca-synth/my-synthv-list/fork) if you'd rather keep a link back to this repository.
2. Replace the videos in `tracklist.txt` with yours, grouped into sets however you like.
3. Change the page title and headline in `src/pages/index.astro`.
4. In `astro.config.mjs`, set `site` to `https://<your-username>.github.io` and `base` to `/<your-repo-name>`.
5. In your repository, go to Settings → Pages and set the source to GitHub Actions. If you forked, also open the Actions tab and enable workflows, since forks don't run them by default. Your page goes live on the next push to `main`.

Once it's up, share it. Open an issue here with your link so others can find it, and send it to the creators you featured, who are usually glad to hear someone loves their work. Improvements to the site itself are welcome as pull requests.

## On mobile

<img src="docs/screenshots/mobile.png" alt="Top of the page on a phone" width="260"> <img src="docs/screenshots/mobile-list.png" alt="The first set on a phone" width="260">

## Disclaimer

This is an unofficial fan list. It isn't affiliated with, sponsored by or endorsed by Dreamtonics, YouTube or Google, any voice bank developer or publisher, or any of the artists, voice providers or channels listed. All songs, covers, artwork and videos belong to their creators and rights holders.

Synthesizer V is a trademark of Dreamtonics Co., Ltd., VOCALOID of Yamaha Corporation, and YouTube of Google LLC. Hatsune Miku and Megurine Luka are trademarks of Crypton Future Media, INC. CeVIO, and the names and characters of the other voice banks listed here, belong to their developers and rights holders. All other trademarks belong to their owners. Names are used here only to identify and credit the works, and their use doesn't imply any endorsement.

The site doesn't host or redistribute any audio or video. It links to and embeds the original uploads, so every play counts toward the creators. Thumbnails come from YouTube, and pressing play loads YouTube's privacy-enhanced (`youtube-nocookie.com`) player, under YouTube's terms and privacy policy.

Track 07 carries a content warning from its uploader, so check the video description before watching. Track 04 has been unlisted by its uploader, so it plays from this list but won't show up in YouTube search. Credits were taken from the video descriptions and original uploads in September 2026. Any video can be removed or made private at any time. If you're a creator and want your video taken off this list, open an issue.

## License

The site's code is licensed under the [GNU AGPL-3.0](LICENSE). This license does not cover the listed songs, videos or artwork.
