import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      isGroup: true,
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
        '/zh/guide/menu.md',
        '/zh/guide/theme.md',
        '/zh/guide/social.md',
        '/zh/guide/site-meta.md',
        '/zh/guide/page.md',
        '/zh/guide/plugins.md',
        '/zh/guide/router.md',
        '/zh/guide/markdown.md',
      ],
    },
  ],
}
