# 网页 Meta

这部分主要帮助我们配置页面 `header` 部分的 `meta` 信息

---

**更新日志**

> - 版本 `1.5.0`
>   - 添加了 [SEO meta(s)](/zh/guide/site-meta.html#seo-meta)

---

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

更改 `cdn` 属性后，您需要运行以下命令重新构建 Hexo 静态文件。

```shell
hexo cl && hexo g
```

---

## SEO meta

- `description`: 对站点的描述.
- `keywords`: 网站的关键词.
- `author`: 网站作者.

```yaml:no-line-numbers{4-6}
site_meta:
  cdn: cn
  favicon:
  description: '一位正在重塑知识的技术人 公众号：技术银河'
  keywords: 'Frontend, Web development, Blog, Aurora Theme, TriDiamond'
  author: 'TriDiamond'
```

---

## 自定义 Meta

在配置文件中，可以很轻易的把自定义 `Script` 或 `CSS` 链接添加到主题中。你只需使用“injectable”设置即可。

`注入` 设置有两个选项，每个选项都可以设置多个 Script 和 CSS 链接。

- `scripts` - 用于配置多个脚本链接
- `css` -用于配置多个 css 链接

例如，您希望添加 Live2D 小部件，以下是如何设置它的方法。这里我使用[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)。

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

然后重建 Hexo 静态文件:

```shell:no-line-numbers
hexo cl && hexo g
```
