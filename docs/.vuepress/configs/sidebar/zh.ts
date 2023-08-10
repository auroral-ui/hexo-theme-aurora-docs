import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '快速上手',
      children: ['/zh/guide/README.md', '/zh/guide/getting-started.md', '/zh/guide/upgrade.md']
    },
    {
      text: '主题配置',
      children: [
        '/zh/configs/general.md',
        '/zh/configs/menu.md',
        '/zh/configs/theme.md',
        '/zh/configs/router.md',
        '/zh/configs/post.md',
        '/zh/configs/page.md',
        '/zh/configs/social.md',
        '/zh/configs/plugins.md',
        '/zh/configs/site-meta.md',
        '/zh/configs/markdown.md'
      ]
    }
  ],
  '/zh/configs/': [
    {
      text: '快速上手',
      children: ['/zh/guide/README.md', '/zh/guide/getting-started.md', '/zh/guide/upgrade.md']
    },
    {
      text: '主题配置',
      children: [
        '/zh/configs/general.md',
        '/zh/configs/menu.md',
        '/zh/configs/theme.md',
        '/zh/configs/router.md',
        '/zh/configs/post.md',
        '/zh/configs/page.md',
        '/zh/configs/social.md',
        '/zh/configs/plugins.md',
        '/zh/configs/site-meta.md',
        '/zh/configs/markdown.md'
      ]
    }
  ]
};
