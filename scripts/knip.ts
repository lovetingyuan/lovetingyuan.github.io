import type { KnipConfig } from 'knip'

const vueScriptReg = /<script\b[^>]*>([\S\s]*?)<\/script>/gm

const config: KnipConfig = {
  ignore: '*.d.ts',
  entry: ['src/main.ts', 'src/server.ts', 'vite.config.ts'],
  project: ['**/*.{js,ts,vue}'],
  ignoreBinaries: ['scripts/knip.ts'],
  ignoreDependencies: ['virtual:pwa-register/vue', '@total-typescript/ts-reset'],
  paths: {
    '@/*': ['./src/*']
  },
  compilers: {
    vue: text => {
      const scripts = []
      let match
      while ((match = vueScriptReg.exec(text))) {
        scripts.push(match[1])
      }
      return scripts.join(';')
    }
  }
}

export default config
