import type { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/menu.md',
        '/guide/theme.md',
        '/guide/social.md',
        '/guide/site-meta.md',
        '/guide/page.md',
        '/guide/plugins.md',
        '/guide/router.md',
        '/guide/markdown.md',
        '/guide/upgrade.md'
      ]
    }
  ]
};
