import { EpProForm } from '@ep-pro/form'
import { EpProTable } from '@ep-pro/table'
import type { App, Plugin } from 'vue'

function install(app: App) {
  app.component(EpProForm.name!, EpProForm)
  app.component(EpProTable.name!, EpProTable)
}

export const EpProPlugin: Plugin = {
  install,
}

export * from '@ep-pro/form'

export default EpProPlugin
