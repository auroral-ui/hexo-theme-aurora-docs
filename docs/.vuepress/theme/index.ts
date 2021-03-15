const obsidianTheme = {
  name: 'vuepress-theme-obsidian',

  // extends default theme
  extends: '@vuepress/theme-default',

  layouts: {},

  plugins: [['@vuepress/plugin-palette', { preset: 'sass' }]],
}

export default obsidianTheme
