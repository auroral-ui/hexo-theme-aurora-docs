# Site Meta

This part of the configuration mainly help us configure the `meta(s)` in the `header` section.

## CDN config

Due to the fact that international CDN is extremely slow for China, therefore this part is used for bloggers that are hosting their blog in the China region.

| Properties | Usages                                               |
| :--------: | :--------------------------------------------------- |
|    `en`    | Will use **Jsdelivr CDNs** for all the script links. |
|    `cn`    | Will use **BootCDN** for all the script links.       |

Example:

```yaml:no-line-numbers
site_meta:
  # CDN switcher
  cdn: en
```

:::warning
This theme is compiled by webpack into a static site, therefore after editing this , you will **need to rebuild the application** by running `npm run build` or `yarn build`.
:::

## Custom Meta

For you bloggers out there that would like to edit the theme, in certain situation you would probably need to add a few scripts or meta to the application. This part will help you find out how to add custom scripts links or meta.

This theme had adapted two different entry `index.html` file for the purpose of multi-region CDN support. If you want to add in a custom script link, you will have to edit the respective entry file for your locale.

In the previous section, you can configure International and China CDN setup, therefore there are two `index.html` file, which are at:

```shell:no-line-numbers
.
└── public
    ├── index.html # <- for local development only
    ├── index_en.html # <- for CDN set to 'en'
    └── index_cn.html # <- for CDN set to 'cn'
```

For example, if you would like to add `animate.css` style link when CDN is set to `en`:

```html{30-34}:no-line-numbers
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
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/prism.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-bash.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-javascript.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-java.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-liquid.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-markdown.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-markup-templating.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-css.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-scss.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-php.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.min.css"
    />
    <!-- Google rubik fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Rubik"
    />
    <!-- Animate CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/anime.css@1.0.1/anime.min.css"
    />
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

:::warning
This theme is compiled by webpack into a static site, therefore after editing this , you will **need to rebuild the application** by running `npm run build` or `yarn build`.
:::
