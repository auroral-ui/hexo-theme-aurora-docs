# 菜单

Aurora 主题的**菜单**是可以自主定义的，只需要通过在主题的 `_config.aurora.yaml` 中配置即可。

## 默认菜单

Aurora 拥有 3 个自带样式的页面，分别是**关于页**、**标签页**和**归档页**

首页和关于页默认是开启的，但是标签和归档页就可以通过修改主题配置里面的 `menu` 配置来开启或者关闭。

```yaml{2-3}:no-line-numbers
menu:
  About: false
  Tags: true
  Archives: true
```

如果把 `true` 改为 `false` 就会把特定的页面在导航中屏蔽掉。

## 自定义菜单

除了主题自带的默认页面可以在导航中显示之外，我们还可以添加自定义的页面和外部链接。

### 外部链接

如果现在我们想添加一个通往我们 github 项目的外部链接，这个时候我们就可以在 menu 配置中这样写：

```yaml{4-7}:no-line-numbers
menu:
  Tags: true
  Archives: true
  # 一个 github 项目的外部链接
  Aurora:
    name: 'Aurora'
    path: 'https://github.com/Aurora/hexo-theme-Aurora'
```

自从版本 `v1.4.3`，外部链接也支持 `mailto` 链接。 这将把您的用户带到他们的电子邮件页面发送电子邮件。

```yaml{4-7}:no-line-numbers
menu:
  Tags: true
  Archives: true
  # External link for a github repo
  Email:
    name: 'Mail Me'
    path: 'mailto:code.tridiamond@gmail.com'
```

### 多级菜单

有时候我们还可能想分组一些链接，把一些链接放到二级导航里面。没问题，Aurora 的菜单系统也是支持多级菜单的。要创建一个多级菜单，我们只需要在 menu 的链接中添加一个 `children` 属性即可。

比如，现在我们想把我们所有的 github 项目链接都放入一个 projects 的主导航之下。我们就可以这样配置我们的 menu 选项：

```yaml{4-13}:no-line-numbers
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
      Aurora:
        name: 'Aurora Theme'
        path: 'https://github.com/Aurora/hexo-theme-Aurora'
```

:::warning 注意
顶级链接是不需要配置 `path` 属性的，因为当它被点击时是不会跳转页面的。

就算我们给顶级链接配置了 `path`，这个 path 地址也会被忽略的。
:::

### 内部链接

:::tip
内部链接需要结合自定义页面使用，这部分的使用指南请移步到文档的[页面](/zh/guide/page.html)指南中详细了解。
:::

## I18n 菜单

由于主题支持 I18n 多语言，所以菜单名也支持多语言设置。目前主题支持菜单的英文和中文翻译。(_在不久的将来会支持更多。_)

要为菜单设置多语言，我们只需要配置 `i18n` 属性，而这个属性有**2 个选项**:

- `cn` - 中文翻译
- `en` - 英文翻译

```yaml{7-9}:no-line-numbers
menu:
  Tags: true
  Archives: true
  # 多语言菜单
  contact:
    name: 'Contact'
    i18n:
      cn: '联系我'
      en: 'Contact'
    path: 'http://domain.com/contact'
```
