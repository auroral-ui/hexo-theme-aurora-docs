# Social Links

## Social Config

This part is used to config the social links, which is displayed under the profile section.

Social config has the following properties:

|     Options     | Usages                           |
| :-------------: | :------------------------------- |
|    `github`     | A link to Github profile.        |
|    `twitter`    | A link to Twitter.               |
| `stackoverflow` | A link to Stackoverflow profile. |
|     `weibo`     | A link to WeiBo homepage.        |
|     `zhihu`     | A link to ZhiHu profile.         |
|     `csdn`      | A link to CSDN profile.          |
|    `juejin`     | A link to JueJin profile.        |

Example:

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

## Custom Social Links

> - Added since version `1.3.0`
> - Changed since version `1.4.3`

Apart from the default social links, you can also add more social links to the theme.

**Custom Social Links configuration** template looks like this:

:::tip
Since version `1.4.3` custom social links are integrated into the default social configuration. **Use the `customs` property to set your custom social links.**
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

Custom social links support use of `SVG`, `iconfont`, `jpg` and `png`.

### Using SVG

To use SVG as the social link icon, you need to first place a SVG file into the Hexo resource folder.

For example, create a `svg/` folder in the hexo `source/` folder, then create a `facebook.svg` in the it.

```shell:no-line-numbers
.
└── source
    └── svg
        └── facebook.svg
```

The `facebook.svg` content will look like this: (SVG code is from [`Iconfont`](https://www.iconfont.cn/search/index?searchType=icon&q=facebook))

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

After adding the svg file, you will need to configure it to the `_config.aurora.yml` configuration file.

```yaml:no-line-numbers
socials:
  customs:
    facebook:
      icon: /svg/facebook.svg
      link: https://facebook.com
```

### Using Icon-Font

To use IconFont, you first need to include the CSS required for your `icon library`.

For example, if you are using **FontAwesome**, first you need to add the CSS links to the `injects` property.

```yaml:no-line-numbers{8-9}
#! ---------------------------------------------------------------
#! Injections
#! @docs https://aurora.tridiamond.tech/guide/site-meta.html#custom-meta
#! ---------------------------------------------------------------
injects:
  scripts:
  css:
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css" integrity="sha512-OdEXQYCOldjqUEsuMKsZRj93Ht23QRlhIb8E/X0sbwZhme8eUw6g8q7AdxGJKakcBbv7+/PX0Gc2btf7Ru8cZA==" crossorigin="anonymous" />
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
```

Normally using icon-font, you will place this code into the HTML.

```html:no-line-numbers
<i class="fab fa-facebook-square"></i>
```

What you need for the `icon` property of the custom social link is the classes in this code, which is `fab fa-facebook-square`.

Therefore you need to configure your custom social link like this:

```yaml:no-line-numbers
socials:
  customs:
    #! --- Using FontAwesome
    facebook:
      icon: fab fa-facebook-square
      link: https://facebook.com
```

### Using an image

Currently the theme support using `jpg` and `png`. Using an image is basically the same as using a SVG, you will need to put the image into Hexo's source folder.

```shell:no-line-numbers
.
└── source
    └── img
        └── facebook.png # or use facebook.jpg
```

Then you can configure it like this:

```yaml:no-line-numbers
socials:
  customs:
    facebook:
      icon: /img/facebook.png
      link: https://facebook.com
```

:::warning
Make sure the key values of each custom social link are unique.
:::
