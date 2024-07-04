## useEffect vs useLayoutEffect

### useLayoutEffect

它运行在react将当前渲染结果提交给dom之后，但是浏览器实际执行渲染之前（所以如果它的回调是个长任务就会延迟浏览器的渲染，造成渲染性能问题），所以它一般只用于需要对dom有操作的情景。

在useLayoutEffect中触发的状态更新，也会在浏览器渲染页面之前被调度执行。

例如，在组件内部调用useLayoutEffect以及立即添加一个微任务，useLayoutEffect的回调通常会在微任务之前运行。

### useEffect

一般情况下，useEffect会在浏览器完成当前渲染之后执行。

如果你的 Effect 是由一个交互（比如点击）引起的，React 可能会在浏览器重新绘制屏幕之前执行 Effect。

如果渲染之前有新的更新任务，那么react也会先执行当前的useEffect。

总的来说，useEffect 的运行时机实际并不确定，它与任务优先级、帧剩余时间、更新来源等都有关系。

---

一个小测验

```jsx
import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState((state) => state + 1)
  }, [])

  useEffect(() => {
    console.log('useEffect 1')
    return () => {
      console.log('useEffect 1 cleanup')
    }
  }, [state])

  useEffect(() => {
    console.log('useEffect 2')
    return () => {
      console.log('useEffect 2 cleanup')
    }
  }, [state])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => {
      console.log('useLayoutEffect cleanup')
    }
  }, [state])

  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

::: detail result

```bash
"App"
"useLayoutEffect"
"useEffect 1"
"useEffect 2"
"App"
"useLayoutEffect cleanup"
"useLayoutEffect"
"useEffect 1 cleanup"
"useEffect 2 cleanup"
"useEffect 1"
"useEffect 2"
```

:::
