---
layout: post
title: "Pomodoro Timer の Atom Package 作った！"
date: 2014-05-22 18:08
comments: true
categories: atom
---

なんか某所で急に Pomodoro Technique の話で盛り上がりはじめて

> タイマー何使ってる！？

みたいな話題になってみんな思い思いお気に入りのタイマーを自慢し始めた。
で、俺はシンプルで気に入ってた [CherryTomato](http://www.beatpoints.com/cherrytomato/) をオススメしてたんだけど、
久しぶりに見たらだいぶバージョンが変わっていたのでバージョンアップしてみた。上書きで。


そしたら動かなくなった…… orz


<blockquote class="twitter-tweet" lang="ja"><p>pomodoro で普段使っているタイマーアプリをアップデートしたら起動しなくなってタスクが始められない悲しみに陥っている</p>&mdash; Yoshiori (@yoshiori) <a href="https://twitter.com/yoshiori/statuses/468673476300005377">2014, 5月 20</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

俺が Pomodoro Timer に求めるのは凄くシンプルで

- チクタク音がする。
- 途中で Abort 出来る

のみで、タスク内容入力できるとかは結局面倒くさくなるのでいらない。
iPhone のタイマーでもいいかと思ったんだけど、普段は Mac にヘッドフォンつないで音楽聞いて仕事してるので Mac 上で動くタイマーが欲しかった。

というわけでなかなか良いのが見つからないのでカッとなって Atom Package で作った。

https://atom.io/packages/pomodoro

すげーシンプルでコマンドは二個だけ。

* `pomodoro:start` - Start timer
* `pomodoro:abort` - Abort timer

あと、折角なのでタイマーと連動してコマンド実行できるようにしておいた

![](https://www.evernote.com/shard/s4/sh/5bd4dd38-3eb4-41c5-a8db-a6fb97f2dbe3/d41b10d4d482748a14c40e0590f9a321/deep/0/Settings----Users-yoshiori-.atom-packages-pomodoro.png)

こんな感じで設定画面でそれぞれのタイミングで実行したい処理を設定できる。



例えば……

- ポモドーロスタートの時にお気に入りのプレイリストを再生する AppleScript 呼び出したり
- ポモドーロスタート時に「今からポモドーロだから邪魔すんな」って Twitter につぶやいたり
- ポモドーロ終わったら休憩用の音楽かけるとか

色々出来る。

とりあえずポモドーロ終わったら強制的に Mac をサスペンドするには

```sh
#!/bin/sh
/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend  
```

こんな shell script 用意しておいて Permission 755 にしておいて、そのパスを `Path to Execute With Timer Finish` に書いておけば動きます。

あと、atom package 公開するとこんな感じでお祝いされます
![](https://www.evernote.com/shard/s4/sh/55fa6d81-b664-4f55-87dc-3878286e8bdc/8ef576f35040f1d002e6eecad402f0bc/deep/0/yoshiori@yoshiori-MacBookAir----.atom-packages-pomodoro---zsh.png)

ワイワイ
