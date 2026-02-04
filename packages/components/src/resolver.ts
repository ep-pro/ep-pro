import type { ComponentResolver } from 'unplugin-vue-components/types'

export function EpProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name: string) {
      if (/^Ep.+/.test(name)) {
        return { name, from: '@ep-pro/components' }
      }
      return undefined
    },
  }
}

export default EpProResolver
