# 快速上手

## 依赖环境

- [Hexo 4.x](https://hexo.io/)
- `yarn` or `npm` installed

## 手动安装

本节将帮助您在现有的 Hexo 博客项目上安装 Aurora 主题。

- **步骤 1**: 在您的控制台中，进入我们的 Hexo 项目的根目录，然后进入 `themes/` 文件夹。

```shell:no-line-numbers
cd themes
```

- **步骤 2**: 克隆 `Aurora` 主题的代码到 `aurora/` 文件夹。

```shell:no-line-numbers
git clone https://github.com/aurora-ui/hexo-theme-aurora.git aurora
```

- **步骤 3**: 跳转到 `aurora/` 主题文件夹。

```shell:no-line-numbers
cd aurora
```

- **步骤 4**: 使用 [npm](https://www.npmjs.cn/getting-started/installing-node/) 或者 [yarn](https://www.yarnpkg.cn/getting-started/install) 来安装这个主题需要的依赖包。

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

- **步骤 5**: 因为使用了 Vue-router，Hexo 默认生成的页面和文章的 permalink 与我们 Vue router 中的 path 是不相符的，那么就会出现无法访问的问题。所以我们需要修改 Hexo 默认配置文件里面的 `permalink` 参数。

  - **步骤 5.1**: 打开在 Hexo 根目录下的 `_config.yml`
  - **步骤 5.2**: 修改 `permalink` 参数为 `/post/:title.html`

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

- **步骤 6**: 使用以下命令来运行本地环境。

:::tip
所有的变动会自动重新生成文件，但是要查看变化就必须刷新页面，因为整个主题的数据都是通过 API 获取的。
:::

```shell:no-line-numbers
hexo clean & hexo g & hexo server
```

当文件都生成完毕之后，就可以通过 [https://localhost:4000](https://localhost:4000) 访问你的博客了。

- **步骤 5 (可选)**: 如果你需要替换默认的 CDN 地区，那么在修改了地区之后就需要重新打包这个主题。

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
