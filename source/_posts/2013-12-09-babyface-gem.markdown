---
layout: post
title: "BabyFace という gem を作りました"
date: 2013-12-09 00:00
comments: true
categories:
---

「[単純ベイズ分類器](http://ja.wikipedia.org/wiki/%E5%8D%98%E7%B4%94%E3%83%99%E3%82%A4%E3%82%BA%E5%88%86%E9%A1%9E%E5%99%A8)」を簡単に組み込める gem を作ってみました！！

# BabyFace

https://github.com/yoshiori/baby_face

## 簡単な使い方
判定したいクラスで BabyFace を include してちょっと設定書くだけです。

```ruby
class Entry
  include BabyFace
  baby_face_for features: [:title, :body],
                categories: [:ham, :spam]
end
```
こんな形で指定します

- features
  - 学習対象にする値
- categories
  - カテゴリ分け

が最小の設定になります。
これだけで、`Entry` のインスタンスに `baby_face` というのが生えます。
で、`categories` を元に学習用と判定用のメソッドが生えます。

```ruby
entry1.baby_face.train_ham # ham を学習
entry2.baby_face.train_spam # spam を学習

entry3.baby_face.ham? # ham かどうか判定
entry3.baby_face.spam? # spam かどうか判定
```
こんな感じで特に難しいこと考えないで使えます。

## もうちょっとカスタマイズ

### 学習データの保存
学習データはそのままだとメモリ上にあり保存されないので保存できるようにしてあります。

```ruby
BabyFace.configuration.data_dir = "/tmp/baby_face"
entry.baby_face.save # => /tmp/baby_face/entry.babyface
```

### 文字列の分解方法
デフォルトでは `String#split` していますが、カスタマイズできます

```ruby
require "mecab"
require "baby_face"

def wakachi(text)
  @wakachi ||= MeCab::Tagger.new('-O wakati')
  @wakachi.parse(text).split
end

class Entry
  include BabyFace
  baby_face_for features: [:title, :body],
                categories: [:light_side, :dark_side],
                tokenizer: ->(text) { wakachi(text) }

end
```
みたいな感じで渡せます。
MeCab とか使って日本語を分かち書きする処理などを渡したり出来ます。

### ネストしたオブジェクト
ActiveRecord の関連みたいなのも学習対象にすることが出来ます。
関連先でも `include` して `features` だけ書いていたらそれも使われます。

```ruby
class Entry < ActiveRecord::Base
  has_many :comments
  include BabyFace
  baby_face_for features: [:title, :body, :comments],
                categories: [:ham, :spam]
end

class Comment < ActiveRecord::Base
  include BabyFace
  baby_face_for features: [:title, :message]
end
```
### 学習データ詳細
BabyFace はフィールドごとに単語を別扱いしています。
なので、上記の例で言えば `title` に入っている「殺す」と `body` に入っている「殺す」は別扱いしています。


# まとめ
機械学習とかその辺のことは全然分かってないのですが、覚えるためにとりあえず自分で触ってみました。
さくっと組み込めるので投稿系のサービス作ってみるときとかに気軽に導入したり出来ると思います。
あと、自分のブログとはてブ数とか学習させて今から投稿する記事がはてブ稼げるかどうかとか見てみるのも楽しいかも。

まだ作ったばかりで色々足りないと思いますが、使ってみてください＞＜

https://rubygems.org/gems/baby_face


# そして名前の由来

突然だけどスタンド使いとプログラマは似ていると思う。
自分から生み出したものが動作し世の中に影響を与える……
スタンドとはプログラムのことかもしれない。
そしてそんなプログラムを書ける人間はスタンド使いなのかもしれない。

だからプログラマ同士は惹かれ合うのかもしれない……

僕の大好きな第五部に「ベイビィ・フェイス」というちょっと変わったスタンドが出てきます。

> 追跡するターゲットの遺伝子情報をノートパソコン型のスタンドへ入力、それを母体となる女性に受胎させることで、遠隔パワー型のスタンドを生み出す能力。

という能力。

さらに作品中ではドンドン色々なことを学習させていくという感じです。

![](https://github-camo.global.ssl.fastly.net/c2c5476da60f6af5321c1258c118c031c0b210a8/687474703a2f2f6661726d332e737461746963666c69636b722e636f6d2f323833352f31313137323639363539335f326539386439383164305f6f2e6a7067)

コレって完全に教師あり学習だなぁと思ってたので今回の gem にこの名前をつけました。

実は人生初の ruby-gem です。

そして調べてたら「[しかし、このディ・モールトの使い方はイタリア語としてはディ・モールト間違っている。](http://dic.nicovideo.jp/a/%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%88)」とかでてきてちょっとショックでしたが僕は元気です。

と、いうわけで実は「[ジョジョの奇妙な冒険 Advent Calendar 2013](http://www.adventar.org/calendars/122)」の参加エントリでした。
> やっぱりプログラマなんだからプログラムで語らないとね!!

と言うとかっこいいけど、実は普通に便乗して自分の gem の宣伝しただけですねｗｗ
