# 社交链接

## 社交配置

这部分用于配置我们的社交链接，这些链接会在我们的简介中显示。

社交配置会有以下配置项：

|     配置项      | 说明                      |
| :-------------: | :------------------------ |
|    `github`     | Github 简介页链接.        |
|    `twitter`    | Twitter 个人页链接.       |
| `stackoverflow` | Stackoverflow 个人页链接. |
|     `weibo`     | 微博个人页链接.           |
|     `zhihu`     | 知乎简介页链接.           |
|     `csdn`      | CSDN 简介页链接.          |
|    `juejin`     | 掘金简介页链接.           |

例子:

```yaml:no-line-numbers
socials:
  github: 'https://github.com/TriDiamond'
  twitter: ''
  stackoverflow: ''
  weibo: 'https://weibo.com/u/7318914058'
  zhihu: 'https://www.zhihu.com/people/tridiamond'
  csdn: 'https://blog.csdn.net/TriDiamond6'
  juejin: 'https://juejin.cn/user/1873223546578589'
```

## 自定义社交链接

> - 版本 `1.3.0` 后加入的功能
> - 版本 `1.4.3` 修改了这个配置方式

除了默认的社交链接，你还可以添加更多的社交链接到主题。

**自定义社交链接配置**模板是这样配置的：

:::tip
自从版本 `1.4.3` 自定义社交链接集成到默认的社交配置。 **使用`custom`属性设置您的自定义社交链接**
:::

```yaml:no-line-numbers{9-24}
socials:
  github: 'https://github.com/TriDiamond'
  twitter: ''
  stackoverflow: ''
  weibo: 'https://weibo.com/u/7318914058'
  zhihu: 'https://www.zhihu.com/people/tridiamond'
  csdn: 'https://blog.csdn.net/TriDiamond6'
  juejin: 'https://juejin.cn/user/1873223546578589'
  customs:
    #! Example:
    #! --- Using SVG
    bilibili:
      icon: /svg/bilibili.svg
      link: https://live.bilibili.com/22619211

    #! --- Using IconFont
    baidu:
      icon: iconfont icon-baidu
      link: https://live.bilibili.com/22619211

    #! --- Using FontAwesome
    book:
      icon: far fa-address-book
      link: https://live.bilibili.com/22619211
```

自定义社交链接支持使用 `SVG`、 `iconfont`、 `jpg` 和 `png`。

### 使用 SVG

要使用 SVG 作为社交链接图标，首先需要将 SVG 文件放入 Hexo 资源 (`source`) 文件夹。

例如，在 Hexo 的 `source/` 文件夹中创建一个 `svg/` 文件夹，然后当中创建一个 `facebook.svg`文件。

```shell:no-line-numbers
.
└── source
    └── svg
        └── facebook.svg
```

这个 `facebook.svg` 的内容如下: （SVG 的代码来源于 [`Iconfont`](https://www.iconfont.cn/search/index?searchType=icon&q=facebook)）

```html:no-line-numbers
<svg
  t="1617982966331"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="2161"
  width="200"
  height="200"
>
  <path
    d="M580.266667 469.333333h-51.2a17.066667 17.066667 0 0 1-17.066667-17.066666V426.666667a128 128 0 0 1 128-128h68.266667c9.386667 0 17.066667 7.68 17.066666 17.066666v51.2a17.066667 17.066667 0 0 1-17.066666 17.066667H640a42.666667 42.666667 0 0 0-42.666667 42.666667v25.6a17.066667 17.066667 0 0 1-17.066666 17.066666zM512 853.333333v-256h-68.266667a17.066667 17.066667 0 0 1-17.066666-17.066666v-51.2c0-9.386667 7.68-17.066667 17.066666-17.066667h264.533334c9.386667 0 17.066667 7.68 17.066666 17.066667v51.2a17.066667 17.066667 0 0 1-17.066666 17.066666H597.333333v256h85.333334a170.666667 170.666667 0 0 0 170.666666-170.666666V341.333333a170.666667 170.666667 0 0 0-170.666666-170.666666H341.333333a170.666667 170.666667 0 0 0-170.666666 170.666666v341.333334a170.666667 170.666667 0 0 0 170.666666 170.666666h170.666667zM341.333333 85.333333h341.333334a256 256 0 0 1 256 256v341.333334a256 256 0 0 1-256 256H341.333333a256 256 0 0 1-256-256V341.333333a256 256 0 0 1 256-256z"
    p-id="2162"
  >
  </path>
</svg>
```

添加 svg 文件后，需要将其配置到 `_config.aurora.yml` 的配置文件中。

```yaml:no-line-numbers
socials:
  customs:
    facebook:
      icon: /svg/facebook.svg
      link: https://facebook.com
```

### 使用 Icon-Font

要使用 IconFont，你首先需要引入图标库所需的 CSS。

比如，如果你使用的是 **阿里巴巴的 IconFont**，首先你需要添加 CSS 链接到 `injects` 属性。

```yaml:no-line-numbers{8-9}
#! ---------------------------------------------------------------
#! Injections
#! @docs https://aurora.tridiamond.tech/guide/site-meta.html#custom-meta
#! ---------------------------------------------------------------
injects:
  scripts:
  css:
    - <link rel="stylesheet" href="//at.alicdn.com/t/font_2476818_87vaqng7dno.css" />
```

通常使用 icon-font 时，你需要将这段代码放入 HTML 中。

```html:no-line-numbers
<i class="iconfont icon-facebook"></i>
```

你需要自定义社交链接的`图标`，就是这个代码中的 class 属性，那么这里就是 `iconfont icon-facebook`。

因此，你需要像这样配置你的自定义社交链接：

```yaml:no-line-numbers
socials:
  customs:
    #! --- Using IconFont
    facebook:
      icon: iconfont icon-facebook
      link: https://facebook.com
```

### 使用图片

目前主题支持使用 `jpg` 和 `png`。使用图像与使用 SVG 基本相同，你需要将图像放入 Hexo 的 `source` 文件夹中。

```shell:no-line-numbers
.
└── source
    └── img
        └── facebook.png # 或者使用 facebook.jpg
```

然后你可以这样配置它：

```yaml:no-line-numbers
socials:
  customs:
    facebook:
      icon: /img/facebook.png
      link: https://facebook.com
```

:::warning
确保每个自定义社交链接的 `key` 值是唯一的。
:::
