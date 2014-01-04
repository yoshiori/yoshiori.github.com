---
layout: post
title: "Jekyll/Octopress ではてな ID 記法的なの"
date: 2014-01-04 16:13
comments: true
categories: 
---
なんとなく調べたらサクッと作れそうだったのと自分で使いたかったので `Jekyll/Octopress` で`はてな ID 記法`的なの書けるプラグイン書いた。

https://github.com/yoshiori/jekyll_hatena_id_plugin

## 使い方
[hatena_id.rb](https://raw.github.com/yoshiori/jekyll_hatena_id_plugin/master/hatena_id.rb) を `plugins` ディレクトリにコピーして、あとは ID リンクしたい場所で
`{{ "{% id Yoshiori "}}%}` とか書けば行けます。

{% id Yoshiori %}


ついでに `detail` にも対応しておいたので `{{ "{% id Yoshiori detail "}}%}` と書けば

{% id Yoshiori detail %}

とアイコンも表示されます。