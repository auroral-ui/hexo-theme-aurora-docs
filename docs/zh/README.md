---
home: true
title: Home
heroImage: https://img-blog.csdnimg.cn/20210313122054101.png
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 主题介绍
    link: /zh/guide/
    type: secondary
features:
  - title: 优雅 UI
    details: 主题的主要设计理念是“简约并优雅”，Obsidian 2 自带 light 和 dark主题。
  - title: Vue3 驱动
    details: 享受由 Vue3 建立的单页面应用（SPA）所带来的更优雅，更友好的用户体验。
  - title: 高性能
    details: 使用 Vue3 给整个博客主题带来了整体的性能提升。
footer: MIT Licensed | Copyright © 2020-present TriDiamond
---

![](https://img-blog.csdnimg.cn/20210312092548510.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RyaURpYW1vbmQ2,size_16,color_FFFFFF,t_70)

ObsidiaNext 实现的功能包括 Obsidian 中的所拥有的之外，也添加 issue 中提出到的功能。

不过，最初的几个版本将专注于完成 Obsidian 中的功能，以及重新设计整个博客的界面。包括现代的网页设计思想，使 ObsidiaNext 成为一个更现代，更优雅的主题。

## ObsdiaNext 有什么功能？

**废话少说，让我们来看看《ObsidiaNext》的功能列表:**

### ⭐️ 博客功能

- <span class="tag new-tag">NEW</span> **`推荐区域`** - _可以在文章的 meta 中添加 `feature` 属性，让头 3 篇文章指定到首页推荐位置。_
- <span class="tag new-tag">NEW</span> **`实时多语言支持`** - _可以实时切换博客内主要文字的语言。_
- <span class="tag new-tag">NEW</span> **`数据统计`** - _统计文字数、文章数、分类数和标签数。_
- <span class="tag new-tag">NEW</span> **`文章阅读时长`** - _每个文章都会显示文章的预估阅读时长。_
- <span class="tag new-tag">NEW</span> **`Mathjax 支持`** - _支持在 markdown 中写 Maxjax 语法的数学公式。_
- <span class="tag new-tag">NEW</span> **`单页面应用`** - _页面与页面之间的跳转没有延迟或者等待，数据都是动态加载的。_

### 🎨 主题

- <span class="tag new-tag">NEW</span> **`深浅主题`** - _深色与浅色主题支持._
- <span class="tag new-tag">NEW</span> **`杂志布局`** - _现代杂志 grid 布局。_
- <span class="tag new-tag">NEW</span> **`渐变色彩`** - _现代渐变色彩风格，为主题添加更多丰富的色彩。_

### 🛠 配置

- <span class="tag new-tag">NEW</span> **`备案设置`** - _这个功能专门给放在中国服务上的博客用户，可以在博客底部添加备案信息。_
- <span class="tag new-tag">NEW</span> **`自定义菜单`** - _可以自定义添加外部链接、内部链接、自定义页面。_

## 将会有什么功能？

- <span class="tag wip-tag">开发中</span> **`文章搜索`** - _可以搜索全站的所有文章_
- <span class="tag wip-tag">开发中</span> **`文章导航`** - _可以在文章详情底部跳转到上一篇或者下一篇文章。_
- <span class="tag wip-tag">开发中</span> **`相关文章`** - _文章底部会推荐一些相关的文章。_
- <span class="tag wip-tag">开发中</span> **`自定义页`** - _结合自定义菜单使用，可以加入自定义页面到导航之中。_
- <span class="tag wip-tag">开发中</span> **`页面子导航`** - _可以给 `自定义页` 加入导航。_
- <span class="tag wip-tag">开发中</span> **`最新评论`** - _给首页添加一个最新评论模块，支持使用 `gitalk` 或者 `valine`。_

## 以后可能会有什么功能？

这些都是待定的功能，并还没有投入开发或者规划，但是未来可能会有。

> **主题的 `QQ 909955326` 群中会不定时一起投票未来的功能，欢迎大家一起来共建更好的 ObsidiaNext 主题！**

- **`图片库`** - _添加图片集，主要是用来看图片的。_
- **`友情链接`** - _可以在你的博客中展示你的小伙伴们的博客。_
- **`说说`** - _允许你和你博客读者们在你的博客中发像 QQ 一样的说说_

<style>
  .tag {
    display: inline-block;
    color: white;
    padding: 0 0.5rem;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .new-tag {
    background: linear-gradient(
      130deg,
      rgb(36, 198, 220),
      rgb(84, 51, 255) 41.07%,
      rgb(255, 0, 153) 76.05%
    );
  }
  .wip-tag {
    background: linear-gradient(
      130deg,
      #23074d,
      #cc5333 76.05%
    )
  }
</style>
