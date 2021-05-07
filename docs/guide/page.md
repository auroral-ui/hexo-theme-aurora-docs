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

---

### Creating the `about` page

The theme enables `about` page by default, therefore we should create it before using the theme.

To create a default about page, use the following `Hexo command`:

```shell:no-line-numbers
hexo create page about
```

After that, you will see a new folder had been created:

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

You can feel free to edit the markdown file inside the `about/` folder, the content will be displayed in your about page.

---

## Configure the menu

You need to **configure the menu config** to include it in the navigation.

Open the theme configuration file at `_config.aurora.yml`, and config the page like so:

```yaml{6-11}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # Custom menus
  message-board:
    name: 'MessageBoard'
    i18n:
      cn: '留言板'
      en: 'Message Board'
    path: '/page/message-board'
```

First you need to set the following attributes:

| Attributes | Description                                                                                |
| :--------: | :----------------------------------------------------------------------------------------- |
|   `name`   | Name of the menu for this page. (Used identify this route, make sure it's unique.)         |
|   `i18n`   | i18n menu option, check out [i18n menu](/guide/menu.html#i18n-menu) for more usage detail. |
|   `path`   | For custom page, here you need to use the template like this `/page/[page-folder-name]`    |

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
