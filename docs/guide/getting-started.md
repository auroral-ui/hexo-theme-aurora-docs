# Getting started

## Prerequisites

- [Hexo 4.x](https://hexo.io/)
- `yarn` or `npm` installed

## Installation

This section will help you install the theme on an existing Hexo Blog project.

- **Step 1**: In your console, go to the root directory of your Hexo project, then go into the `themes/` folder.

```shell:no-line-numbers
cd themes
```

- **Step 2**: Clone `Aurora` theme into `aurora/` folder.

```shell:no-line-numbers
git clone https://github.com/aurora-ui/hexo-theme-aurora.git aurora
```

- **Step 3**: Go into `aurora/` theme folder.

```shell:no-line-numbers
cd aurora
```

- **Step 4**: Installing all the dependencies needed for the theme. This requires you to have either [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/getting-started/install) installed in your system.

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

- **Step 5**: Due to the use of Vue-router, the default Hexo generated pages and posts' permalink will cause the Vue router failing to find the route, therefore you need to change the Hexo default permalink configuration.

  - **Step 5.1**: Open the `_config.yml` in your hexo root direction.
  - **Setp 5.2**: Change `permalink` to `/post/:title.html`

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

- **Step 6**: To run the local server and check out your blog, simply run the following command.

:::tip
All file changes will force a static file update, however since the application is a SPA and all the data are fetched through APIs, therefore you will need to refresh the page to see the effect.
:::

```shell:no-line-numbers
hexo clean & hexo g & hexo server
```

After all the files finish generating, you will be able to visit your blog through [https://localhost:4000](https://localhost:4000).

- **Step 5 (Optional)**: If you are changing the default `CDN` locale of the application, you will need to rebuild the application by running the following command.

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
