# Plugins

This theme supports a couple of different plugins. Each plugin will provide advance features for the theme.

> More plugins will be added in the near future!

## Multiple Authors

This plugin supports multi-author, this feature is designed for multi-author blogs or communities.

The concept is like this, as the default author, there is no need to write the author over and over in every post's markdown file. Therefore, in the [site configure](/guide/configuration.html#site-configs), there is an author property to set the default blog author. Once that is set, all your posts will inherit the default author, unless specified.

To setup different author for each article. There are two ways to setup authors for an article.

> Since [`v1.2.x`](https://github.com/auroral-ui/hexo-theme-aurora/releases/tag/v1.2.0) author supports more properties.

**Method 1** - Configure the `author` attribute in the **Front-Meta** in the article's markdown file.

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
  name: TriDiamond
  link: https://tridiamond.tech
  avatar: https://avatar.png
  description: 'Think like an artist, code like an artisan.'
  socials:
    github: https://github.com/tridiamond
---
```

---

**Method 2** - Pre-configure a list of authors for the blog, then use the pre-configured `author key` in the article `author` property.

- First you need to pre-configure a list of authors in the theme config file, which is at `_config.aurora.yml`.

```yaml:no-line-numbers
authors:
  author-1:
    name: TriDiamond
    link: https://tridiamond.tech
    avatar: https://avatar.png
    description: 'Think like an artist, code like an artisan.'
    socials:
      github: https://github.com/tridiamond
  author-2:
    name: Jerry
    avatar: https://Jerry.png
    link: https://github.com/TriDiamond
    description: 'I am Jerry, how are you?'
    socials:
      github: https://github.com/Jerry
```

- Then you can use the author `keys` in the theme config to set the author in the article **Front-Meta**.

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
If no `author` attribute is set for an post, the default author of the blog will be used.
:::

## Comments

This theme currently supports two different comment plugins. You can use the `enable` attribute to turn on one of the following comment plugin.

:::tip
If you turned `on` both comment plugins, **Gitalk** will be used over **Valine**.
:::

### Gitalk

Config attributes:

|      Attributes       | Description                                                                                                                                                                                                                     |
| :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       `enable`        | **true** to enable, **false** to disable.                                                                                                                                                                                       |
|     `autoExpand`      | If set to **true**, the comment will expand out automatically.                                                                                                                                                                  |
|      `clientID`       | **clientID** is provided by your Github OauthAPP                                                                                                                                                                                |
|    `clientSecret`     | **clientSecret** is provided by your Github OauthAPP                                                                                                                                                                            |
|        `repo`         | Repository name, eg: https://github.com/Aurora/**hexo-theme-Aurora-docs**, repo is `hexo-theme-Aurora-docs`                                                                                                                     |
|        `owner`        | Repository's owner's name. eg: `Aurora`                                                                                                                                                                                         |
|        `admin`        | Repository's admins' names. This can fill in multiple admin names.                                                                                                                                                              |
|         `id`          | **Ensure uniqueness and length less than 50**. If you are using 'pathname' ensure length is less than 50 characters or use 'uid' instead for better compatibility (If you use other theme before, this will lost your comments) |
|      `language`       | Can be `en ` for English or `cn` for Chinese.                                                                                                                                                                                   |
| `distractionFreeMode` | Facebook-like distraction, `true` to turn on, `false` to turn off.                                                                                                                                                              |
|    `recentComment`    | To enable recent comment feature.                                                                                                                                                                                               |
|        `proxy`        | GitHub oauth request reverse proxy for CORS.                                                                                                                                                                                    |

For more usage information, go to [Gitalk's](https://github.com/gitalk/gitalk) repo.

### Valine

Config attributes:

|   Attributes    | Description                                                                             |
| :-------------: | :-------------------------------------------------------------------------------------- |
|    `enable`     | **true** to enable, **false** to disable.                                               |
|    `app_id`     | Application `app_id` from Leancloud.                                                    |
|    `app_key`    | Application `app_key` from Leancloud.                                                   |
|    `avatar`     | See the [Avatar setting](https://valine.js.org/en/avatar.html) for more details.        |
|  `placeholder`  | Comment box placeholders.                                                               |
|    `visitor`    | Article reading statistics.                                                             |
|     `lang`      | If you need a custom language, please refer to [i18n](https://valine.js.org/i18n.html). |
|     `meta`      | Reviewer attributes. `['nick','mail','link']`                                           |
|     `admin`     | Used to define which comment is posted by author of the blog.                           |
| `recentComment` | To enable recent comment feature.                                                       |

For more usage information, go to [Valine's](https://valine.js.org/) documentation website.
