# 介绍

ObsidiaNext 是基于第一代的 [hexo-theme-obsidian](https://github.com/TriDiamond/hexo-theme-obsidian)，UI 和基础功能都完全重写了。

## 与第一代 Obsidian 对比

ObsidiaNext 与 Obsidian 的最大区别在于，ObsidiaNext 是基于 Vue3 构建的，这就意味着它的性能和用户交互体验都比上一代要好得多。

Obsidian 使用普通的 JavaScript 和 JQuery 来支持大多数用户交互和博客功能。当然，我并不是说使用普通的 JavaScript 和 JQuery 就不能构建一个快速而出色的博客应用，而是说对于开发人员来说，使用 Vue 更令人愉快，对于读者或观众来说更是如此。

为什么呢？因为使用 Vue，可以把我们的博客变成一个单页面应用程序(SPA)，这样用户就不会太注意到所有的页面加载过程。一个页面到另一个页面的跳转更加流畅和快速。对于一个阅读文章的博客网站来说，SPA 最适合这种目的。

## 为什么使用 vue3?

许多人问我:“为什么在 Hexo 中使用 Vue3，为什么不在默认的 ejs 模板中直接加入 vuejs 呢?”

首先，当然，我可以在默认 ejs 模板系统的支持下添加 vuejs。老实说，对于需要融入所有主题设置数据并保持 Hexo 的“静态”属性会容易得多。

但在现代前端开发趋势中，大多数 web 应用程序已经转向了像 Vue、React 或 Angular 这样的前端框架，因为他们使得开发更容易、更快。有了 SPA 对这些框架的支持，它将改善应用程序的用户可访问性和交互。

经过对开发工具优缺点的思考，最后我选择了 Vue3 作为开发 ObsidiaNext 的框架。
