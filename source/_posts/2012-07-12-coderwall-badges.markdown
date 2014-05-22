---
layout: post
title: "Octopress のサイドバーに Coderwall Badges を表示"
date: 2012-07-12 16:55
comments: true
categories: octopress
---
Octpress のサイドバーに Coderwall の Badge を表示したいなと思ったので作ってみた。

`source/_includes/asides/coderwall.html`

に下記を保存
```html
{% if site.coderwall_user %}
<section class="well">
  <ul class="nav">
    <li class="nav-header">Coderwall Badges</li>
  </ul>
  <div id="coderwall_badges"></div>
  <a href="http://coderwall.com/{{site.coderwall_user}}">@{{site.coderwall_user}}</a> on coderwall
  <script type="text/javascript">
    $(document).ready(function(){
      $.getJSON("http://coderwall.com/{{site.coderwall_user}}.json?callback=?", function(data){
        for(var i = 0; i < data.data.badges.length ; i++){
          var badge = data.data.badges[i];
          var badge_tag = $("<img />");
          badge_tag.attr("src",badge.badge);
          badge_tag.css("width","50%");
          $("#coderwall_badges").append(badge_tag);
        }
      });
    });
  </script>
</section>
{% endif %}
```


`_config.yaml` の 49 行目くらいの `default_asides` に `asides/coderwall.html` を追加
``` yaml
default_asides: [asides/recent_posts.html, asides/github.html, asides/coderwall.html, asides/twitter.html]
```

同じく `_config.yaml` の下の方にユーザー名を書いてあげる
``` yaml
# Coderwall badges
coderwall_user: yoshiori
```

で、サイドバーに表示されます。

{% img post https://img.skitch.com/20120712-btk6k5wjbisfq4wwifsedpmmgm.png %}
