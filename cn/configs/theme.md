# 主题

主题的选项是可以通过配置文件进行自定义。

## 深色模式

主题默认会通过识别系统的模式来定义的。如果我们需要强制设置一个默认的模式，我们可以使用配置中的 `dark_mode` 属性来设置。

|   选项   | 描述                 |
| :------: | :------------------- |
|  `true`  | 强制改为默认深色模式 |
| `false`  | 强制改为默认浅色模式 |
| `'auto'` | 自动识别系统的模式   |

如果你想把模式强制改为默认深色模式，就需要像下面这样配置。

```yaml{2}:no-line-numbers
theme:
  dark_mode: true
```

## 头像形状

你也可以通过改变配置中的 `profile_shape` 属性来自定义头像的形状。

此属性有以下选项:

|                                                     `circle`                                                     |                                                    `diamond`                                                    |                                                    `rounded`                                                    |
| :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203336.png" height="200"/> | <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203513.png" height="200"> | <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203142.png" height="200"> |

## 渐变颜色

主题中多处使用了一个渐变颜色，这个渐变颜色一共由 3 个颜色组成。这 3 个颜色可以在主题配置里面设置。

```yaml{5-8}:no-line-numbers
theme:
  # Gradient colors used for the theme
  # This consist of 3 gradient colors
  # each can be customized
  gradient:
    color_1: '#24c6dc'
    color_2: '#5433ff'
    color_3: '#ff0099'
```

## 推荐布局模式

推荐模式会启用一个特殊的区域，让你可以展示特别选定的文章。这个区域可以同时显示`三篇`推荐文章。

生成引擎会从你的文章库中选择`最新的三篇文章`，而这个引擎会根据你的 markdown 的 Front-Meta 中的 `feature` 属性来选择文章。只要这个属性是 `true`，就会被筛选出来作为推荐文章。

默认情况下，这个主题会启用这个布局模式，你也可以在`_config.aurora.yml`中使用`feature`属性来关闭这个布局模式。

```yaml:no-line-numbers{4}
theme:
  dark_mode: true
  profile_shape: diamond
  feature: true
```

:::tip 问题
如果特性部分将显示`三篇`推荐文章，如果我只设置了`2`篇作为推荐文章，会发生什么呢?
:::

**好问题!**，如果你设置了少于`3`篇文章作为推荐文，主题生成器将挑选最新的文章，并将其加入推荐数据中，确保展示**3 篇推荐文章**!

:::tip 问题
哦，我明白了。等等!? 你说:**“确保展示 3 篇推荐文”**。如果我的博客只有两篇文章怎么办？那你怎么能得到 3 篇推荐文章呢？
:::

**别担心**！Aurora 的引擎也已经解决了这个问题。如果引擎不能找到足够的文章来填补一共 3 篇推荐文章，主题的布局将自动改为“**置顶布局模式**”。

## 置顶布局模式

可以通过在`_config.aurora.yml`中设置`feature`属性为`false`来启用置顶布局模式。

```yaml:no-line-numbers{4}
theme:
  dark_mode: true
  profile_shape: diamond
  feature: false
```

将`feature`属性设置为`false`，主题就会强制使用`置顶布局模式`。

:::tip
更改`feature`后，你需要重新运行以下命令才能生效。

```shell
hexo cl & hexo g
```

:::

## 代码高亮

在此版本代码高亮引擎更改为 Shiki。使用这个新引擎我们需要更新 `_config.yml` 中的 `highlight` 和 `prismjs` 配置。

```yaml:no-line-numbers{2,4}
highlight:
  enable: false
prismjs:
  enable: false
```

然后在 `_config.aurora.yml` 中添加新的 `shiki` 配置。

```yaml:no-line-numbers
#! ---------------------------------------------------------------
#! Highlighter Shiki
#! ---------------------------------------------------------------
shiki:
  enable: true
  theme:
  externalTheme:
  backgroundColor: '#1a1a1a'
```

### 使用默认主题

可以从下面的 shiki 提供的默认主题中选择一个主题名，并且把这个名字配置给 `shiki` 下的 `theme` 字段。比如 `material-theme-palenight`。

```yaml:no-line-numbers{3}
shiki:
  enable: true
  theme: material-theme-palenight
  externalTheme:
  backgroundColor: '#1a1a1a'
```

可用的默认主题列表：

```typescript:no-line-numbers
export type Theme =
  | 'css-variables'
  | 'dark-plus'
  | 'dracula-soft'
  | 'dracula'
  | 'github-dark-dimmed'
  | 'github-dark'
  | 'github-light'
  | 'hc_light'
  | 'light-plus'
  | 'material-theme-darker'
  | 'material-theme-lighter'
  | 'material-theme-ocean'
  | 'material-theme-palenight'
  | 'material-theme'
  | 'min-dark'
  | 'min-light'
  | 'monokai'
  | 'nord'
  | 'one-dark-pro'
  | 'poimandres'
  | 'rose-pine-dawn'
  | 'rose-pine-moon'
  | 'rose-pine'
  | 'slack-dark'
  | 'slack-ochin'
  | 'solarized-dark'
  | 'solarized-light'
  | 'vitesse-dark'
  | 'vitesse-light';
```

### 使用自定义主题

如果以上都不是你想要的，那么你可以通过从 Github repo 下载主题 json 文件来导入你自己的。

例如，我制作的 VSCode 主题 [aurora-future-vcode-theme](https://github.com/auroral-ui/aurora-future-vscode-theme)，这个主题可以从[这里](https://github.com/auroral-ui/aurora-future-vscode-theme/blob/main/themes/Aurora%20Future-color-theme.json)下载。

下载 json 文件，并把它放在你的博客项目根目录下的 shiki 文件夹中。

```shell:no-line-numbers{2-3}
. # Hexo project root.
├─ shiki # Shiki theme folder
│  ├─ aurora-future.json # VSCode theme JSON file
├─ _config.yml # Hexo config file.
└─ _config.aurora.yml # Theme config file.
```

然后配置这个主题明到 `_config.aurora.yml` 里面的 `theme` 和 `customTheme` 字段。

```yaml:no-line-numbers{3-4}
shiki:
  enable: true
  theme: aurora-future
  customTheme: '/shiki/aurora-future.json'
  backgroundColor: "#1a1a1a"
```

### 自定义背景颜色

Shiki 主题支持它自己的主题代码背景。但并不是所有的主题背景颜色都能很好地配合 Aurora 博客主题。

默认情况下，建议使用 `#1a1a1a` 作为极光主题的代码背景颜色。但是，如果您想使用代码高亮主题的默认背景色。只需删除' backgroundColor '配置即可。

```yaml
shiki:
  enable: true
  theme: aurora-future
  customTheme: '/shiki/aurora-future.json'
  backgroundColor: "#1a1a1a" // [!code --]
```

如果您想使用自己的背景颜色，只需选择您想要的 HEX 颜色代码。

```yaml:no-line-numbers{5}
shiki:
  enable: true
  theme: aurora-future
  customTheme: '/shiki/aurora-future.json'
  backgroundColor: "<color_code_here>"
```
