---
layout: post
title: "rails プロジェクトをはじめる手順"
date: 2012-08-14 15:25
comments: true
categories: rails ruby
---

とりあえず現状の俺の理解での
rails プロジェクトをはじめる手順をまとめてみた。

- rspec
- guard

をデフォで使う感じ

## プロジェクトの作成

    $ rails new rails_start
    $ cd rails_start

## git init と git-flow init

    $ git init
    $ git add .gitignore Gemfile Gemfile.lock README.rdoc Rakefile app config config.ru db doc lib log public script test vendor
    $ git commit -m init
    $ git flow init

## RSpec と guard 使うようにする

    $ git flow feature start add_rspec_guard
    $ emacs Gemfile

で、下記追加

```ruby
group :test, :development do
  gem 'rspec-rails'
  gem 'guard'
  gem 'guard-rspec'
  gem 'growl', :require => false # for Mac
  gem 'libnotify', :require => false # for *nix
end
```
    
    $ bundle install
    $ git rm -r test/
    $ rails g rspec:install
    $ guard init
    $ git add Guardfile Gemfile Gemfile.lock .rspec spec/
    $ git commit -m 'add rspec and guard'
    $ git flow feature finish add_rspec_guard

## 下準備完了

あとは

    $ guard

でテスト書きながら始める。

で、いいのかなぁ？……
