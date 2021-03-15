# 配置

## 配置文件

一共有两个配置文件，一个是 **Hexo 自身**的配置，一个是**主题专用**的配置。

- [Hexo 配置](https://hexo.io/docs/configuration.html) 文件是在 **Hexo 项目的根目录**下
- 主题的配置文件是在**主题的根目录**下

```shell:no-line-numbers{2,5}
. # Hexo 项目根目录.
├─ _config.yml # Hexo 配置文件.
└─ themes
   └─ obsidianext # 主题文件夹.
      └─ _config.yml # 主题配置文件.
```

:::tip
大部分主题的功能都是使用主题配置，但是有部分需要用到 Hexo 插件的就需要在 Hexo 的配置中修改。
:::

## 基础配置

我们可以使用 `site` 来设置我们博客的主要信息和配置。

`site` 配置拥有以下选项：

|       选项       |  接受类型   | 使用说明                                                                                   |
| :--------------: | :---------: | ------------------------------------------------------------------------------------------ |
|    `subtitle`    |   String    | 博客自标题，页面主标题后面会跟随这个标题内容。                                             |
|     `author`     |   String    | 博客作者名字，或者是博客名字。会在 **header 的 logo 区域**显示，也会在**博客简介**中显示。 |
|      `nick`      |   String    | 博客子名字，会在 header 的 logo 下方显示。                                                 |
|  `description`   |   String    | 会在博客简介中显示，用几句话描述博主相关信息（支持 HTML 标签）                             |
|    `language`    |   en, cn    | 配置默认博客语言，en 是英文，cn 是中文。                                                   |
| `multi_language` | true, false | 开启博客的多语言支持                                                                       |
|      `logo`      |   String    | Logo 的图片链接 image.                                                                     |
|     `avatar`     |   String    | 头像的图片链接 image.                                                                      |
|     `beian`      |   String    | 网站备案信息 information.                                                                  |

:::tip
如果每首设置 `avatar` 的图片链接，默认会去取 logo 的图片链接。
:::

Site 配置例子：

```yaml
# Site Config
site:
  subtitle: TriDiamond's Blog
  author: 三钻
  nick: TriDiamond
  description: 一位正在重塑知识的技术人 <br /> @ <b>公众号：技术银河</b>
  language: cn
  multi_language: true
  logo: https://image-website.com/path-to-image.jpg
  avatar: https://image-website.com/path-to-image.jpg
  beian: ''
```
