# 路由

文档的这一部分用于配置主题的路由。

## 使用子目录

> 此功能在版本 `v1.3.0` 后添加。

对于某些主题使用者，他们需要在子文件夹上托管他们的博客。例如，博客部署在 `https://tridiamond.github.io/blog`.

由于主题使用 Vue 作为前端框架，`public path` 无法在运行时配置。因此，如果您需要在子文件夹中托管您的博客，那么您将需要克隆源代码，并在配置完 `public path`。

### 修改主题配置

要成功地在子文件夹上部署博客，首先需要配置 `public path` 主题。

---

**步骤 1 - 克隆主题仓库**

若要配置 `public path`，首先，您需要使用 `git 克隆`：

```shell:no-line-numbers
# 首先进入Hexo文件夹的主题文件夹。
cd themes/
# 然后将主题 Aurora 克隆到主题文件夹中。
git clone https://github.com/auroral-ui/hexo-theme-aurora.git
```

---

**步骤 2 - 安装依赖**

首先进入 Aurora 主题文件夹。

```shell:no-line-numbers
cd aurora/
```

使用 NPM 或 Yarn 安装依赖。

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

---

**步骤 3 - 更改 public path 配置**

确实有**两个地方**的配置需要修改，才能让你成功使用 `二级文件夹`。

让我们假设你正在使用 `/blog/` 作为你博客的子文件夹。

第一个配置文件是 Hexo 配置文件。`_config.yml`。您所要做的就是添加 `root` 属性并将其设置为 `/blog/`。

```yaml:no-line-numbers{5}
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://tridiamond.tech
permalink: /post/:title.html
root: '/blog/'
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

下一个是在 `.env.production` 主题文件夹中的配置文件。

```shell:no-line-numbers{4}
.
└── themes
    └── aurora
        └── .env.production # <= this one
```

打开此配置并更改 `VUE_APP_PUBLIC_PATH` 的值为 `/subfolder_name/`。

```shell:no-line-numbers{14}
# just a flag
ENV = 'production'

# App name
VUE_APP_PROJECT_TITLE = 'Aurora Blog'

# base api
VUE_APP_BASE_API = 'api'

# 如果您想要更改公共路径，请编辑此代码。
# 例如，如果你想在 https://name.github.io/blog/，上托管你的博客，那么你要设置
# vue_app_public_path to `/blog/`
# 否则将其保留为 `/··
VUE_APP_PUBLIC_PATH = '/blog/'
```

---

**步骤 4 - 重新打包主题**

配置 `public path` 之后，您所要做的就是使用 NPM 或 Yarn 运行构建脚来重新打包主题代码。

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm run build
```

  </CodeGroupItem>
</CodeGroup>

---

**步骤 5 - 重建 Hexo 静态文件**

最后但并非最不重要的是，返回到 Hexo 根文件夹并重新构建 Hexo 静态文件。

```shell:no-line-numbers
hexo cl & hexo g
```

您还可以启动本地服务器，查看子文件夹设置是否生效。

```shell:no-line-numbers
hexo server
```

---
