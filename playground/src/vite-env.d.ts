/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PREFIX: string
  readonly VITE_APP_LOCALE: string
  readonly VITE_API_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
