---
layout: post
title: "21 世紀のエディタである Atom を最強にする"
date: 2014-09-20 13:45
comments: true
categories: 
---

[Atom](https://atom.io/) 最高ですね！！

でも、Atom は 21 世紀のエディタです。まだ 21 世紀になって 14 年しか経っていないので、[20 世紀最強のエディタ](http://www.gnu.org/software/emacs/emacs.html)に比べてまだまだ足りない機能があるのはしょうがないですね！！

**86 年後に勝負しよう！！**

って感じですね。

みんなが拡張書けば 86 年がドンドン縮んでくると思うのですが、ぶっちゃけまだまだです。
なので、[最強にするための拡張](https://atom.io/packages/open-emacs)書いてみました。

![](https://raw.githubusercontent.com/yoshiori/open-emacs/master/open-emacs.gif)

Atom で今開いているファイルを Emacs で開く拡張です。

「あー、Emacs だと xxx 出来るのに〜」

とか脳みそがまだ 20 世紀な時とか

「あー、このファイルデカすぎて Atom で編集すると重い……」

みたいなかわいそうな作業している時とか（2050 年位のマシンだとさくさくだと思いますけど！！）にお使いください。

## 21 世紀に戻る

```common-lisp
(defun open-atom ()
  (interactive)
  (call-process
   "atom" nil t nil buffer-file-name))
```

こんな感じのを `.emacs` に書いておけばいいんじゃないでしょうか？

*Back To The Future !!!*

### p.s.
`Vim` の話はしていません
