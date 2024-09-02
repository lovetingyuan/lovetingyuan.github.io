## React组件生命周期

- constructor(props)
- componentWillMount() Deprecated
- componentDidMount()

---

- componentWillReceiveProps(nextProps) Deprecated
- shouldComponentUpdate(nextProps, nextState)
- componentWillUpdate(nextProps, nextState) Deprecated
- componentDidUpdate(prevProps, prevState, snapshot?)

---

- componentWillUnmount()

- componentDidCatch(error, info)

---

React17引入了新的处理props更新的API，替代上面废弃的部分

- static getDerivedStateFromProps(props, state)

* 挂载阶段：getDerivedStateFromProps - render - componentDidMount
* 更新阶段：getDerivedStateFromProps - shouldComponentUpdate - render - getSnapShotBeforeUpdate - componentDidUpdate
* 卸载阶段：componentWillUnmount
