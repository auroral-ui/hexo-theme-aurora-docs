# Menu

The **menus** in ObsidianNext theme can be highly customized in the theme `_config.yml` file.

## Default Menus

ObsidiaNext is packed with three styled pages, **about** page, **tags** page and **archives** page.

**Home** page and **About** page are enabled by default, where **tags** page and **archives** page can be configured in the `menu` section of the theme config file.

```yaml{2-3}
menu:
  Tags: true
  Archives: true
```

You can also set any of the above to `false` to disable certain page you don't want.

## Custom Menus

Other than the default pages packed with ObsidiaNext, we can also add in any **pages** or **external links** to our main menus.

### External Link

For example, if we want to add a external link to your github project, you can do that by configuring your menu like this:

```yaml{4-7}
menu:
  Tags: true
  Archives: true
  # External link for a github repo
  obsidianext:
    name: 'ObsidiaNext'
    path: 'https://github.com/obsidianext/hexo-theme-obsidianext'
```

### Nested Links

Sometime you would want to group a set of links into a sub-menu. The good news is ObsidiaNext also support nested links. To create a nested link, all we have to do is add in a `children` property to the menu.

For example we want to have a **projects** menu, which include all the projects links as sub-menu links. This is how you would configure it:

```yaml{4-13}
menu:
  Tags: true
  Archives: true
  # Nested projects menu
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

:::warning NOTE
The parent link of a nested link won't need a `path` property, because if it's clicked it will not activate a page jump.

Even if you set a `path` for the parent link, the path link will be ignored.
:::

### Internal Link <Badge type="warning" text="WIP" vertical="middle" />

WIP

## I18n Menu

Since the theme has I18n multi-language support, therefore the menu name also support multi-language setup.

To allow our menu change base on our blog's current locale, we need to give our menu a I18n corresponding name.

If you have an I18n menu called `Contact Me` and it's i18n name is `contact`. You will need to configure your menu config like this:

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

The `i18n` attribute is used to set the i18n name configured in `src/locales/language/en.json` (English) or `src/locales/language/cn.json` (Chinese).

Since this I18n name is for the menu, therefore you need to add this name inside `menu`.

```json{11}
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
