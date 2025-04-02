import { defineBuildConfig } from 'unbuild'
import { version } from './package.json'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index.ts', 'src/imports.ts', 'src/resolver.ts'],
  externals: [
    'vue',
    'dayjs',
    '@vueuse/core',
    'element-plus',
    'unplugin-auto-import',
    'unplugin-vue-components',
  ],
  replace: {
    __VERSION__: JSON.stringify(version),
  },
  rollup: {
    emitCJS: true,
  },
})
