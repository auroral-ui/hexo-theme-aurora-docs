# 主题升级

## 从 v1.x 升级到 v2.x

在版本 2.x 中所有的 Hexo 的脚本和生成器都被移动到一个单独的 Hexo 插件包中 ([hexo-plugin-aurora](https://github.com/auroral-ui/hexo-plugin-aurora))。那么版本 2.x 后安装 Hexo Aurora 主题的方式就不一样了。

### 第一步 - 升级 Hexo and Hexo 插件

如果您正在运行旧版本的 Hexo 软件包，请确保将其升级到最新的版本 6.x+。

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn add hexo@latest
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install hexo@latest --save
```

  </CodeGroupItem>
</CodeGroup>

如果您还使用其他 Hexo 插件，请确保您也使用上述方法将它们更新到最新版本。

您只需在包名后面添加 `@latest` 即可获取最新的包。

例如: `yarn add hexo-filter-mathjax@latest`

或者直接使用下面的我的 `package.json` 中的依赖配置 dependencies (最后更新 2023 年 7 月 26 日):

```json
...

"dependencies": {
  "hexo": "^6.3.0",
  "hexo-filter-mathjax": "^0.9.0",
  "hexo-generator-archive": "^2.0.0",
  "hexo-generator-category": "^2.0.0",
  "hexo-generator-index": "^3.0.0",
  "hexo-generator-tag": "^2.0.0",
  "hexo-plugin-aurora": "^1.2.0",
  "hexo-renderer-ejs": "^2.0.0",
  "hexo-renderer-marked": "^6.1.0",
  "hexo-renderer-stylus": "^3.0.0",
  "hexo-server": "^3.0.0",
  "hexo-theme-aurora": "^2.0.0"
}

...
```

### 第二步 - 安装最新 Aurora 主题和插件

在升级了所有与 Hexo 相关的软件包之后，现在可以安装最新的 v2.x 的主题了。

您可以简单地运行以下命令。

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn add hexo-theme-aurora@latest hexo-plugin-aurora@latest
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install hexo-theme-aurora@latest hexo-plugin-aurora@latest --save
```

  </CodeGroupItem>
</CodeGroup>

### 第三步 - 清理并重新生成博客

在安装了最新的主题之后，您需要清理现有的 Hexo 数据并重新生成它。

只需运行以下命令:

```shell:no-line-numbers
hexo clean && hexo generate
```

这就是从版本 1 升级到版本 2 的方法。希望你喜欢，谢谢你们的支持!
