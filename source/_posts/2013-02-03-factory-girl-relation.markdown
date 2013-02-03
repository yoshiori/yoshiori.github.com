---
layout: post
title: "FactoryGirl の relation の定義の仕方がよくわからない＞＜"
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
