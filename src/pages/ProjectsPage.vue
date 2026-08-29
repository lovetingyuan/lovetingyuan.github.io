<template>
  <section aria-labelledby="projects-title" class="mx-auto max-w-3xl">
    <header class="mb-6">
      <h1 id="projects-title" class="text-2xl font-semibold">开源项目</h1>
      <p class="mt-2 text-sm leading-6 opacity-70">我维护的一些开源项目。</p>
    </header>

    <ul class="list rounded-box border-base-300 bg-base-100 overflow-hidden border shadow-sm">
      <li
        v-for="project of projects"
        :key="project.name"
        class="list-row border-base-300 items-center gap-4 border-b px-4 py-5 last:border-b-0 sm:px-6"
      >
        <div class="list-col-grow min-w-0">
          <h2 class="text-base font-semibold break-words">{{ project.name }}</h2>
          <p class="mt-1 text-sm leading-6 opacity-70">{{ project.description }}</p>
        </div>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-square btn-ghost shrink-0"
          :aria-label="`在 GitHub 查看 ${project.name}`"
          :title="`在 GitHub 查看 ${project.name}`"
        >
          <IconifyIcon icon="mdi:github" class="text-2xl" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'react-atomic-store',
    description: '基于 React Hook 的轻量级共享状态管理库。'
  },
  {
    name: 'vite-plugin-convention-route',
    description: '为 React Router 提供类 Next.js 文件约定路由的 Vite 插件。'
  },
  {
    name: 'vite-plugin-dom-source',
    description: '将 React 和 Vue 渲染后的 DOM 元素映射回源码位置的 Vite 插件。'
  },
  {
    name: 'vite-react-hono',
    description: '基于 Vite、React 和 Hono 的全栈应用模板。'
  },
  {
    name: 'vite-plugin-css-module-dts',
    description: '为 *.module.css 自动生成 TypeScript 声明文件的 Vite 插件。'
  },
  {
    name: 'fileyard',
    description: '基于 Cloudflare R2 的 Web 文件管理应用。'
  }
].map(project => ({
  ...project,
  url: `https://github.com/lovetingyuan/${project.name}`
}))
</script>
