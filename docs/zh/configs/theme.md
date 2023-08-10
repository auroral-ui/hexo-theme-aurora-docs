# 主题

主题的选项是可以通过配置文件进行自定义。

---

**更变日志**

> - 版本 `1.5.0+`
>   - 添加了 [推荐布局模式](/zh/guide/theme.html#推荐布局模式)
>   - 添加了 [置顶布局模式](/zh/guide/theme.html#置顶布局模式)

---

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

![](/images/screenshots/feature-layout.png)

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

![](/images/screenshots/pinned-layout.png)

可以通过在`_config.aurora.yml`中设置`feature`属性为`false`来启用置顶布局模式。

```yaml:no-line-numbers{4}
theme:
  dark_mode: true
  profile_shape: diamond
  feature: false
```

将`feature`属性设置为`false`，主题就会强制使用`置顶布局模式`。

:::tip
更改`feature`后，你需要重新运行`hexo cl & hexo g`才能生效。
:::
