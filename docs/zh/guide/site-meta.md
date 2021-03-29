# 网页 Meta

这部分主要帮助我们配置页面 `header` 部分的 `meta` 信息

## CDN 配置

因为在国内使用国外的 CDN 链接会让网站变得非常的慢，所以这个配置可以根据你的需求切换国际或国内的 CDN。

| 属性 | 使用                                      |
| :--: | :---------------------------------------- |
| `en` | 所有脚本将使用 **Jsdelivr CDNs** 的链接。 |
| `cn` | 所有脚本将使用 **BootCDN** 的链接。       |

例子:

```yaml
site_meta:
  # CDN 切换
  cdn: cn
```

:::warning 注意
因为这个主题是用 Vue 打包而成的静态网页，所以这个修改完成后，需要我们执行 `npm run build` 或者 `yarn build` 来重新打包静态网页代码。
:::

## 自定义 Meta

动手能力强的同学，可能会去自己改动主题的代码，有些时候你们可能会需要在头部添加一些脚本引用或者其他 meta 信息。这部分就是教大家如何在这个主题中添加这些信息。

为了支持 CDN 切换，这个主题有两个不同的静态 `index.html` 入口文件。如果你想添加自定义头部 meta 信息的话，就要找到对应的文件进行修改。

在 CDN 配置中，我们可以设置国际和国内的 CDN，所以我们就有两个对应的 `index.html` 文件，分别是：

```shell:no-line-numbers
.
└── public
    ├── index.html # <- 只用于本地开发
    ├── index_en.html # <- 当 CDN 设置为 'en' 时使用
    └── index_cn.html # <- 当 CDN 设置为 'cn' 时使用
```

比如，现在你想添加 `anime.css` 的样式链接，并且我们的 CDN 配置设置为 `cn` 时：

```html{26-30}:no-line-numbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <!-- Busuanzi site statistic generator -->
    <script
      async
      src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
    ></script>
    <!-- Prismjs -->
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/prism.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-bash.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-javascript.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-java.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-liquid.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-markdown.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-markup-templating.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-css.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-scss.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/components/prism-php.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.bootcdn.net/ajax/libs/prism/1.22.0/themes/prism.min.css"
    />
    <!-- Animate CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/anime.css@1.0.1/anime.min.css"
    />
    <!-- Google rubik fonts -->
    <style>
      /* rubik-regular */
      @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        src: url('//lib.baomitu.com/fonts/rubik/rubik-regular.eot'); /* IE9 Compat Modes */
        src: local('Rubik'), local('Rubik-Normal'),
          url('//lib.baomitu.com/fonts/rubik/rubik-regular.eot?#iefix')
            format('embedded-opentype'),
          /* IE6-IE8 */ url('//lib.baomitu.com/fonts/rubik/rubik-regular.woff2')
            format('woff2'),
          /* Super Modern Browsers */
            url('//lib.baomitu.com/fonts/rubik/rubik-regular.woff')
            format('woff'),
          /* Modern Browsers */
            url('//lib.baomitu.com/fonts/rubik/rubik-regular.ttf')
            format('truetype'),
          /* Safari, Android, iOS */
            url('//lib.baomitu.com/fonts/rubik/rubik-regular.svg#Rubik')
            format('svg'); /* Legacy iOS */
      }
    </style>
  </head>
  <body>
    <noscript>
      <strong>
        We're sorry but <%= webpackConfig.name %> doesn't work properly without
        JavaScript enabled. Please enable it to continue.
      </strong>
    </noscript>
    <div id="app"></div>
    <div id="modal-container"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

:::warning 注意
因为这个主题是用 Vue 打包而成的静态网页，所以这个修改完成后，需要我们执行 `npm run build` 或者 `yarn build` 来**重新打包静态网页代码**。
:::
