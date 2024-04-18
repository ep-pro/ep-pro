import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

export function defineBuildConfig(options: Options = {}) {
  return defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    target: ['es2022', 'node18'],
    external: ['vue', '@vueuse/core', 'element-plus', 'dayjs'],
    ...options,
  })
}
