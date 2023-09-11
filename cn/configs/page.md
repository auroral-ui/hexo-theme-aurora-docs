# 页面 & 导航

任何用 Hexo 创建的 **自定义页面** 都可以在 Aurora 中配置到导航中。

## 如何创建页面

使用 Hexo 可以很轻易的创建一个页面，只需要在 source 文件夹中创建一个页面文件夹，然后在里面建立一个 `index.md` 即可，或者使用 Hexo 的 `add` 命令。

比如现在你想添加一个 **留言板（Message Board）** 页面。你只需要执行这个命令：

```shell:no-line-numbers
hexo new page message-board
```

执行后，你会发现 `source` 文件夹里面会出现一个 `message-board` 的文件夹。

```shell{3-4}:no-line-numbers
.
└── source
    └── message-board # 页面生成的文件夹
        └── index.md # 自动生成的 index.md 文件
```

如果你看到这个文件夹和文件被生成了，证明你的页面已经生成成功。

#### 配置导航

然后我们需要去 `_config.aurora.yml` 配置一下这个页面的导航:

```yaml{6-12}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # Custom menus
  pages-menu:
    name: 'MessageBoard'
    path: '/page/message-board'
    i18n:
      cn: 留言板
      en: Message board
```

## 创建关于页

主题默认开启了 `about` 页面，所以我们需要创建这个 about 页，要不主题就无法正常显示 about 页。

要创建这个默认的 about 页，只需要执行这个 `Hexo 的命令`：

```shell:no-line-numbers
hexo new page about
```

执行完毕后，你会发现在 `source/` 文件中多处了一个新的文件夹：

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

#### 配置导航

然后我们需要去 `_config.aurora.yml` 配置一下这个页面的导航:

```yaml{2}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
```

你可以随意修改这个 `index.md` markdown 文件中的内容，此文件的内容将会现在在我们的 about 页面中。

## 创建友链页

友链页面用于展示博主朋友的博客。页面的名字叫 links

要创建这个默认的 links 页，只需要执行这个 `Hexo 的命令`：

```shell:no-line-numbers
hexo new page links
```

执行完毕后，你会发现在 `source/` 文件中多处了一个新的文件夹：

```shell:no-line-numbers
.
└── source
    └── links
        └── index.md
```

#### 配置导航

然后我们需要去 `_config.aurora.yml` 配置一下这个页面的导航:

```yaml{5}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  Links: true
```

基本友链的内容都是在 index.md 的 Front-meta 中配置。

#### 基础属性：

|      属性      | 使用描述                                                                                                  |
| :------------: | :-------------------------------------------------------------------------------------------------------- |
|     `type`     | 这个直接填 `friends`                                                                                      |
| `categoryMode` | 值：`true` 或者 `false`；用于控制友链展示的格式，true 就是把友链按 label 分类展示，false 就是都在一起展示 |
|     `data`     | 值：数组；用于储存所有友链的数据，看下方的 data 属性表了解可用的数据字段                                  |

#### data 属性：

|     属性      | 使用描述                                                                                                              |
| :-----------: | :-------------------------------------------------------------------------------------------------------------------- |
|    `nick`     | 博主的昵称                                                                                                            |
|   `avatar`    | 博主的头像链接                                                                                                        |
| `description` | 简单的自我介绍                                                                                                        |
|    `link`     | 博客链接                                                                                                              |
|    `label`    | 标签；这里可以使用主题提供的标签，看下面 label 可用值，这些标签可以自动转换中英文，同时也可以写你们自己的。比如：生活 |

:::tip
使用主题的 label 的话，在使用 `categoryMode = true` 分类模式时，也会在每个分类标题下看到主题提供的 label 介绍。
:::

#### label 值

|         标签名         | 使用描述                     |
| :--------------------: | :--------------------------- |
|   `links-badge-vip`    | 中文：赞助者；英文：sponsors |
|   `links-badge-tech`   | 中文：技术；英文：technical  |
| `links-badge-personal` | 中文：个人；英文：personal   |
| `links-badge-designer` | 中文：设计；英文：designer   |

#### 配置示范

```yaml
---
title: friends
date: 2023-08-06 17:19:32
type: friends
categoryMode: true
data:
  - nick: 三钻
    avatar: https://res.cloudinary.com/tridiamond/image/upload/v1625037705/ObsidianestLogo-hex_hecqbw.png
    description: Think like an artist, develop like an artisan.
    link: https://tridiamond.tech/
    label: links-badge-vip
---
```

你可以随意修改这个 `index.md` markdown 文件中的内容，此文件的内容将会现在在我们的友链展示之后展示。

## 配置菜单

要在菜单中显示，你需要在 **menu 配置** 中添加菜单配置。

打开在 `_config.aurora.yml` 的主题的配置文件，然后添加你新生成的页面配置如下：

```yaml{6-11}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # 自定义菜单
  message-board:
    name: 'MessageBoard'
    i18n:
      cn: '留言板'
      en: 'Message Board'
    path: '/page/message-board'
```

配置中需要配置以下的属性：

|  属性  | 使用描述                                                                                          |
| :----: | :------------------------------------------------------------------------------------------------ |
| `name` | 这个属性就是菜单的名字。（用于标记这个 route，请确保它的唯一性）                                  |
| `i18n` | i18n 菜单选项，请查看[i18n menu](/zh/guide/menu.html#i18n-%E8%8F%9C%E5%8D%95)以了解更多使用细节。 |
| `path` | 配置自定义页面，你需要使用这个模版 `/page/[页面文件夹名]`                                         |

:::tip
如果你需要配置多个页面到一个子菜单里面，那么你可以这么配置。
:::

```yaml{6-17}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # 多个自定义页面在子菜单
  pages-menu:
    name: 'Top Menu'
    children:
      page-1:
        name: 'Page 1'
        path: '/page/page-1'
      page-2:
        name: 'Page 2'
        path: '/page/page-2'
      page-3:
        name: 'Page 3'
        path: '/page/page-3'
```
