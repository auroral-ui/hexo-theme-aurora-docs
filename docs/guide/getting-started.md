# Getting started

## Prerequisites

- [Hexo 6.3+](https://hexo.io/)
- [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://docs.npmjs.com/getting-started) installed

---

## Installation

This section will help you install the theme on an existing Hexo Blog project.

> Since version 1.1.0, the theme can be simply installed using `NPM` or `Yarn`, makes it much easier for theme users to install!

---

### Step 1 - Installing theme package

> **In your console, go to the root directory of your Hexo project, then run the following command to install the theme:**

:::warning
For version 2.x+, the generator scripts are all moved to `hexo-plugin-aurora` package. You need to install this package to use this theme!
:::

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn add hexo-theme-aurora hexo-plugin-aurora
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install hexo-theme-aurora hexo-plugin-aurora --save
```

  </CodeGroupItem>
</CodeGroup>

---

### Step 2 - Generate theme config

> **Config file `_config.yml` now need to be added in the root folder of your Hexo blog. You simply create a `_config.aurora.yml` to change the theme.**

To get a default theme template, for Linux (MacOS/Linux OS) users simply run the following command

For Windows users you can copy the template below into `_config.aurora`.

<CodeGroup>
  <CodeGroupItem title="Linux Command">

```shell:no-line-numbers
cp -rf ./node_modules/hexo-theme-aurora/_config.yml ./_config.aurora.yml
```

  </CodeGroupItem>

  <CodeGroupItem title="Template">

```yml
#! ---------------------------------------------------------------
#! Aurora Theme for Hexo
#! ---------------------------------------------------------------
#! Designed & Coded By TriDiamond
#! ---------------------------------------------------------------

#! ---------------------------------------------------------------
#! Site Configs
#！ @docs https://aurora.tridiamond.tech/guide/configuration.html
#! ---------------------------------------------------------------
site:
  subtitle: Aurora's Blog
  author: Aurora
  nick: Auroral UI
  description:
  link: '/'
  language: en
  multi_language: true
  logo:
  avatar:
  beian:
    number: ''
    link: ''
  police_beian:
    number: ''
    link: ''

#! ---------------------------------------------------------------
#! Authors Configs
#！ @docs https://aurora.tridiamond.tech/guide/authors.html
#! ---------------------------------------------------------------
authors:
  ##! example
  # TriDiamond:
  #   name: TriDiamond
  #   avatar: https://up.enterdesk.com/edpic_source/44/ff/3d/44ff3d6bd2819d524facfcc33205d4cd.jpg
  #   link: https://github.com/TriDiamond
  #   description: 'Think like an artist, code like an artisan.'
  #   socials:
  #     github: https://tridiamond.tech

#! ---------------------------------------------------------------
#! Menu Configs
#！ @docs https://aurora.tridiamond.tech/guide/menu.html
#! ---------------------------------------------------------------
menu:
  About: true
  Tags: true
  Archives: true

#! ---------------------------------------------------------------
#! Theme Config
#! @docs https://aurora.tridiamond.tech/guide/theme.html
#! ---------------------------------------------------------------
theme:
  dark_mode: true
  profile_shape: diamond # support `circle`, `diamond`, `rounded`
  feature: true
  gradient:
    color_1: '#24c6dc'
    color_2: '#5433ff'
    color_3: '#ff0099'

#! ---------------------------------------------------------------
#! Social Configs
#! @docs https://aurora.tridiamond.tech/guide/social.html
#! ---------------------------------------------------------------
socials:
  customs:
  ##! Example:
  ##! --- Using SVG
  # bilibili:
  #   icon: http://localhost:4000/svg/bilibili.svg
  #   link: https://live.bilibili.com/22619211

  ##! --- Using IconFont
  # baidu:
  #   icon: iconfont icon-baidu
  #   link: https://live.bilibili.com/22619211

  ##! --- Using FontAwesome
  # book:
  #   icon: far fa-address-book
  #   link: https://live.bilibili.com/22619211

#! ---------------------------------------------------------------
#! Site Meta Configs
#! @docs https://aurora.tridiamond.tech/guide/theme.html
#! ---------------------------------------------------------------
site_meta:
  cdn: cn
  favicon:
  description: ''
  keywords: ''
  author: ''

#! ---------------------------------------------------------------
#! Plugins
#! @docs https://aurora.tridiamond.tech/guide/plugins.html
#! ---------------------------------------------------------------

# For local development only!
gitalk:
  enable: true
  autoExpand: true
  clientID: ''
  clientSecret: ''
  repo: 'dev-blog-comments'
  owner: 'TriDiamond'
  admin: ['TriDiamond']
  id: uid
  language: en
  distractionFreeMode: true
  recentComment: true
  proxy: ''

# Valine comment plugin (recommended!)
# see https://valine.js.org/quickstart.html
valine:
  enable: false
  app_id:
  app_key:
  avatar: ''
  placeholder: Leave your thoughts behind~
  visitor: true
  lang: en
  avatarForce: false
  meta: ['nick', 'mail']
  requiredFields: []
  admin: 'TriDiamond'
  recentComment: true

# Enable Busuanzi statistic plugin
# see http://ibruce.info/2015/04/04/busuanzi/
busuanzi:
  enable: true

copy_protection:
  enable: true
  author:
    cn: 作者
    en: Author
  link:
    cn: 本文来自于
    en: Article is from
  license:
    cn: 博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议
    en: This content is shared under the CC BY-NC-SA 4.0 protocol (Non-Commercial)

#! ---------------------------------------------------------------
#! Enable Aurora Bot Dia
#! @docs https://aurora.tridiamond.tech/guide/site-meta.html#custom-meta
#! ---------------------------------------------------------------
aurora_bot:
  enable: false
  locale: en
  bot_type: dia
  tips:

#! ---------------------------------------------------------------
#! Injections
#! @docs https://aurora.tridiamond.tech/guide/site-meta.html#custom-meta
#! ---------------------------------------------------------------
injects:
  scripts:
  css:
```

  </CodeGroupItem>
</CodeGroup>

---

### Step 3 - Setting `permalink`

> **Due to the use of Vue-router, the default Hexo generated pages and posts' permalink will cause the Vue router fail to find the route, therefore you need to change the Hexo default permalink configuration.**

#### Step 3.1

Open the `_config.yml` in your hexo root direction.

#### Step 3.2

Change `permalink` to `/post/:title.html`

```yaml:no-line-numbers{4}
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://tridiamond.tech
permalink: /post/:title.html
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

---

### Step 4 - Setting up code highlight

> **Last but not least, the theme use `Prismjs` for code highlighting, but Hexo default uses `highlightjs`, therefore you will need to change the Hexo config to use Prismjs instead:**

:::tip
All you have to do is change highlight's enable to `false` and change prismjs's enable to `true`
:::

```yaml:no-line-numbers{2,9}
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

---

### Step 5 - Creating the `about` page

The theme enables `about` page by default, therefore we should create it before using the theme.

To create a default about page, use the following `Hexo command`:

```shell:no-line-numbers
hexo create page about
```

After that, you will see a new folder had been created:

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

You can feel free to edit the markdown file inside the `about/` folder, the content will be displayed in your about page.

---

### Step 6 - Run local server

> **To run the local server and check out your blog, simply run the following command.**

```shell:no-line-numbers
hexo clean & hexo g & hexo server
```

:::tip
Any configuration changes will require you to regenerate all the Hexo static files!
:::

After all the files finish generating, you will be able to visit your blog on [https://localhost:4000](https://localhost:4000).

---

## What is next?

There are two places you should check out next:

1. Setting up your [Page](/guide/page.html)
2. Advance [configurations](/guide/configuration.html) document
