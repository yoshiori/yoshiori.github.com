---
layout: post
title: "Git で branch 切り替えた時とかに emacs で開いてるファイルの buffer を更新"
date: 2013-01-31 16:14
comments: true
categories: emacs
---

Git で作業してると branch 切り替えたり stash したり色々と emacs の buffer で開いてるファイルが裏で更新されることが増えた。
で、気づかずにセーブしようとして確認でて上書きすると裏であった変更消しちゃうし開き直すと今書いたの消えちゃうしとか……

なんかそういう設定有るはずだよなぁとか思いながら見つけられてなかったんだけど、やっと見つけた。

```cl
;; 変更のあったファイルの自動再読み込み
(global-auto-revert-mode 1)
```

これで安心！！