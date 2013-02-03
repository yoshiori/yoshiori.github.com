---
layout: post
title: "【解決済み】FactoryGirl の relation の定義の仕方がよくわからない＞＜"
date: 2013-02-03 22:09
comments: true
categories: ruby factorygirl
---

FactoryGirl で relation 定義したいんだけど、具体的には

```ruby
class User < ActiveRecord::Base
  has_many :tasks
end
class Task < ActiveRecord::Base
  belongs_to :user
  validates :user, :presence => true
end
```
こんな 2 つのモデルで

{% codeblock users.rb lang:ruby %}
FactoryGirl.define do
  factory :user do
    tasks do
      [
       FactoryGirl.create(:task) ,
      ]
    end
  end
end
{% endcodeblock %}

{% codeblock tasks.rb lang:ruby %}
FactoryGirl.define do
  factory :task do
    user
  end
end
{% endcodeblock %}

みたいな定義をしておくと……

```
     Failure/Error: Unable to find matching line from backtrace
     SystemStackError:
         stack level too deep
```

まぁ、メッセージの通り循環参照になっちゃうからダメなのは分かる。


でも、`:user` の宣言から `tasks` 外すと
```ruby
FactoryGirl.create(:user).tasks
```
で何も返ってこないし、逆に `:task` の方で `user` 外すと
今度は `presence` のバリデーションに引っかかっちゃう

絶対書き方間違えてるせいなんだけど、どうやったらいいのかわからない＞＜
教えてエロイ人！！！！


追記

{% blockquote @naoty_k https://twitter.com/naoty_k/status/298061407499468801 %}
@yoshiori こんな感じでどうでしょうか https://t.co/ScRDRvLK
{% endblockquote %}
{% gist 4701800 %}

と教えてもらいました

{% blockquote @naoty_k https://twitter.com/naoty_k/status/298062728004788224 %}
@yoshiori すいません、さっきのは循環しそうなので、修正しました。 https://t.co/ScRDRvLK
{% endblockquote %}

とのことでしたが僕の手元では `trait` 使わなくても行けました！！！
ありがとうございます！！！


他にも
{% blockquote @rosylilly https://twitter.com/rosylilly/status/298062237988442114 %}
@yoshiori こうでどうだろうか http://t.co/Sf1oc9OV
{% endblockquote %}

{% blockquote @tomoya55 https://twitter.com/tomoya55/status/298064513360605184 %}
@yoshiori userの定義に、after :create do … end でtasksを追加するとよさそうー
{% endblockquote %}

といろいろな方が教えてくれました！！！
ありがとうございます！！！
