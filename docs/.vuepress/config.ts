import type { UserConfig, DefaultThemeOptions } from 'vuepress'
import { sidebar, navbar } from './configs'
import { chalk, logger } from '@vuepress/utils'
import * as chokidar from 'chokidar'
const path = require('path')

const config: UserConfig<DefaultThemeOptions> = {
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
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
  ],

  themeConfig: {
    logo: 'https://img-blog.csdnimg.cn/20210313122054101.png',

    repo: 'auroral-ui/hexo-theme-aurora',

    docsRepo: 'auroral-ui/hexo-theme-aurora-docs',

    docsDir: 'docs',

    locales: {
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,
        selectLanguageName: 'English',
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
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // other
        openInNewWindow: '在新窗口打开',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: process.env.NODE_ENV === 'production',
    },
  },

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      description: 'Futuristic auroral theme for Hexo',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '迈向未来的 Hexo 极光主题',
    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],

  onWatched: (_, watchers, restart) => {
    const watcher = chokidar.watch('configs/**/*.ts', {
      cwd: __dirname,
      ignoreInitial: true,
    })
    watcher.on('change', async (file) => {
      logger.info(`file ${chalk.magenta(file)} is modified`)
      await restart()
    })
    watchers.push(watcher)
  },
}

export = config
