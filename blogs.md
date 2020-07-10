---
layout: default
title: Blogs
permalink: /
nav_order: 1
---
# Latest Posts

{% for post in site.posts %}
## <a href="{{ post.url }}">{{ post.title }}</a>
  * {{ post.excerpt | truncate:150 }} <a href="{{ post.url }}">Read More</a>

{% endfor %}
