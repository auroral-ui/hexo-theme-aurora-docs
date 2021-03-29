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
