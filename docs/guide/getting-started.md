# Getting started

## Prerequisites

- [Hexo 5.4+](https://hexo.io/)
- [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://docs.npmjs.com/getting-started) installed

---

## Installation

This section will help you install the theme on an existing Hexo Blog project.

> Since version 1.1.0, the theme can be simply installed using `NPM` or `Yarn`, makes it much easier for theme users to install!

---

### Step 1 - Installing theme package

> **In your console, go to the root directory of your Hexo project, then run the following command to install the theme:**

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn add hexo-theme-aurora
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install hexo-theme-aurora --save
```

  </CodeGroupItem>
</CodeGroup>

---

### Step 2 - Generate theme config

> **Config file `_config.yml` now need to be added in the root folder of your Hexo blog. You simply create a `_config.aurora.yml` to change the theme.**

:::tip

- To get a default theme template, simply run the following command
- But this command is for linux OS only, for Windows users you can copy it yourself from node_modules folder.

:::

```shell:no-line-numbers
cp -rf ./node_modules/hexo-theme-aurora/_config.yml ./_config.aurora.yml
```

---

### Step 3 - Setting `permalink`

> **Due to the use of Vue-router, the default Hexo generated pages and posts' permalink will cause the Vue router fail to find the route, therefore you need to change the Hexo default permalink configuration.**

#### Step 3.1

Open the `_config.yml` in your hexo root direction.

#### Step 3.2

Change `permalink` to `/post/:title.html`

```yaml:no-line-numbers{4}
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://tridiamond.tech
permalink: /post/:title.html
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

---

### Step 4 - Setting up code highlight

> **Last but not least, the theme use `Prismjs` for code highlighting, but Hexo default uses `highlightjs`, therefore you will need to change the Hexo config to use Prismjs instead:**

:::tip
All you have to do is change highlight's enable to `false` and change prismjs's enable to `true`
:::

```yaml:no-line-numbers{2,9}
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

---

### Step 5 - Creating the `about` page

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

### Step 6 - Run local server

> **To run the local server and check out your blog, simply run the following command.**

```shell:no-line-numbers
hexo clean & hexo g & hexo server
```

:::tip
Any configuration changes will require you to regenerate all the Hexo static files!
:::

After all the files finish generating, you will be able to visit your blog on [https://localhost:4000](https://localhost:4000).

---

## What is next?

There are two places you should check out next:

1. Setting up your [Page](/guide/page.html)
2. Advance [configurations](/guide/configuration.html) document
