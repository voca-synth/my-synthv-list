# Synth V Favorites

[English](README.md) | 日本語 | [简体中文](README.zh-CN.md)

Synthesizer V で歌われたお気に入りの曲を集めた、小さなリストです。オリジナル曲とカバー曲を、決まった順番で YouTube から直接再生できます。

サイト：**[https://voca-synth.github.io/my-synthv-list/](https://voca-synth.github.io/my-synthv-list/)**。[自分だけのリストを作る](#自分だけのリストを作る)こともできます。

![Synth V Favorites ページ上部](docs/screenshots/hero.png)

## 曲目

全9曲を3つのセットに分けています。この順番で聴くのがおすすめです。曲名は原曲の言語で書き、定着している英語または日本語のタイトルを括弧で添えています。歌い手の名前は日本語と英語で併記し、中国語の声は中国語名のまま、日本語の読みを添えています。

| セット | # | | 曲名 | 歌い手 | オリジナル / カバー |
|---|---|---|---|---|---|
| 01 | 01 | <a href="https://www.youtube.com/watch?v=H7_1LDku7sg"><img src="https://img.youtube.com/vi/H7_1LDku7sg/mqdefault.jpg" width="120" alt=""></a> | [taste the rain](https://www.youtube.com/watch?v=H7_1LDku7sg) | エレノア・フォルテ / Eleanor Forte | ippo.tsk のオリジナル曲 |
| 01 | 02 | <a href="https://www.youtube.com/watch?v=KUy2Es4d4CQ"><img src="https://img.youtube.com/vi/KUy2Es4d4CQ/mqdefault.jpg" width="120" alt=""></a> | [Just Be Friends](https://www.youtube.com/watch?v=KUy2Es4d4CQ) | Mai | Dixie Flatline feat. 巡音ルカ のカバー。調声：Jim |
| 01 | 03 | <a href="https://www.youtube.com/watch?v=By-a9NeeHzE"><img src="https://img.youtube.com/vi/By-a9NeeHzE/mqdefault.jpg" width="120" alt=""></a> | [fiction模樣](https://www.youtube.com/watch?v=By-a9NeeHzE) | 夏語遙（シアユーヤオ）/ Xia Yuyao | 台湾のバンド 計畫通行 のカバー。調声：Hugwalk（VOICEMITH） |
| 02 | 04 | <a href="https://www.youtube.com/watch?v=cQLzNtaZTxw"><img src="https://img.youtube.com/vi/cQLzNtaZTxw/mqdefault.jpg" width="120" alt=""></a> | [マーシャル・マキシマイザー (Marshall Maximizer)](https://www.youtube.com/watch?v=cQLzNtaZTxw) | POPY | 柊マグネタイト feat. 可不 の英語カバー。英語詞：Bread Box、調声：LuvP |
| 02 | 05 | <a href="https://www.youtube.com/watch?v=74rKqbs-E1Y"><img src="https://img.youtube.com/vi/74rKqbs-E1Y/mqdefault.jpg" width="120" alt=""></a> | [Leia](https://www.youtube.com/watch?v=74rKqbs-E1Y) | ROSE | ゆよゆっぺ feat. 巡音ルカ のカバー。調声：連殤 |
| 02 | 06 | <a href="https://www.youtube.com/watch?v=vjBFftpQxxM"><img src="https://img.youtube.com/vi/vjBFftpQxxM/mqdefault.jpg" width="120" alt=""></a> | [BUTCHER VANITY](https://www.youtube.com/watch?v=vjBFftpQxxM) | 奕夕 / Yi Xi | FLAVOR FOLEY（Vane Lily、Jamie Paige、ricedeity）のオリジナル曲 |
| 03 | 07 | <a href="https://www.youtube.com/watch?v=wFLn_d51bNc"><img src="https://img.youtube.com/vi/wFLn_d51bNc/mqdefault.jpg" width="120" alt=""></a> | [Vermilion](https://www.youtube.com/watch?v=wFLn_d51bNc) | 重音テト / Kasane Teto | Circus (CircusP) のオリジナル曲。アルバム『DAEMON/DOLL』収録 |
| 03 | 08 | <a href="https://www.youtube.com/watch?v=jU_CG_FF6WI"><img src="https://img.youtube.com/vi/jU_CG_FF6WI/mqdefault.jpg" width="120" alt=""></a> | [あなぐらぐらし (Hole-Dwelling)](https://www.youtube.com/watch?v=jU_CG_FF6WI) | エレノア・フォルテ / Eleanor Forte | きくお feat. 初音ミク の英語カバー。英語詞・調声：GumiWorms |
| 03 | 09 | <a href="https://www.youtube.com/watch?v=wdNjJ3eh8EQ"><img src="https://img.youtube.com/vi/wdNjJ3eh8EQ/mqdefault.jpg" width="120" alt=""></a> | [大女優さん (actress)](https://www.youtube.com/watch?v=wdNjJ3eh8EQ) | 花隈千冬 / Hanakuma Chifuyu | いよわ のオリジナル曲 |

歌い手はすべて Synthesizer V の音声ライブラリです。カバー曲の原曲は VOCALOID または CeVIO の歌声で、計畫通行 の原曲だけはバンドのボーカル本人が歌っています。

![曲目一覧（3曲ずつ3セット）](docs/screenshots/list.png)

## 作った理由

Synthesizer V の作品はたくさんのチャンネルや言語、ジャンルに散らばっていて、好きな曲も視聴履歴やばらばらの再生リストに埋もれがちです。このページは、お気に入りの数曲を聴きたい順番でひとつにまとめ、作った人たちをきちんとクレジットするためのものです。

## クイックスタート

Node.js 18.20 以上（20 以上を推奨）が必要です。

```sh
npm install
npm run dev        # http://localhost:4321 でプレビュー
npm run build      # dist/ に静的サイトを出力
npm run preview    # ビルド結果をローカルで確認
```

`dist/` はただの静的ファイルなので、どの静的ホスティングにも置けます。このリポジトリは `main` へ push するたびに GitHub Pages へ自動でデプロイされます。

### リストの編集

曲目は `tracklist.txt` に1行1本で書きます。

```text
https://www.youtube.com/watch?v=VIDEO_ID, ページに表示したいタイトル
```

ファイル内の順番がそのままページの順番になります。空行で新しいセットが始まり、`#` で始まる行は無視されます。編集したらビルドし直してください。

## 自分だけのリストを作る

好きな曲は人それぞれです。このプロジェクトはオープンソースなので、自分のお気に入りでページを作れます。Synthesizer V に限らず、VOCALOID、UTAU、CeVIO など、どんな YouTube 動画でも同じように使えます。

1. [Use this template](https://github.com/new?template_name=my-synthv-list&template_owner=voca-synth) から、履歴のまっさらな自分用のコピーを作り、好きな名前を付けます。このリポジトリとのつながりを残したい場合は [fork](https://github.com/voca-synth/my-synthv-list/fork) でも構いません。
2. `tracklist.txt` の動画を自分のお気に入りに差し替え、好きなようにセットに分けます。
3. `src/pages/index.astro` でページのタイトルと見出しを変更します。
4. `astro.config.mjs` の `site` を `https://<ユーザー名>.github.io` に、`base` を `/<リポジトリ名>` に変更します。
5. リポジトリの Settings → Pages で、Source を GitHub Actions に設定します。fork した場合は、fork ではワークフローが初期状態で動かないため、Actions タブで有効にしてください。`main` へ push するとページが公開されます。

公開できたら、ぜひシェアしてください。このリポジトリにリンク付きの issue を立ててもらえれば、ほかの人にも見つけてもらえます。紹介したクリエイターに送るのもおすすめです。自分の作品を好きな人がいると知って、喜んでもらえることが多いはずです。サイト自体の改善は pull request で歓迎します。

## スマートフォン表示

<img src="docs/screenshots/mobile.png" alt="スマートフォンでのページ上部" width="260"> <img src="docs/screenshots/mobile-list.png" alt="スマートフォンでの最初のセット" width="260">

## 免責事項

これは非公式のファンリストです。Dreamtonics、YouTube や Google、各音声ライブラリの開発元や販売元、掲載しているアーティスト、声の提供者、チャンネルのいずれとも関係がなく、提携や後援、承認を受けたものではありません。楽曲、カバー、イラスト、動画の権利は、それぞれの制作者と権利者に帰属します。

Synthesizer V は Dreamtonics株式会社、VOCALOID はヤマハ株式会社、YouTube は Google LLC の商標です。初音ミク、巡音ルカはクリプトン・フューチャー・メディア株式会社の商標です。CeVIO と、ここに掲載しているそのほかの音声ライブラリの名称とキャラクターは、それぞれの開発元と権利者に帰属します。そのほかの商標は、それぞれの所有者に帰属します。名称は作品を識別し、クレジットするためだけに使っており、いかなる承認関係も意味しません。

このサイトは音声や動画をホストも再配布もしていません。元の動画へのリンクと埋め込みだけなので、再生回数はクリエイターの動画にカウントされます。サムネイルは YouTube から読み込み、再生ボタンを押すと YouTube のプライバシー強化モード（`youtube-nocookie.com`）のプレーヤーが読み込まれます。YouTube の利用規約とプライバシーポリシーが適用されます。

7曲目には投稿者によるコンテンツ警告があります。視聴前に動画の説明欄を確認してください。4曲目は投稿者により限定公開になっているため、このリストからは再生できますが、YouTube の検索には表示されません。クレジットは 2026年9月時点の動画説明欄と原曲の投稿から取得しました。動画はいつでも削除または非公開になる可能性があります。クリエイターの方で、作品をこのリストから外してほしい場合は issue でお知らせください。

## ライセンス

このサイトのコードは [GNU AGPL-3.0](LICENSE) でライセンスされています。このライセンスは、掲載している楽曲、動画、イラストには適用されません。
