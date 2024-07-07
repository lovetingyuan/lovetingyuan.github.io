### vue3如何为全局组件添加类型支持

首先，并不推荐大规模使用全局组件注册，这样并不利于后续维护，如果非要使用，那么请确保只在唯一的地方进行全局组件注册，并且注册的组件要有足够的通用性。

注册全局组件之后，可以在`.d.ts`中添加以下代码来支持模板中全局组件的类型推导：

```typescript
// 举个例子
import type { YourGlobalComponent } from './global-components/YourComponent.vue'

declare module 'vue' {
  export interface GlobalComponents {
    IconifyIcon: YourGlobalComponent
  }
}
```
