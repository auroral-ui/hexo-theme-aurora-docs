# Page & Menu

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

#### Config the menu

Then config the custom navigation in the menu config inside `_config.aurora.yml`:

```yaml{6-12}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  # Custom menus
  pages-menu:
    name: 'message-board'
    name: 'Message Board'
    path: '/page/message-board'
    i18n:
      cn: 留言板
      en: Message board
```

## Creating the about page

The theme enables `about` page by default, therefore we should create it before using the theme.

To create a default about page, use the following `Hexo command`:

```shell:no-line-numbers
hexo new page about
```

After that, you will see a new folder had been created:

```shell:no-line-numbers
.
└── source
    └── about
        └── index.md
```

#### Config the menu

Then config the navigation in the menu config inside `_config.aurora.yml`:

```yaml{2}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
```

You can feel free to edit the markdown file inside the `about/` folder, the content will be displayed in your about page.

## Create the links page

This page is to display a list of all your friends' blogs.

To create this `links` page, you need to run this `Hexo command`:

```shell:no-line-numbers
hexo new page links
```

Now you would have this in the `source/` folder:

```shell:no-line-numbers
.
└── source
    └── links
        └── index.md
```

#### Config the menu

Then config the navigation in the menu config inside `_config.aurora.yml`:

```yaml{5}:no-line-numbers
menu:
  About: true
  Tags: true
  Archives: true
  Links: true
```

Basic configuration for the `links` page is done inside the `index.md` using the `Front-meta` configs.

#### Basic attributes

|   Attributes   | Description                                                                                                                                                                           |
| :------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     `type`     | Just fill in `friends`                                                                                                                                                                |
| `categoryMode` | Value: `true` or `false`；Use to control the display format for the links; `true` means using the label value to categorize the data，`false` Means display all the list in one place |
|     `data`     | Value：`Array`; Use the store the data for the links, look at the following `data attribute` table for reference                                                                      |

#### Data Attributes

|  Attributes   | Description                                                                                              |
| :-----------: | :------------------------------------------------------------------------------------------------------- |
|    `nick`     | Blogger's nickname                                                                                       |
|   `avatar`    | Blogger's avatar url                                                                                     |
| `description` | Simple description of the blog                                                                           |
|    `link`     | URL link to the blog                                                                                     |
|    `label`    | Here we can use the theme provided labels. (Please refer to the `Label Value` table below fo the values) |

:::tip
For `label` if we used the theme provided value:

- Can auto switch language
- When using with `categoryMode = true` it will have the label descriptions below the label titles.

If not you can just put in your custom label (e.g Love)
:::

#### Label Values

|      Label value       | Display as |
| :--------------------: | :--------- |
|   `links-badge-vip`    | sponsors   |
|   `links-badge-tech`   | technical  |
| `links-badge-personal` | personal   |
| `links-badge-designer` | designer   |

#### Front-meta Example

```yaml
---
title: friends
date: 2023-08-06 17:19:32
type: friends
categoryMode: true
data:
  - nick: Tridiamond
    avatar: https://res.cloudinary.com/tridiamond/image/upload/v1625037705/ObsidianestLogo-hex_hecqbw.png
    description: Think like an artist, develop like an artisan.
    link: https://tridiamond.tech/
    label: links-badge-vip
---
```

Feel free to change anything inside the `index.md` file. All markdown content will be displayed under the friend's list, before the comments.

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

| Attributes | Description                                                                             |
| :--------: | :-------------------------------------------------------------------------------------- |
|   `name`   | Name of the menu for this page. (Used identify this route, make sure it's unique.)      |
|   `i18n`   | i18n menu option, check out [i18n menu](./menu) for more usage detail.                  |
|   `path`   | For custom page, here you need to use the template like this `/page/[page-folder-name]` |

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
