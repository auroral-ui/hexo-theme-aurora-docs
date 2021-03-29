# Plugins

This theme supports a couple of different plugins. Each plugin will provide advance features for the theme.

> More plugins will be added in the near future!

## Multiple Authors

This support different author for each article. There are two ways to setup authors for an article.

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
  name: Tom
  link: https://tridiamond.tech
  avatar: https://avatar.png
---
```

**Method 2** - Pre-configure a list of authors for the site, then use the pre-configured author key in the article `author` attribute.

- First you need to pre-configure a list of authors in the theme config file, which is at `themes/Aurora/_config.yml`.

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

## Comments

This theme currently supports two different comment plugins. You can use the `enable` config to turn on one of the following comment plugin.

:::tip
If you turn both comment plugins, **Gitalk** will be used over **Valine**.
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

For more usage information, go to [Gitalk's]() repo.

### Valine

Config attributes:

|   Attributes    | Description                                   |
| :-------------: | :-------------------------------------------- |
|    `enable`     | **true** to enable, **false** to disable.     |
|    `app_id`     | **app_id** is provided by your Leancloud APP  |
|    `app_key`    | **app_key** is provided by your Leancloud APP |
|    `avatar`     | 123                                           |
|  `placeholder`  | 123                                           |
|    `visitor`    | 123                                           |
|     `lang`      | 123                                           |
|     `meta`      | 123                                           |
|     `admin`     | 123                                           |
| `recentComment` | To enable recent comment feature.             |

For more usage information, go to [Valine's]() documentation website.
