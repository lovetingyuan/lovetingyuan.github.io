## 如何避免使用 useEffect

useEffect 用来处理组件包含的副作用，但是过度使用它会带来一系列问题，
如，闭包问题，多次渲染问题，逻辑割裂以及应对烦人的依赖列表等。应该尽可能的避免使用 useEffect

### 计算派生状态

例如，如果你只是想更新一些派生状态，那么完全没必要使用 useEffect

```js
function Form() {
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState('')
  useEffect(() => {
    setFullName(firstName + ' ' + lastName)
  }, [firstName, lastName])
  // ...
}
```

更好的方式是：

```js
function Form() {
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')
  // ✅ Good: calculated during rendering
  const fullName = firstName + ' ' + lastName
  // ...
}
```

如果派生状态计算比较昂贵（可以使用`console.time`和`console.timeEnd`来测量计算的耗时），那么可以借助`useMemo`来优化

---

### 响应 props 变化

很多时候，组件状态需要响应 props 的变化，如：

```js
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('')

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('')
  }, [userId])
  // ...
}
```

当用户的 id 改变时，重置组件的状态，更好的做法是重置整个组件，使用用户 id 作为组件的`key`:

```js
function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('')
  // ...
}
export default function ProfilePage({ userId }) {
  return <Profile userId={userId} key={userId} />
}
```

这代表了一类场景，当组件用来渲染某个实体时用 id 作为 key 是完全有必要的

但是如果只是想让某一部分的状态响应 props 的变化呢？如：

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null)
  }, [items])
  // ...
}
```

通常直接在组件内部更改状态是被禁止的，但是如果处于合理的逻辑条件下，这样做是有好处的：

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items)
  if (items !== prevItems) {
    setPrevItems(items)
    setSelection(null)
  }

  // Or use `usePrevious` hook
  if (usePrevious(items) !== items) {
    setSelection(null)
  }
}
```

`setSelection`是直接在组件渲染时调用的，这会让 react 放弃后续的 diff 而立即再次运行当前组件。

上面也给出了如何使用[`usePrevious`](https://github.com/streamich/react-use/blob/master/src/usePrevious.ts)来简化这种模式

---

### 响应事件引起的状态变化

通常状态变更来自于用户的事件，当有一些逻辑用于响应状态变更时，你可能会把它放到 useEffect 中。
例如当用户添加购物车或者直接购买时，你想发出一条通知：

```js
function ProductPage({ product, addToCart }) {
  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`)
    }
  }, [product])

  function handleBuyClick() {
    addToCart(product)
  }

  function handleCheckoutClick() {
    addToCart(product)
    navigateTo('/checkout')
  }
  // ...
}
```

实际上发出通知这样的操作是跟用户的动作相关联的，只依赖属性的变化是不可靠的，并且事件处理方法本身就是天然的副作用容器

```js
function ProductPage({ product, addToCart }) {
  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart(product)
    showNotification(`Added ${product.name} to the shopping cart!`)
  }

  function handleBuyClick() {
    buyProduct()
  }

  function handleCheckoutClick() {
    buyProduct()
    navigateTo('/checkout')
  }
  // ...
}
```

---

### 响应多个状态的依赖变化

有时组件的内的状态之间也有互相的关联，一个状态变化可能引起其它状态的变化，甚至是一个变化的链条：

```js
function Game() {
  const [card, setCard] = useState(null)
  const [goldCardCount, setGoldCardCount] = useState(0)
  const [round, setRound] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1)
    }
  }, [card])

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound((r) => r + 1)
      setGoldCardCount(0)
    }
  }, [goldCardCount])

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true)
    }
  }, [round])

  useEffect(() => {
    alert('Good game!')
  }, [isGameOver])

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.')
    } else {
      setCard(nextCard)
    }
  }
  // ...
}
```

上面的例子除了性能问题，状态之间互相影响的逻辑过于碎片化，不利于维护：

```js
function Game() {
  const [card, setCard] = useState(null)
  const [goldCardCount, setGoldCardCount] = useState(0)
  const [round, setRound] = useState(1)

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.')
    }

    // ✅ Calculate all the next state in the event handler
    setCard(nextCard)
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1)
      } else {
        setGoldCardCount(0)
        setRound(round + 1)
        if (round === 5) {
          alert('Good game!')
        }
      }
    }
  }

  // ...
}
```

---

### 调用父组件的方法

响应状态变化另一个常见的操作是调用父组件的方法，例如 onChange

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false)

  // 🔴 Avoid: The onChange handler runs too late
  useEffect(() => {
    onChange(isOn)
  }, [isOn, onChange])

  function handleClick() {
    setIsOn(!isOn)
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      setIsOn(true)
    } else {
      setIsOn(false)
    }
  }

  // ...
}
```

很容易想到这里的 useEffect 是没必要的，通过简单的封装可以达到更好的效果：

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false)

  function updateToggle(nextIsOn) {
    // ✅ Good: Perform all updates during the event that caused them
    setIsOn(nextIsOn)
    onChange(nextIsOn)
  }

  function handleClick() {
    updateToggle(!isOn)
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      updateToggle(true)
    } else {
      updateToggle(false)
    }
  }

  // ...
}
```

这里开关的状态实际上是父子组件共享的，这种情况下将 isOn 提升到父组件（Lifting state up）是更好的做法：

```js
function Parent() {
  const [data, setData] = useState(null)
  // ...
  return <Child onFetched={setData} />
}

function Child({ onFetched }) {
  const data = useSomeAPI()
  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if (data) {
      onFetched(data)
    }
  }, [onFetched, data])
  // ...
}
```

经过提升之后:

```js
function Parent() {
  const data = useSomeAPI()
  // ...
  // ✅ Good: Passing data down to the child
  return <Child data={data} />
}

function Child({ data }) {
  // ...
}
```

---

### 订阅外部事件

下面的 hook 返回了网络连接状态：

```js
function useOnlineStatus() {
  // Not ideal: Manual store subscription in an Effect
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine)
    }

    updateState()

    window.addEventListener('online', updateState)
    window.addEventListener('offline', updateState)
    return () => {
      window.removeEventListener('online', updateState)
      window.removeEventListener('offline', updateState)
    }
  }, [])
  return isOnline
}
```

有很多事件 react 无法感知，需要主动订阅并返回给 react，在这种情况下推荐使用`useSyncExternalStore`来代替 useEffect

```js
function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function useOnlineStatus() {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  )
}
```

---

### 数据获取

数据获取是另一种 useEffect 常用的场景，如果只请求一次通常并没有什么问题，但实际的数据获取可能变得复杂。
最常见的问题就是当依赖的状态多次变化时，获取数据会产生竞态：

```js
function SearchResults({ query }) {
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    let ignore = false
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json)
      }
    })
    return () => {
      ignore = true
    }
  }, [query, page])

  function handleNextPageClick() {
    setPage(page + 1)
  }
  // ...
}
```

除此之外当数据变化到与之前相同时是否可以利用上缓存；多个请求形成的网络瀑布是否可以优化等。

解决这些问题通常需要将数据请求统一封装成新的 hook，更好的方式是使用例如`swr`等第三方库。

> _以上示例来自 [react.dev](https://react.dev/learn/you-might-not-need-an-effect)_
