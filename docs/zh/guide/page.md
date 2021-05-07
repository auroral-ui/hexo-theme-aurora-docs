# 页面

任何用 Hexo 创建的 **自定义页面** 都可以在 Aurora 中配置到导航中。

## 创建页面

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

---

### 创建 “关于 (`about`)” 页面

主题默认开启了 `about` 页面，所以我们需要创建这个 about 页，要不主题就无法正常显示 about 页。

要创建这个默认的 about 页，只需要执行这个 `Hexo 的命令`：

```shell:no-line-numbers
hexo create page about
```

执行完毕后，你会发现在 `source/` 文件中多处了一个新的文件夹：

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

你可以随意修改这个 `index.md` markdown 文件中的内容，此文件的内容将会现在在我们的 about 页面中。

---

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
