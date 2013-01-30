---
layout: post
title: "Octopress のサイドバーに Coderwall Badges を表示"
date: 2012-07-12 16:55
comments: true
categories: octopress
---
Octpress のサイドバーに Coderwall の Badge を表示したいなと思ったので作ってみた。

`source/_includes/asides/coderwall.html`

に下記ファイルを保存
{% gist 3096534 %}


`_config.yaml` の 49 行目くらいの `default_asides` に `asides/coderwall.html` を追加
``` yaml
default_asides: [asides/recent_posts.html, asides/github.html, asides/coderwall.html, asides/twitter.html]
```

同じく `_config.yaml` の下の方にユーザー名を書いてあげる
``` yaml
# Coderwall badges
coderwall_user: yoshiori
```

で、サイドバーに表示されます。

{% img post https://img.skitch.com/20120712-btk6k5wjbisfq4wwifsedpmmgm.png %}
