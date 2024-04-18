/**
 * @file VitePress theme configuration
 *
 * @see {@link https://vitepress.dev/guide/custom-theme}
 */

import './style.css'
import { defineComponent, h } from 'vue'
import Theme from 'vitepress/theme'
import type { Theme as ITheme } from 'vitepress/client'

const theme: ITheme = {
  ...Theme,

  Layout: defineComponent({
    render() {
      return h(Theme.Layout, null, {})
    },
  }),

  async enhanceApp({ app: _ }) {},
}

export default theme
