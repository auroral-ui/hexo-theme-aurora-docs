import type { SidebarConfig } from '@vuepress/theme-default';

const mainSidebarMenus = [
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
];

export const zh: SidebarConfig = {
  '/zh/guide/': mainSidebarMenus,
  '/zh/configs/': mainSidebarMenus,
  '/zh/upgrade/': [
    {
      text: '升级主题',
      children: ['/zh/upgrade/v2.5.md', '/zh/upgrade/v2.0.md']
    }
  ]
};
