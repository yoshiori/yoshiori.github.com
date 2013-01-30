---
layout: post
title: ".emacs を一年に一回消してる"
date: 2013-01-30 19:10
comments: true
categories: emacs
---


### ここ何年か .emacs と .zsh は一年に一回くらいの頻度で全消ししてる。
なんか古い emacs の設定とか色々入ってて秘伝のタレみたいになっちゃうのが .emacs 的な印象なんだけど、
やっぱり自分でもなんとかしたいなぁと思って思い切って `rm -rm .emacs` してみたら結構良かったので一年に一回くらいの頻度で消すようにしてる。

大掃除とかじゃなく一から作りなおさないとなんか秘伝のタレ的なの残っちゃうので結構おすすめ。

今回は emacs24 に完全移行って事て anything → helm した。
 あと、ここ数年は Mac しか使ってないので OS の判定とかもしなくした。

### emacs24 の package-install 便利
なんかほぼ使いたいものはこれで入れられるし、入れると勝手に require してくれちゃうみたいで、
メジャーモードとかはインストールしたらそのまま使えた。

リポジトリだけ追加したので

```cl
(when (require 'package nil t)
  (add-to-list 'package-archives '("melpa" . "http://melpa.milkbox.net/packages/"))
  (package-initialize))
```
を追加した。

### anythong(helm) 無いと生きていけない

脳みその容量が全然足りないので、便利そうな elisp 見つけてもショートカットとか覚えられない！！！
って事ばかりなので anything(helm) が無いと生きていけない。

「あー kill-ring の中見たい」って思った時も `kill-r` 位まで打てばこんな画面が出て
そのまま実行もできるし、ショートカットキーまで教えてくれる

{% img https://www.evernote.com/shard/s4/sh/b4d64aab-ff87-4331-bb87-2004fe12046f/dcd015be6f071df8ab5987ae3f4e1b86/res/bb06b1a0-a5f9-48f2-9bd9-e094991fd278/skitch.png?resizeSmall&width=832 %}

```cl
;; -*- Mode: Emacs-Lisp ; Coding: utf-8 -*-
(require 'helm)
(require 'helm-config)
(helm-mode 1)

(defun my-helm ()
  (interactive)
  (helm :sources '(
                   helm-c-source-buffers-list
                   helm-c-source-recentf
                   helm-c-source-files-in-current-dir
                   helm-c-source-mac-spotlight
                   helm-c-source-buffer-not-found)
        :buffer "*my helm*"))

(global-set-key (kbd "C-x b") 'my-helm)
(global-set-key (kbd "M-x") 'helm-M-x)

(setq helm-samewindow nil)
(push '("*helm-M-x*") popwin:special-display-config)

;; emacsの終了時に、履歴を保存する
(remove-hook 'kill-emacs-hook 'helm-c-adaptive-save-history)

;; ディレイは0.2秒
(setq helm-input-idle-delay 0.02)

;; 候補のディレクトリが一つしかない場合に、自動的に展開しない
(setq helm-ff-auto-update-initial-value nil)
```
今のところこんな簡単な設定。

まだどうも helm の find-file に慣れないのでどうにかしたいなぁ……
