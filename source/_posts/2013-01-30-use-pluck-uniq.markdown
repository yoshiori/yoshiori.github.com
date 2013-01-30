---
layout: post
title: "ActiveRecord::Relation#pluck 使うときは Array が返ってくるの忘れちゃいけない"
date: 2013-01-30 20:38
comments: true
categories: ruby rails pr-review
---

元々こんなコードがあった
```ruby
Post.where(:tag => "test").map(&:title).uniq
```

で、title しか使ってないんだからいちいち ActiveRecode のオブジェクト作って取り出すより pluck 使うように修正した

```ruby
Post.where(:tag => "test").pluck(:title).uniq
```

そう、俺はここで満足してしまった……で、pull request 出した結果突っ込まれ。
> uniq を前に持って来い

ActiveRecord::Relation の uniq は DISTINCT を付けてくれるので DB 側で処理される。
ところが pluck は Array が返ってくるので Array#uniq になってしまう。

実際に実行してみると

```ruby
irb(main):014:0> Post.where(:tag => "test").pluck(:title).uniq
   (3.4ms)  SELECT title FROM "posts" WHERE "posts"."tag" = 'test'
=> ["title1", "title2"]
irb(main):015:0> Post.where(:tag => "test").uniq.pluck(:title)
   (5.3ms)  SELECT DISTINCT title FROM "posts" WHERE "posts"."tag" = 'test'
=> ["title1", "title2"]
```

もちろん結果は同じだけど DB で処理できることは DB に任せたほうがいいよね。
件数増えると結構差が出ると思う。
