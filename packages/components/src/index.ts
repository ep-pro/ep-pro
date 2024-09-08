import { EpForm } from '@ep-pro/form'
import { EpTable } from '@ep-pro/table'
import { EpDescription } from '@ep-pro/description'
import type { App, Plugin } from 'vue'

function install(app: App) {
  app.component(EpForm.name!, EpForm)
  app.component(EpTable.name!, EpTable)
  app.component(EpDescription.name!, EpDescription)
}

export const EpProPlugin: Plugin & { version: string } = {
  install,
  version: __VERSION__,
}

export * from '@ep-pro/form'
export * from '@ep-pro/table'
export * from '@ep-pro/description'

export default EpProPlugin
