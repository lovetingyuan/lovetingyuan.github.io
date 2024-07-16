### vue nextTick过程

nextTick是vue调度器的核心之一，下面展示了相关的伪代码：

```js
let isFlushing = false
let isFlushPending = false

const queue = []
let flushIndex = 0

const resolvedPromise = Promise.resolve()
let currentFlushPromise = null

export function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(fn) : p
}

export function queueJob(job) {
  queue.push(job) // 会根据id去重
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    currentFlushPromise = resolvedPromise.then(() => {
      while (queue.length) {
        isFlushPending = false
        isFlushing = true
        queue.sort(comparator)
        queue.forEach((job) => job())
        queue.length = 0
        isFlushing = false
        currentFlushPromise = null
      }
    })
  }
}
```

从上面的伪代码可以看出，`nextTick`会保证传入的回调在所有的vue内部相关渲染任务或watch回调等完成之后作为微任务调用。这也是为什么可以在其回调中访问到更新后的dom

---

一个小测验

```html
<template>
  <span ref="counter">{{ count }}</span>
  <button @click="handleAdd">add</button>
</template>
<script>
  export default {
    data() {
      return { count: 0 }
    },
    methods: {
      log(i) {
        console.log(i, this.count, this.$refs.counter.textContent)
      },
      handleAdd() {
        this.count++ // 保留或去掉这行输出有何不同？
        this.$nextTick(() => this.log(1))
        this.count++
        this.log(2)
        this.$nextTick(() => this.log(3))
        this.count++
        this.$nextTick(() => this.log(4))
      }
    }
  }
</script>
```

::: detail output

```log
2 2 '0'
1 3 '3'
3 3 '3'
4 3 '3'
```

如果把第一个 `this.count++` 去掉，那么输出变成：

```log
2 1 '0'
1 2 '0'
3 2 '2'
4 2 '2'
```

此时，第一个nextTick运行时，前面并没有job queue，所以它被立即推入微任务，随后当前组件更新才作为一个新的job被推入queue，随后清空queue的任务被推入微任务，所以第一个nextTick运行时dom并没有变更。

:::
