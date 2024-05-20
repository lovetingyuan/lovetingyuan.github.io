### 代码运行结果分析

#### useEffect

```jsx
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [count, setCount] = useState(1)
  console.log(1)
  useEffect(() => {
    console.log(2)
    return () => {
      console.log(3)
    }
  }, [count])

  useEffect(() => {
    console.log(4)
    setCount((count) => count + 1)
  }, [])
  return <Child count={count} />
}

function Child({ count }) {
  useEffect(() => {
    console.log(5)
    return () => {
      console.log(6)
    }
  }, [count])

  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

::: detail result

```bash
1
5
2
4
1
6
3
5
2
```

:::

#### setState

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function A() {
  console.log('render A')
  return null
}

function App() {
  const [_state, setState] = useState(false)
  console.log('render App')
  return (
    <div>
      <button
        onClick={() => {
          console.log('click')
          setState(true)
        }}
      >
        click me
      </button>
      <A />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

userEvent.click(screen.getByText('click me'))
userEvent.click(screen.getByText('click me'))
userEvent.click(screen.getByText('click me'))
```

::: detail result

```bash
"render App"
"render A"
"click"
"render App"
"render A"
"click"
"render App"
"click"
```

:::

#### useLayoutEffect

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
