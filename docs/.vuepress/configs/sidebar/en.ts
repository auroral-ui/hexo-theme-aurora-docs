import type { SidebarConfig } from '@vuepress/theme-default';

const mainSidebarMenus = [
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
];

export const en: SidebarConfig = {
  '/guide/': mainSidebarMenus,
  '/configs/': mainSidebarMenus,
  '/upgrade/': [
    {
      text: 'Upgrade Guide',
      children: ['/upgrade/v2.5.md', '/upgrade/v2.0.md']
    }
  ]
};
