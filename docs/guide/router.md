# Router

This part of the document is for configuring the router of the theme.

## Host theme on Subfolder

> This feature is added since `v1.3.0`

For certain theme users, they need to host their blog on a subfolder. For example blog is hosted on `https://tridiamond.github.io/blog`.

Since the theme use Vue as the frontend framework, the `Public Path` cannot be configured on runtime. Therefore if you need to host your blog on a subfolder, then you will need to clone the source code and build the theme after configuring the `public path`.

### Setting up the theme

To successfully host the blog on subfolder, you first need to configure the `public path` of the theme.

---

**Step 1 - Clone theme repo**

To configure the `public path`, first you need to install the theme by using `git clone`:

```shell:no-line-numbers
# First go into the Hexo folder's themes folder.
cd themes/
# Then clone the theme aurora into the themes folder.
git clone https://github.com/auroral-ui/hexo-theme-aurora.git
```

---

**Step 2 - Install dependencies**

First go into the aurora theme folder.

```shell:no-line-numbers
cd aurora/
```

Install dependencies using NPM or Yarn.

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

---

**Step 3 - Changing public path config**

There are **two places** you need to configure for the `sub public path` to work.

Lets assume you are using `/blog/` as the subfolder for your blog.

The first config file is the Hexo config file `_config.yml`. All you have to do is add the `root` property and set it to `/blog/`.

```yaml:no-line-numbers{5}
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://tridiamond.tech
permalink: /post/:title.html
root: '/blog/'
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

The next one is inside the `.env.production` config file in the theme folder.

```shell:no-line-numbers{4}
.
└── themes
    └── aurora
        └── .env.production # <= this one
```

Open this config and change the `VUE_APP_PUBLIC_PATH` to `/subfolder_name/`.

```shell:no-line-numbers{14}
# just a flag
ENV = 'production'

# App name
VUE_APP_PROJECT_TITLE = 'Aurora Blog'

# base api
VUE_APP_BASE_API = 'api'

# Edit this if you want to change the public path.
# E.g, if you want to host your blog on https://name.github.io/blog/, then you ned to set
# VUE_APP_PUBLIC_PATH to `/blog/`
# Else leave it as  `/`
VUE_APP_PUBLIC_PATH = '/blog/'
```

---

**Step 4 - Rebuild the theme**

After configuring the public path, all you have to do is repack the theme by running the build script using NPM or Yarn.

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell:no-line-numbers
yarn build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```shell:no-line-numbers
npm run build
```

  </CodeGroupItem>
</CodeGroup>

---

**Step 5 - Rebuild Hexo static files**

Last but not least, go back to Hexo root folder and rebuild the Hexo static files.

```shell:no-line-numbers
hexo cl & hexo g
```

You can also serve the blog to see if the subfolder setup had taken affect.

```shell:no-line-numbers
hexo server
```

---
