### how to add typescript definition for global component

First of all, I don't recommend to use global component registration.

If you really want to use global component, ensure that the components remain sufficiently stable and free from major changes even when used on a large scale.

Add typescript support for global components, you can add these ts code in the `.d.ts` file:

```typescript
import type { YourGlobalComponent } from './global-components/YourComponent.vue'

declare module 'vue' {
  export interface GlobalComponents {
    IconifyIcon: YourGlobalComponent
  }
}
```
