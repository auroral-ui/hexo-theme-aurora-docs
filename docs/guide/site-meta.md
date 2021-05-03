# Site Meta

This part of the configuration mainly help us configure the `meta(s)` in the `header` section.

---

**CHANGELOG**

> - Version `1.5.0`
>   - Added [SEO meta(s)](/guide/site-meta.html#seo-meta)

---

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

After change the `cdn` property, you will need to rebuild the Hexo static files by running the following command.

```shell:no-line-numbers
hexo cl && hexo g
```

---

## SEO meta

- `description`: description of the site.
- `keywords`: keywords of the site.
- `author`: author of the site.

```yaml:no-line-numbers{4-6}
site_meta:
  cdn: cn
  favicon:
  description: '一位正在重塑知识的技术人 公众号：技术银河'
  keywords: 'Frontend, Web development, Blog, Aurora Theme, TriDiamond'
  author: 'TriDiamond'
```

---

## Custom Meta

Custom `Script` or `CSS` links can be added to the theme easier in the configuration file, you simply use the `injects` setting to do so.

The `injects` setting has 2 options, each can set multiple Scripts and CSS links.

- `scripts` - for listing script links
- `css` - for listing css links

For example you want to add in the Live2D widget, here is how you could set it up. here I use [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget).

```yaml:no-line-numbers
#! ---------------------------------------------------------------
#! Injections
#! ---------------------------------------------------------------
injects:
  scripts:
    - <script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
  css:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```

Then rebuild the Hexo static files:

```shell:no-line-numbers
hexo cl && hexo g
```
