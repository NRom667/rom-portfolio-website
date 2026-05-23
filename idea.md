# プロジェクトの目的
ポートフォリオサイトを作る

# デザイン
- ダークテーマ
- ./デザインイメージ.pngをイメージする
- 少しレトロで遊び心のあるような雰囲気
- アクセントにシアン、ピンク、黄緑などを少量
- ドット、スキャンライン、古い端末風の罫線を控えめに使う
- 文字は読みやすい sans-serif を基本にして、見出しだけレトロ寄り
- 制作物カードにはスクリーンショットやアイコンを置く
- 本文は読みやすく、装飾は周辺に寄せる


# その他要件
- アクセス解析：Cloudflare Web Analytics を使用（Cloudflareの管理ページから有効化する）

# ホスティング
- Cloudflare Pagesを使用
- URL：独自ドメインを使用する
  - https://hirameki-tech.com

# 使用する技術
- Astro
- - 画像は Astro の一般的な構成に合わせて配置する
- icon.png, avatar.png, font2png.png, image-bg-remover.png を使用する

# SEO
- title
- description
- OGP画像：初期実装では icon.png または簡易生成画像を使用。専用画像は後で作成する
- canonical
- sitemap.xml
- robots.txt
- 独自ドメイン https://hirameki-tech.com を Astro の site に設定

# 更新しやすさ
- Works の情報は Astro Content Collections で管理する
- トップページでは Content Collections から Works を読み込んで表示する

# デプロイ方法
- GitHub連携

# サイト構造
- トップページ1枚のみ
- 言語：日本語のみ
  - 将来的に英語対応したくなるかもしれない

# トップページ構造
- 自己紹介
  - Links ※自己紹介の下に小さく表示する
- Works


## 自己紹介
- サイト名：Hirameki Tech
- 名前：Rom
- アイコン
　　- icon.png (SNSでも使用しているメインアイコン)
　　- avatar.png (仮のアバター画像)
- 技術：バイブコーディング始めました。非エンジニア。
- 趣味：PCゲーム(steam, フリーゲーム) 主にシングルプレイゲームが好き。


### LINKS
- X:https://x.com/Rom_2nd_
- note:https://note.com/rom_nt
- youtube:https://www.youtube.com/channel/UCkBKODW4YvSI0zIsbQxRacQ
- blog:https://netwatching.hatenadiary.com/
- github:https://github.com/NRom667
- OFUSE(支援はこちら):https://ofuse.me/rom1234


## Works
- タイトル、URL、短い説明、使用技術、スクリーンショット(又はアイコン)を表示する
### Font2png
- https://font2png.hirameki-tech.com/
- 任意のフォントから綺麗な文字画像を作るwebツール。縁取りや影を付けられる。
- html/javascript
- font2png.png
### 背景リムーバー
- https://github.com/NRom667/image-bg-remover
- windows上で動作する、背景をキレイに透過するためのソフト。細かく調整できるのが強みで、1クリックで背景削除する系のツールでは上手くいかない場合に役立つ。SAM2.1を使用し高精度。
- python, pyside6
- image-bg-remover.png