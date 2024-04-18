import type { ComponentResolver } from 'unplugin-vue-components/types'

function EpProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name: string) {
      return { name, from: '@ep-pro/components' }
    },
  }
}

export default EpProResolver
