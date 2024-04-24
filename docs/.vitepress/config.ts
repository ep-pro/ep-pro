import { defineConfig } from 'vitepress'
import mdItDemo from 'markdown-it-vitepress-demo'
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
  title: 'ElementPlus Pro Components',

  description: 'ElementPlus Pro Components',

  head: [['meta', { name: 'author', content: 'ntnyq' }]],

  markdown: {
    config(md) {
      md.use(mdItDemo)
    },
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  },

  vite: {
    ssr: {
      noExternal: ['element-plus'],
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: defineThemeConfig('en-US'),
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: defineThemeConfig('zh-CN'),
    },
  },
})

export function defineThemeConfig(locale = 'en-US') {
  const prefix = (locale = locale === 'en-US' ? '/' : `/${locale}/`)

  // https://vitepress.dev/reference/default-theme-config
  const themeConfig: DefaultTheme.Config = {
    nav: [
      { text: 'Home', link: prefix },
      { text: 'Docs', link: `${prefix}docs/intro` },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: `${prefix}docs/intro` },
          { text: 'Quick Start', link: `${prefix}docs/` },
          { text: 'FAQ', link: `${prefix}docs/faq` },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ep-pro/ep-pro' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT ep-pro and contributors',
    },

    outline: false,
  }
  return themeConfig
}
