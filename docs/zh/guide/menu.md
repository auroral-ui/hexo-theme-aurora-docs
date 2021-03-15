# 菜单

ObsidiaNext 主题的**菜单**是可以自主定义的，只需要通过在主题的 `_config.yaml` 中配置即可。

## 默认菜单

ObsidiaNext 拥有 3 个自带样式的页面，分别是**关于页**、**标签页**和**归档页**

首页和关于页默认是开启的，但是标签和归档页就可以通过修改主题配置里面的 `menu` 配置来开启或者关闭。

```yaml{2-3}
menu:
  Tags: true
  Archives: true
```

如果把 `true` 改为 `false` 就会把特定的页面在导航中屏蔽掉。

## 自定义菜单

除了主题自带的默认页面可以在导航中显示之外，我们还可以添加自定义的页面和外部链接。

### 外部链接

如果现在我们想添加一个通往我们 github 项目的外部链接，这个时候我们就可以在 menu 配置中这样写：

```yaml{4-7}
menu:
  Tags: true
  Archives: true
  # 一个 github 项目的外部链接
  obsidianext:
    name: 'ObsidiaNext'
    path: 'https://github.com/obsidianext/hexo-theme-obsidianext'
```

### 多级菜单

有时候我们还可能想分组一些链接，把一些链接放到二级导航里面。没问题，ObsidiaNext 的菜单系统也是支持多级菜单的。要创建一个多级菜单，我们只需要在 menu 的链接中添加一个 `children` 属性即可。

比如，现在我们想把我们所有的 github 项目链接都放入一个 projects 的主导航之下。我们就可以这样配置我们的 menu 选项：

```yaml{4-13}
menu:
  Tags: true
  Archives: true
  # 多级 projects 菜单配置
  projects:
    name: 'Projects'
    children:
      obsidian:
        name: 'Obsidian Theme'
        path: 'https://github.com/tridiamond/hexo-theme-obsidian'
      obsidianext:
        name: 'ObsidiaNext Theme'
        path: 'https://github.com/obsidianext/hexo-theme-obsidianext'
```

:::warning 注意
顶级链接是不需要配置 `path` 属性的，因为当它被点击时是不会跳转页面的。

就算我们给顶级链接配置了 `path`，这个 path 地址也会被忽略的。
:::

### 内部链接 <Badge type="warning" text="开发中" vertical="middle" />

开发中

## I18n 菜单

这个主题是支持 I18n 多语言的，所以我们的菜单也是支持多语言设置的。要博客根据博客的当前区域（locale）切换语言，就需要使用菜单中的 `i18n` 属性。

假如现在我们有一个菜单叫 `联系我`，同时我们想这个菜单可以支持英语和中文。这个时候我们就需要在给它一个 i18n 的名字。首先我们可以在 menu 配置中设置这个导航：

```yaml{7}
menu:
  Tags: true
  Archives: true
  # Multi-language Contact menu
  contact:
    name: 'Contact'
    i18n: 'contact'
    path: 'http://domain.com/contact'
```

然后我们在 `src/locales/language/en.json` (英文) 和 `src/locales/language/cn.json` (中)，这两个配置文件里面分别设置 contact 的英文和中文名字。

因为我们在配置的是 `menu` 菜单的 i18n，所以我们需要在 menu 中添加 `contact` 这个参数。

```json{12}
// 英文
// src/locales/language/en.json
{
  "menu": {
    "home": "Home",
    "about": "About",
    "archives": "Archives",
    "categories": "Categories",
    "tags": "Tags",
    "post": "Article",
    "not-found": "Page not found",
    "contact": "Contact Me"
  }
}
```

```json{12}
// 中文
// src/locales/language/cn.json
{
  "menu": {
    "home": "Home",
    "about": "About",
    "archives": "Archives",
    "categories": "Categories",
    "tags": "Tags",
    "post": "Article",
    "not-found": "Page not found",
    "contact": "联系我"
  }
}
```
