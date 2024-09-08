/**
 * @file VitePress theme configuration
 *
 * @see {@link https://vitepress.dev/guide/custom-theme}
 */

import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import { defineComponent, h } from 'vue'
import Theme from 'vitepress/theme'
import EpDemoContainer from './components/EpDemoContainer/index.vue'
import type { Theme as ITheme } from 'vitepress/client'

const theme: ITheme = {
  ...Theme,

  Layout: defineComponent({
    render() {
      return h(Theme.Layout, null, {})
    },
  }),

  async enhanceApp({ app }) {
    // if (!import.meta.env.SSR) {
    //   const { default: ElementPlus } = await import('element-plus')
    //   const { default: EpProComponents } = await import('@ep-pro/components')

    //   app.use(ElementPlus)
    //   app.use(EpProComponents)
    // }
    app.component('DemoContainer', EpDemoContainer)
  },
}

export default theme
