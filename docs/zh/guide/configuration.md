# 配置

## 配置文件

一共有两个配置文件，一个是 **Hexo 自身**的配置，一个是**主题专用**的配置。

```shell:no-line-numbers
. # Hexo 项目根目录.
├─ _config.yml # Hexo 配置文件.
└─ _config.aurora.yml # 主题配置.
```

:::warning
大部分主题的功能都是使用主题配置文件的，但是有部分需要用到 Hexo 插件的就需要在 Hexo 的配置中修改。
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
|     `beian`      |   Object    | 网站备案信息 (从版本 1.1.0 开始，这个配置拥有两个属性)                                     |

:::tip
如果每首设置 `avatar` 的图片链接，默认会去取 logo 的图片链接。
:::

---

### 网站备案信息

> `beian` 选项

|   选项   | 接受类型 | 使用说明  |
| :------: | :------: | --------- |
| `number` |  String  | 备案编号. |
|  `link`  |  String  | 备案链接. |

---

### 公安备案信息

> `police_beian` 选项

|   选项   | 接受类型 | 使用说明  |
| :------: | :------: | --------- |
| `number` |  String  | 备案编号. |
|  `link`  |  String  | 备案链接. |

---

## 配置例子

```yaml:no-line-numbers
# Site 配置
site:
  subtitle: TriDiamond's Blog
  author: 三钻
  nick: TriDiamond
  description: 一位正在重塑知识的技术人 <br /> @ <b>公众号：技术银河</b>
  language: cn
  multi_language: true
  logo: https://image-website.com/path-to-image.jpg
  avatar: https://image-website.com/path-to-image.jpg
  beian: # 如果不需要可以让 number 和 link 保持空白
    number: "123123123123"
    link: 'https://link-to-beian.com'
  police_beian:
    number: "123123123123"
    link: 'https://link-to-police-beian.com'
```

## 推荐文章

Aurora 主题在首页有推荐板块，任何文章都可以设置在这里显示显示。

要设置一篇文章在推荐板块中显示，只需在 Front-Meta 中添加一个 `feature: true` 属性即可。

例如:

```markdown:no-line-numbers{9}
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
feature: true
---
```
