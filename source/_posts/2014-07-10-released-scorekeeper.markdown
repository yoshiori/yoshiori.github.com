---
layout: post
title: "気軽なポジティブ・フィードバック好き"
date: 2014-07-10 22:29
comments: true
categories: 
---

![](https://www.evernote.com/shard/s4/sh/735a955e-0b8f-4b92-b5fa-fc37e0aa1d50/373f7227962198cfdbf0f2721813d3e5/deep/0/Slack.png)

なんか「はてなスター」とか Facebook の「イイネ！」とか Twitter の 「fav」とか Github の 「Star」 とかが結構好きです。

気軽なポジティブ・フォードバックって貰った側はやっぱり嬉しいし、誰も損しないしいいんじゃないかなぁと思うわけですよ。

ぶっちゃけ仕事でも、気軽なポジティブ・フィードバックしようってチョット心がけるだけで結構チームとかの雰囲気良くなるのでオマイラはもっとポジティブ・フィードバックすべきだ！！

ということでチャットで気軽にポジティブ・フィードバックできるの作ってみた。

例えば誰かが GHE のアップデートにハマって四苦八苦しながらも終わらしてくれた時とかに

`@sorah++`

とか、誰かが DynamoDB のバックアップの job 組んでくれた時に

`@con_mame++`

とか、昼飯食いに行こうと思って何食いたいか悩んでる時に

`ラーメン++`

とか

で、たまったスコアは

```
@ruboty show scoreboard
```

とかで見れます。

まぁ、元ネタは前職の IRC に常駐していた bot なんだけどねｗ
簡単なので hubot と ruboty 用両方作ってみました。

hubot 用

- https://github.com/yoshiori/hubot-scorekeeper

ruboty 用

- https://github.com/yoshiori/ruboty-scorekeeper

というわけで是非使ってみてポジティブ・フィードバックまみれになってみてください。
