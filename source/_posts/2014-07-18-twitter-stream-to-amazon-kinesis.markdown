---
layout: post
title: "Twitter の Timeline を Amazon Kinesis に流すの作った"
date: 2014-07-18 22:13
comments: true
categories: aws
---

Amazon Kinesis 日本にｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!
ってことで、とりあえず Twitter の Timeline を kinesis に流すの作ってみた。

Twitter の Stream 扱うには [@sora_h](https://twitter.com/sora_h) 作の [akane](https://github.com/sorah/akane/) 使うのが楽なので akane の Strage 先として作ってみた。



なので使い方は簡単で gemfile に

```
gem 'akane-kinesis'
```

追加して `akane.yml` にこんな感じで書くと使えます。

```yml
storages:
  - kinesis:
      aws_access_key_id: xxx
      aws_secret_access_key: xxxx
      region: ap-northeast-1
      kinesis_stream_name: twitter
```

とりあえず storages に stdout も指定して実行するとこんな感じのが

![](https://www.evernote.com/shard/s4/sh/81a86dc8-997a-4955-85b5-d1b01db46e43/9d38e01bf6a89f5dde086f18964a603b/deep/0/yoshiori-shoji@p331----Dropbox-project-repos-lang-ruby-akane---zsh.png)

こんな感じで json 文字列で kinesis に入ります。

![](https://www.evernote.com/shard/s4/sh/95be1910-7c68-4d3d-83f5-28d3c0d6e4bd/6a1455a10fae416c427e8f957d038f1f/deep/0/yoshiori-shoji@p331----work-aws-elastic-transcoder-test---zsh.png)

kinesis からの取得側は [ここ](http://tech-sketch.jp/2014/04/aws-kinesis-ruby.html) のサンプルコードで出力してます。

まぁ、遊びで使うにはちょっと高いんだけどね＞＜

コードは[コチラ](https://github.com/yoshiori/akane-kinesis)