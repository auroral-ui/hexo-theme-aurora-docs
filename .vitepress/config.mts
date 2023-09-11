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

  locales: {
    en: {
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

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    algolia: {
      appId: 'T82KV2CUNO',
      apiKey: '5d1505a3916c713263e0ec0ee5671d29',
      indexName: 'aurora-tridiamond',
      locales: {
        '/en/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation'
            }
          }
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档'
            }
          }
        }
      }
      // searchParameters: {
      //   facetFilters: ['tags:en']
      // }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },

  markdown: {
    theme: { dark: t, light: 'github-light' }
  }
});
