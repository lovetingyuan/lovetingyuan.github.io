### how to add typescript definition for global component

First of all, I don't recommend to use global component registration.

If you really want to use global components, ensure to register them in an unique place.

Add typescript support for global components, you can add the example ts code into a `.d.ts` file:

```typescript
import type { YourGlobalComponent } from './global-components/YourComponent.vue'

declare module 'vue' {
  export interface GlobalComponents {
    IconifyIcon: YourGlobalComponent
  }
}
```
