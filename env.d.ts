/// <reference types="vite/client" />
/// <reference types="happy-dom/lib" />
/// <reference types="@total-typescript/ts-reset/dist/filter-boolean" />
/// <reference types="@total-typescript/ts-reset/dist/fetch" />
/// <reference types="@total-typescript/ts-reset/dist/json-parse" />
/// <reference types="vite-plugin-pwa/client" />

import type { Icon } from '@iconify/vue'

declare module 'vue' {
  export interface GlobalComponents {
    IconifyIcon: typeof Icon
  }
}

export {}
