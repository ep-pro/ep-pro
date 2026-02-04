import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/imports.ts', 'src/resolver.ts'],
  platform: 'browser',
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  external: [
    'vue',
    'dayjs',
    '@vueuse/core',
    'element-plus',
    'unplugin-auto-import',
    'unplugin-vue-components',
    'unplugin-auto-import/types',
    'unplugin-vue-components/types',
  ],
})
