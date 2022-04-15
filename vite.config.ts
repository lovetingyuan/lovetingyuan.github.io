import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'

import mdPlugin from './scripts/mdPlugin'
import buildInfo from './scripts/buildInfo'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [vue(), mdPlugin(), buildInfo()],
})
