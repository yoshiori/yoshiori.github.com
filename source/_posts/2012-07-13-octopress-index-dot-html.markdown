---
layout: post
title: "Octopress の トップページを markdown で書く"
date: 2012-07-13 17:35
comments: true
categories: octopress
---
なんか Octopress の標準のトップは最新の記事をただ羅列しててあんまり美しくないし
検索とかのインデックスに記事の内容が分散して載っちゃうしで気に喰わないので弄ってみた。

ただ直すだけなら `source/index.html` を修正すればいいんだけど
折角 Octopress にして markdown で書けるのに HTML 手描きとかイヤンなので markdown で書いてみた。

1. `source/index.html` をおもむろに削除
2. `source/index.markdown` を作成

で、出来た。

`source/index.markdown` のメタ情報は
    ---
    layout: page
    title: 
    date: 2012-07-13 17:04
    comments: false
    sharing: true
    footer: false
    ---
みたいな感じで `title` 要素を空にしておけばタイトルも上に出る日付も出ないので良い感じになった。


ついでに標準だと上にあるナビゲーションの `blog` って項目押すとトップに飛ぶようになっててなんか違うので
`source/_includes/custom/navigation.html` を良しなに修正すればおｋ
