# 快速上手

## 依赖环境

- [Hexo 6.3+](https://hexo.io/)
- [Yarn](https://yarn.bootcss.com/) or [NPM](https://www.npmjs.cn/getting-started/installing-node/) installed

---

## 从版本 1.x 升级版本 2.x

在版本 2.x 中所有的 Hexo 的脚本和生成器都被移动到一个单独的 Hexo 插件包中 ([hexo-plugin-aurora](https://github.com/auroral-ui/hexo-plugin-aurora))。那么版本 2.x 后安装 Hexo Aurora 主题的方式就不一样了。

如果您是这个主题的全新用户，只需跟着下面的安装指南即可。

如果是从 版本 1.x 升级到 版本 2.x 的，请看 [版本 v2.x 升级指南](/zh/guide/upgrade.html#v1-x-to-v2-x-upgrade)。

---

## 安装指南

本节将帮助您在现有的 Hexo 博客项目上安装 Aurora 主题。

---

### 步骤 1 - 安装主题包

> **在控制台中，进入 Hexo 项目的根目录，然后运行以下命令安装主题**

:::warning
对于版本 2.0+ 后，生成脚本全部移植到 `hexo-plugin-aurora` 包中。所以需要安装这个插件来使用这个主题!
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

对于 Windows 用户，您可以将下面的模板复制到 `_config.aurora.yml` 中。

Linux 复制模版命令

```shell:no-line-numbers
cp -rf ./node_modules/hexo-theme-aurora/_config.yml ./_config.aurora.yml
```

也可以直接复制这个下面链接的模版到项目根目录的 `_config.aurora.yml` 中

https://github.com/auroral-ui/hexo-theme-aurora/blob/main/_config.yml

---

### 步骤 3 - Setting `theme`

因为要告诉 hexo 你要用的主题是 `aurora` 所以需要把 `_config.yml` 中的 `theme` 值改为 `aurora`

1. 打开在 Hexo 根目录下的 `_config.yml`
2. 修改把 `theme` 的值改为 `aurora`

```yml:no-line-numbers{4}
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: aurora
```

---

### 步骤 4 - 设置 `permalink`

> **因为使用了 Vue-router，Hexo 默认生成的页面和文章的 permalink 与我们 Vue router 中的 path 是不相符的，那么就会出现无法访问的问题。所以我们需要修改 Hexo 默认配置文件里面的 `permalink` 参数。**

1. 打开在 Hexo 根目录下的 `_config.yml`
2. 修改 `permalink` 参数为 `/post/:title.html`

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

### 步骤 5 - 设置代码高亮

> **最后主题是使用 `Prismjs` 来实现代码高亮显示，但 Hexo 默认是使用 `highlightjs`，因此你需要更改 Hexo 配置来使用 `Prismjs`:**

- 把 `highlight` 的启用改为`false`
- 把 `prismjs` 的启用改为`true`
- 把 `prismjs` 下的 `preprocess` 改为 `false`

```yaml:no-line-numbers{2,9-10}
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: true
  preprocess: false
  line_number: true
  tab_replace: ''
```

---

### 步骤 6 - 创建 “关于 (`about`)” 页面

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

### 步骤 7 - 重新生成与本地服务器

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
