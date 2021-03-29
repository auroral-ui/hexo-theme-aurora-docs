# Theme

Aurora's theme options can also be customized in the configuration file.

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
