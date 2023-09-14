import { defineConfig } from 'vitepress';
import shiki from 'shiki';
import shikiTheme from './shiki/tokyo-night.json';

const t = shiki.toShikiTheme(shikiTheme);

const enRoute = [
  {
    text: 'Guide',
    collapsed: false,
    items: [{ text: 'Getting started', link: '/en/guide/getting-started.md' }]
  },
  {
    text: 'Configs',
    collapsed: false,
    items: [
      { text: 'General', link: '/en/configs/general.md' },
      { text: 'Menu', link: '/en/configs/menu.md' },
      { text: 'Theme', link: '/en/configs/theme.md' },
      { text: 'Router', link: '/en/configs/router.md' },
      { text: 'Post', link: '/en/configs/post.md' },
      { text: 'Page & Menu', link: '/en/configs/page.md' },
      { text: 'Social Links', link: '/en/configs/social.md' },
      { text: 'Plugins', link: '/en/configs/plugins.md' },
      { text: 'Site Meta', link: '/en/configs/site-meta.md' },
      { text: 'Markdown', link: '/en/configs/markdown.md' }
    ]
  }
];

const cnRoute = [
  {
    text: '使用指南',
    collapsed: false,
    items: [{ text: '开始使用', link: '/cn/guide/getting-started.md' }]
  },
  {
    text: '主题配置',
    collapsed: false,
    items: [
      { text: '基础配置', link: '/cn/configs/general.md' },
      { text: '菜单', link: '/cn/configs/menu.md' },
      { text: '主题', link: '/cn/configs/theme.md' },
      { text: '路由', link: '/cn/configs/router.md' },
      { text: '文章', link: '/cn/configs/post.md' },
      { text: '页面 & 导航', link: '/cn/configs/page.md' },
      { text: '社交链接', link: '/cn/configs/social.md' },
      { text: '插件', link: '/cn/configs/plugins.md' },
      { text: '网页 Meta', link: '/cn/configs/site-meta.md' },
      { text: 'Markdown', link: '/cn/configs/markdown.md' }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Hexo Aurora Docs',
  description: 'Hexo Aurora Theme Documentations and Guides',
  lastUpdated: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    },
    cn: {
      label: ' 中文',
      lang: 'cn',
      link: '/cn/'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://ik.imagekit.io/bennyxguo/ObsidianestLogo-hex_hecqbw.png?updatedAt=1692679397324',

    nav: [
      {
        text: 'Guide 指南',
        items: [
          { text: 'Guide (English)', link: '/en/guide/getting-started.md' },
          { text: '指南 (中文)', link: '/cn/guide/getting-started.md' }
        ]
      },
      {
        text: 'Upgrade 升级',
        items: [
          { text: 'Upgrade (English)', link: '/en/upgrade/' },
          { text: '升级 (中文)', link: '/cn/upgrade/' }
        ]
      },
      {
        text: 'Sponsor 赞助',
        items: [
          { text: 'Buy me a ☕️', link: 'https://www.buymeacoffee.com/tridiamond' },
          { text: ' 爱发电 ⚡️', link: 'https://afdian.net/a/tridiamond' }
        ]
      }
    ],

    sidebar: {
      '/en/guide': enRoute,
      '/en/configs': enRoute,
      '/en/upgrade': [
        {
          text: 'Upgrade Guide',
          items: [
            { text: 'Upgrade to v2.5', link: '/en/upgrade/v2.5.md' },
            { text: 'Upgrade to v2.0', link: '/en/upgrade/v2.0.md' }
          ]
        }
      ],

      '/cn/guide': cnRoute,
      '/cn/configs': cnRoute,
      '/cn/upgrade': [
        {
          text: '升级指南',
          items: [
            { text: '升级到 v2.5', link: '/cn/upgrade/v2.5.md' },
            { text: '升级到 v2.0', link: '/cn/upgrade/v2.0.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/auroral-ui/hexo-theme-aurora' },
      { icon: 'discord', link: 'https://discord.gg/rmaHwVVqaU' },
      {
        icon: {
          svg: '<svg t="1694499118462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1595" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1596"></path></svg>'
        },
        link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0c_mvPzWDW_ZcRlEKD-ONP-FTC5ulgYA&authKey=%2Foew9QjNIjtYXQxUuF%2Fqmk4fxed09AlmQ6ZfcEAo7gAZboQg94BQOmnpX0F0kMd9&noverify=0&group_code=909955326'
      }
    ],

    editLink: {
      pattern: 'https://github.com/auroral-ui/hexo-theme-aurora-docs/edit/main/:path'
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'T82KV2CUNO',
        apiKey: '5d1505a3916c713263e0ec0ee5671d29',
        indexName: 'aurora-tridiamond',
        locales: {
          cn: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Benny Guo'
    }
  },

  markdown: {
    theme: { dark: t, light: 'github-light' }
  }
});
