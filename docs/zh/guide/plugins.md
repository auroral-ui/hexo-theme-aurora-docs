# 插件

这个主题支持几个不同的插件。每个插件都将为主题提供高级特性。

> 在不久的将来会添加更多的插件!

## 多个作者

这插件支持为每一篇文章设置一个作者。给一篇文章设置作者有两种方法。

**方法 1** - 在文章的 markdown 文件的**Front-Meta**中配置 author 属性。

```markdown:no-line-numbers
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
author:
  name: Tom
  link: https://tridiamond.tech
  avatar: https://avatar.png
---
```

**方法 2** - 为网站预配置作者列表，然后在文章“author”属性中使用预配置的作者键。

- 首先你需要预先配置一个作者列表在主题配置文件，这是在 `_config.aurora.yml`。

```yaml:no-line-numbers
authors:
  author-1:
    name: Tom
    avatar: https://Tom.png
    link: https://github.com/TriDiamond
  author-2:
    name: Jerry
    avatar: https://Jerry.png
    link: https://github.com/TriDiamond
```

- 然后你可以在文章的**Front-Meta**中使用 `author` 的 key 来设置作者。

```markdown:no-line-numbers
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
author: author-1
---
```

:::tip
如果没有为篇文章设置`author`属性，博客的默认作者将被用作文章的作者。
:::

## 评论

这个主题目前支持两个不同的评论插件。您可以使用`enable`配置来打开以下一款评论插件。

:::tip
如果你同时打开了两个插件，**Gitalk**将会优先被使用。
:::

### Gitalk

配置属性：

|         属性          | 描述                                                                                                                                                                         |
| :-------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       `enable`        | 使用**true**开启, 使用**false**关闭                                                                                                                                          |
|     `autoExpand`      | 如果设置为**true**, Github 评论将会自动展开。否者默认会收起。                                                                                                                |
|      `clientID`       | **clientID** 是你 GitHub 的 Oauth APP 中提供的。                                                                                                                             |
|    `clientSecret`     | **clientSecret** 是你 GitHub 的 Oauth APP 中提供的。                                                                                                                         |
|        `repo`         | 仓库名, 比如: https://github.com/auroral-ui/**hexo-theme-aurora-docs**, 名字就是 `hexo-theme-Aurora-docs`                                                                    |
|        `owner`        | 仓库拥有者的用户名. 比如: `auroral-ui`                                                                                                                                       |
|        `admin`        | 仓库管理员的用户名，这里可以填写多个管理员。(也用于标记那个评论是博主的)                                                                                                     |
|         `id`          | **确保唯一性和长度小于 50**，如果您使用`pathname`，请确保长度小于 50 个字符或使用`uid`代替，这个有更好的兼容性 (如果您之前使用其他主题，谁用 uid 将可能无法显示您之前的评论) |
|      `language`       | 使用 `en ` 设置为英文，使用 `cn` 设置为中文.                                                                                                                                 |
| `distractionFreeMode` | 与 Facebook 一样的专注模式，点击评论输入框时会让背景变暗。`true` 来开启 `false` 来关闭                                                                                       |
|    `recentComment`    | 是否开启最近评论功能。                                                                                                                                                       |
|        `proxy`        | GitHub 授权请求的反向代理                                                                                                                                                    |

:::warning
如果你在使用 Gitalk 的时候，出现 403 或者 422 这种报错的话，请根据[这里的教程](https://mjava.top/archive/33f09b03-a5a7-4d66-93d3-7063905f9b81/)，自己搭建一个反向代理服务，然后把你建立好的方向代理地址配置给 `proxy` 即可。
:::

更多的使用指南请查看 [Gitalk's](https://github.com/gitalk/gitalk/blob/master/readme-cn.md) 插件的官网。

### Valine

配置属性：

|      属性       | 描述                                                             |
| :-------------: | :--------------------------------------------------------------- |
|    `enable`     | 使用**true**开启, 使用**false**关闭.                             |
|    `app_id`     | 从 LeanCloud 的应用中得到的 `app_id`.                            |
|    `app_key`    | 从 LeanCloud 的应用中得到的 `appKey`.                            |
|    `avatar`     | [Gravatar](https://valine.js.org/en/avatar.html) 头像展示方式。  |
|  `placeholder`  | 评论框占位提示符。                                               |
|    `visitor`    | 文章访问量统计。                                                 |
|     `lang`      | 如需自定义语言，请参考 [i18n](https://valine.js.org/i18n.html)。 |
|     `meta`      | 评论者相关属性。 `['nick','mail','link']`                        |
|     `admin`     | 用于标记那个评论是博主的                                         |
| `recentComment` | 是否开启最近评论功能。                                           |

更多的使用指南请查看 [Valine's](https://valine.js.org/) 插件的官网。
