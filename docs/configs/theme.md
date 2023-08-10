# Theme

Aurora's theme options can also be customized in the configuration file.

---

**CHANGELOG**

> - Since version `1.5.0+`
>   - Added [Feature Layout](/guide/theme.html#feature-layout)
>   - Added [Pinned Layout](/guide/theme.html#pinned-layout)

---

## Dark Mode

The theme's default mode is set to adapt to the system's mode.

By changing the `dark_mode` property in the configuration, you could specify the mode you want.

| Options  | Description                    |
| :------: | :----------------------------- |
|  `true`  | Force default to be dark-mode  |
| `false`  | Force default to be light-mode |
| `'auto'` | Adapt to system's mode         |

For example, you could set the theme's default mode to be dark-mode by doing this:

```yaml{2}:no-line-numbers
theme:
  dark_mode: true
```

## Profile Avatar

You can also custom the shape of the profile avatar by changing the `profile_shape` property in the configuration.

This property has the following options:

|                                                     `circle`                                                     |                                                    `diamond`                                                    |                                                    `rounded`                                                    |
| :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203336.png" height="200"/> | <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203513.png" height="200"> | <img src="https://raw.githubusercontent.com/TriDiamond/image-storage/main/img/20210403203142.png" height="200"> |

## Gradient Colour

A gradient is used across the theme, which consist of 3 main colours. These 3 colours can be configured in the theme option like so:

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

## Feature Layout

![](/images/screenshots/feature-layout.png)

Feature layout is a section where you display specially selected articles to your visitor on your home page.

This section can display `three` feature articles at a time. The generation engine will choose the `three latest` articles that use the `feature: true` in the Front-Meta of your article markdown file.

By default, the theme will enable feature layout. You can also turn it off using the `feature` property in your `_config.aurora.yml` configuration file.

```yaml:no-line-numbers{4}
theme:
  dark_mode: true
  profile_shape: diamond
  feature: true
```

:::tip Question
If the feature section will display `three` feature articles, when I only applied `2` of my articles as feature articles, what will happen?
:::

**Good question!**, if you applied less than `3` feature articles, the theme generator will pick up the latest articles to fill into the feature sections. It will also make sure it always has **3 feature articles** for display!

:::tip Question
Oh, I see. Wait!? You said: **"Always have 3 feature articles."**. What if I only have 2 articles in my blog. Then how are you going to get 3 feature articles?
:::

**No worries**! The Aurora engine had taken care of that too. If the engine could not get enough articles to fill up to 3 feature articles, the "Feature Layout" will automatically change to `Pinned Layout` instead.

## Pinned Layout

![](/images/screenshots/pinned-layout.png)

The "Pinned Layout" can be enabled by setting the `feature` property to `false` in the `_config.aurora.yml` configuration file

```yaml:no-line-numbers{4}
theme:
  dark_mode: true
  profile_shape: diamond
  feature: false
```

Setting `feature` to `false` will force the theme to use `Pinned Layout`.

:::tip
After changing the `feature` you will need to re-run `hexo cl & hexo g` to take effect.
:::
