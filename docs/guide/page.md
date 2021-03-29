# Page

Any **custom pages** created on Hexo can be added to the theme navigation easily in Aurora.

## Creating a page

Creating a page is easy with Hexo, basically you just need to add a `index.md` file in the `source/` folder or use the Hexo `add` command.

For example you want to add a **Message Board** page. All you have to do is run a Hexo command:

```shell:no-line-numbers
hexo new page message-board
```

Now you would have this:

```shell{3-4}:no-line-numbers
.
└── source
    └── message-board # Generated page folder
        └── index.md # Auto generated index.md file
```

If you see this, that means your page had successfully created.

## Configure the menu

You need to **configure the menu config** to include it in the navigation.

Open the theme configuration file at `themes/Aurora/_config.yml`, and config the page like so:

```yaml{6-9}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # Custom menus
  message-board:
    name: 'MessageBoard'
    i18n: 'message-board'
    path: '/page/message-board'
```

First you need to set the following attributes:

| Attributes | Description                                                                                                                                      |
| :--------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
|   `name`   | Name of the menu for this page. If `i18n` is not set, this will be used as the name of the navigation. Else `i18n` will be used instead.         |
|   `i18n`   | i18n can be set in the two language files in `themes/Aurora/src/locales/languages`, setting this value will make the menu change base on locale. |
|   `path`   | For custom page, here you need to use the template like this `/page/[page-folder-name]`                                                          |

:::tip
If you have multiple pages, you want to group the page into a sub-navigation. Then you can config it like this.
:::

```yaml{6-17}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # Custom menus
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
