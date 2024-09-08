import { defineBuildConfig } from 'unbuild'
import { version } from './package.json'

export default defineBuildConfig({
  entries: ['src/index.ts', 'src/imports.ts', 'src/resolver.ts'],
  clean: true,
  declaration: true,
  replace: {
    __VERSION__: JSON.stringify(version),
  },
  rollup: {
    emitCJS: true,
  },
  externals: [
    'vue',
    'dayjs',
    '@vueuse/core',
    'element-plus',
    'unplugin-auto-import',
    'unplugin-vue-components',
  ],
})
