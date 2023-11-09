const compiler = /<script\b[^>]*>([\S\s]*?)<\/script>/gm

export default {
  ignore: '*.d.ts',
  entry: ['src/main.ts', 'src/server.ts', 'vite.config.ts'],
  project: '**/*.{ts,vue}',
  paths: {
    '@/*': ['./src/*']
  },
  compilers: {
    vue: (text) => {
      const scripts = []
      let match
      while ((match = compiler.exec(text))) scripts.push(match[1])
      return scripts.join(';')
    }
  }
}
