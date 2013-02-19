---
layout: post
title: Chanko の active_if で none を使えるようにしました
date: 2013-04-22 23:21
comments: true
categories: ruby rails
---

`Chanko` の `active_if` は今まで `all`, `any` 相当の機能しかなかったのですが、`none` の機能を追加しました。
（コード的にはいつでも `one?` 相当の機能も実装できるのですが、必要性を感じなかったので……）

[Add Support &#39;none&#39; to active_if by yoshiori · Pull Request #31 · cookpad/chanko](https://github.com/cookpad/chanko/pull/31)

これにより例えば特定のデバイスに向けた機能と特定のデバイスを弾きたい機能があった場合に今までは

```ruby
ActiveIf.define(:device_hoge?) { ... }
ActiveIf.define(:not_device_hoge?) { !... }
```
と別々に定義しておいて

```ruby
active_if :all_staffs?, :device_hoge?
```

```ruby
active_if :all_staffs?, :not_device_hoge?
```
それぞれ書いていました。
（`active_if` はデフォルトは `all` になります）

これを `none` を使うと
```ruby
ActiveIf.define(:device_hoge?) { ... }
```
と定義しておいて

```ruby
active_if :all_staffs?, :device_hoge?
```

```ruby
active_if :all_staffs?, none(:device_hoge?)
```

と書くことが出来るようになりました。

また、入れ子もサポートしていますので
```ruby
active_if :all_staffs?, any(none(:device_hoge?), none(:device_bar?))
```
のような事も書けます。

ちなみにこの機能を書くときに似た処理である `any` と `none` を統合した結果、`any` も入れ子をサポートするようになったので

```ruby
active_if any(any(any(none(:false, :false), :false), :false), :false)
# true
```

というようなモノもサポートするようになりました。

（実際にやるのは推奨しませんがｗｗｗ）

ということで、自分のコードが取り込まれたのが嬉しくて久しぶりにブログを書いてみました。
