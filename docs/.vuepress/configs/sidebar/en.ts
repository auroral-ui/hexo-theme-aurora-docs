import type { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting started',
      children: ['/guide/README.md', '/guide/getting-started.md', '/guide/upgrade.md']
    },
    {
      text: 'Configurations',
      children: [
        '/configs/general.md',
        '/configs/menu.md',
        '/configs/theme.md',
        '/configs/router.md',
        '/configs/post.md',
        '/configs/page.md',
        '/configs/social.md',
        '/configs/plugins.md',
        '/configs/site-meta.md',
        '/configs/markdown.md'
      ]
    }
  ],
  '/configs/': [
    {
      text: 'Getting started',
      children: ['/guide/README.md', '/guide/getting-started.md', '/guide/upgrade.md']
    },
    {
      text: 'Configurations',
      children: [
        '/configs/general.md',
        '/configs/menu.md',
        '/configs/theme.md',
        '/configs/router.md',
        '/configs/post.md',
        '/configs/page.md',
        '/configs/social.md',
        '/configs/plugins.md',
        '/configs/site-meta.md',
        '/configs/markdown.md'
      ]
    }
  ]
};
