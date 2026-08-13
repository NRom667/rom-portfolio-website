# 私のポートフォリオサイトです

公開ページ：https://hirameki-tech.com/

## Work の追加方法

`src/content/works` に Markdown ファイルを追加すると、トップページの Works に自動で表示されます。

```yaml
---
title: 作品名
url: https://example.com/
description: 作品の説明
technologies:
  - TypeScript
  - Astro
image: /example.webp
imageFallback: /example.png
accent: cyan
order: 4
---
```

- `accent` は `cyan`、`pink`、`lime` のいずれかです。
- `order` が小さい作品から順に表示されます。他の作品と重複しない番号を指定してください。
- 画像を使う場合は `public` に配置し、上の例のように `/` から始まるパスを指定します。WebP を `image`、PNG などの代替画像を `imageFallback` に指定します。
- 画像がまだない場合は `image` と `imageFallback` の行を両方とも省略できます。値だけを空欄にするのは避けてください。

追加後は `npm run dev` で確認し、公開前に `npm run build` が成功することを確認します。
