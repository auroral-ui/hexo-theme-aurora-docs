// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue';
import Theme from 'vitepress/theme';
import './styles/vars.css';
import { inBrowser, useData } from 'vitepress';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`;
      }
    });
  }
};
