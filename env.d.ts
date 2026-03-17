/// <reference types="vite/client" />
/// <reference types="happy-dom/lib" />
/// <reference types="vite-plugin-pwa/client" />

import type { Icon } from "@iconify/vue";

declare module "vue" {
  export interface GlobalComponents {
    IconifyIcon: typeof Icon;
  }
}

export {};
