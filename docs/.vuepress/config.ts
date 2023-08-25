import * as chokidar from 'chokidar';
import { defaultTheme, defineUserConfig } from 'vuepress';

import { searchPlugin } from '@vuepress/plugin-search';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { colors, logger } from '@vuepress/utils';

import { navbar, sidebar } from './configs';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hexo Aurora',
  description: 'Documentation of theme usage.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`
      }
    ]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'Hexo Aurora Documentation',
      description: 'Documentation of Hexo Aurora theme usage.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Hexo Aurora 使用文档',
      description: 'Hexo Aurora 使用文档'
    }
  },

  theme: defaultTheme({
    logo: 'https://res.cloudinary.com/tridiamond/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1625037705/ObsidianestLogo-hex_hecqbw.jpg?_s=public-apps',
    repo: 'auroral-ui/hexo-theme-aurora',
    docsRepo: 'auroral-ui/hexo-theme-aurora-docs',
    docsDir: 'docs',
    colorMode: 'dark',
    colorModeSwitch: false,
    locales: {
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,
        selectLanguageName: 'English'
      },
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接'
        ],
        backToHome: '返回首页',

        // other
        openInNewWindow: '在新窗口打开'
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: process.env.NODE_ENV === 'production'
    }
  }),

  plugins: [
    docsearchPlugin({
      appId: 'T82KV2CUNO',
      apiKey: '5d1505a3916c713263e0ec0ee5671d29',
      indexName: 'aurora-tridiamond',
      locales: {
        '/': {
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
    })
  ],

  onWatched: (_, watchers, restart) => {
    const watcher = chokidar.watch('configs/**/*.ts', {
      cwd: __dirname,
      ignoreInitial: true
    });
    watcher.on('change', async (file) => {
      logger.info(`file ${colors.magenta(file)} is modified`);
      await restart();
    });
    watchers.push(watcher);
  }
});
