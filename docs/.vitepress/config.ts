import path from 'node:path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import { demoMdPlugin } from 'vitepress-plugin-demo'
import type { DefaultTheme } from 'vitepress'

const resolve = (...args: string[]) =>
  path.resolve(import.meta.dirname, '..', ...args)

export default defineConfig({
  title: 'ElementPlus Pro',

  description: 'ElementPlus Pro',

  head: [['meta', { name: 'author', content: 'ntnyq' }]],

  markdown: {
    config(md) {
      md.use(demoMdPlugin)
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

    define: {
      __VERSION__: JSON.stringify('0.0.0'),
    },

    plugins: [
      VueJsx(),

      UnoCSS({
        inspector: false,
      }),

      VueComponents({
        dts: resolve('components.d.ts'),
        resolvers: [
          ElementPlusResolver(),
          {
            type: 'component',
            resolve: name => {
              if (name.startsWith('Ep')) {
                return { name, from: '@ep-pro/components' }
              }
            },
          },
        ],
      }),

      AutoImport({
        dts: resolve('auto-imports.d.ts'),
        imports: ['vue', '@vueuse/core'],
        resolvers: [ElementPlusResolver()],
      }),
    ],
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

  const componentsNavOrSidebar = {
    text: 'Components',
    items: [
      { text: 'Descriptions', link: `${prefix}components/descriptions/` },
    ],
  }

  // https://vitepress.dev/reference/default-theme-config
  const themeConfig: DefaultTheme.Config = {
    nav: [
      { text: 'Home', link: prefix },
      { text: 'Docs', link: `${prefix}docs/intro` },
      componentsNavOrSidebar,
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
      componentsNavOrSidebar,
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
