# 快速上手

## 依赖环境

- [Hexo 6.3+](https://hexo.io/)
- [Yarn](https://yarn.bootcss.com/) or [NPM](https://www.npmjs.cn/getting-started/installing-node/) installed

---

## 安装指南

本节将帮助您在现有的 Hexo 博客项目上安装 Aurora 主题。

> 从版本 1.1.0 开始，主题可以使用 NPM 或 Yarn 安装，让主题用户更容易使用!

---

### 步骤 1 - 安装主题包

> **在控制台中，进入 Hexo 项目的根目录，然后运行以下命令安装主题**

:::warning
对于版本 2.x 后，生成脚本全部移植到 `hexo-plugin-aurora` 包中。你需要安装这个插件来使用这个主题!
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

### 步骤 2 - 生成主题配置

> **因为主题是使用 NPM 或者 Yarn 安装的，而不是 clone 到 themes 文件夹的。所以我们需要自己创建一个配置文件。你只需要在 Hexo 博客的根目录下创建一个 `_config.aurora.yml` 配置文件来配置主题。**

要获取默认主题模板，对于 Linux 系统 (MacOS/LinuxOS) 用户只需执行以下命令。

对于 Windows 用户，您可以将下面的模板复制到 `_config.aurora` 中。

<CodeGroup>
  <CodeGroupItem title="Linux 命令">

```shell:no-line-numbers
cp -rf ./node_modules/hexo-theme-aurora/_config.yml ./_config.aurora.yml
```

  </CodeGroupItem>

  <CodeGroupItem title="模版">

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

### 步骤 3 - 设置 `permalink`

> **因为使用了 Vue-router，Hexo 默认生成的页面和文章的 permalink 与我们 Vue router 中的 path 是不相符的，那么就会出现无法访问的问题。所以我们需要修改 Hexo 默认配置文件里面的 `permalink` 参数。**

#### 步骤 3.1

打开在 Hexo 根目录下的 `_config.yml`

#### 步骤 3.2

修改 `permalink` 参数为 `/post/:title.html`

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

### 步骤 4 - 设置代码高亮

> **最后主题是使用 `Prismjs` 来实现代码高亮显示，但 Hexo 默认是使用 `highlightjs`，因此你需要更改 Hexo 配置来使用 `Prismjs`:**

- 把 `highlight` 的启用改为`false`
- 把 `prismjs` 的启用改为`true`
- 把 `prismjs` 下的 `preprocess` 改为 `false`

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

### 步骤 5 - 创建 “关于 (`about`)” 页面

主题默认开启了 `about` 页面，所以我们需要创建这个 about 页，要不主题就无法正常显示 about 页。

要创建这个默认的 about 页，只需要执行这个 `Hexo 的命令`：

```shell:no-line-numbers
hexo new page about
```

执行完毕后，你会发现在 `source/` 文件中多处了一个新的文件夹：

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

你可以随意修改这个 `index.md` markdown 文件中的内容，此文件的内容将会现在在我们的 about 页面中。

---

### 步骤 6 - 重新生成与本地服务器

> **使用以下命令来运行本地环境。**

```shell:no-line-numbers
hexo clean & hexo g & hexo server
```

:::tip
改变了任何配置都需要重新生成 Hexo 的静态文件！
:::

当文件都生成完毕之后，就可以通过 [https://localhost:4000](https://localhost:4000) 访问你的博客了。

---

## 接下来该干啥？

你的主题基本上是可以使用了，但是还有两个地方你需要去看看并且进行详细的配置:

1. 配置你的 [Page（页面）](/guide/page.html)
2. 高级[配置文档](/guide/configuration.html)
