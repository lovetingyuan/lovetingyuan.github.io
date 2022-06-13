[meta]: vuejs "title: 'Vue的响应式原理', keywords: 'vue,vuejs,reactive,observer,watcher,dep', date: '2020-08-21'"

### Vue 的响应式原理

Vue 的响应式实现在`src/core/observer`下面

响应式的建立依靠的是`Observer`, `Dep`, `Watcher`以及订阅发布模式，其中`Observer`通过`getter/setter`实现了数据的拦截，
`Dep`作为 publisher，`Watcher`作为 subscriber

Vue 的每个响应式对象包括数组都有`__ob__`的属性，这就是`Observer`

### Observer

`Observer`实际上就是对对象和数组进行响应式代理

- 对于对象就对每个属性调用`defineReactive`执行实际的 getter/setter 劫持
- 对于数组，Vue 会更改数组的`__proto__`指向以实现对方法的覆盖，并依次代理数组项中的对象和数组
- 生成的`Observer`对象会被挂载到响应式对象的`__ob__`属性上
- 每个`Observer`对象都会有一个`Dep`对象，用来保存依赖于自己的一系列`Watcher`

### Dep

`Dep`就是发布变化的对象，它有一个 id 标识并且维护一个`Watcher`列表`subs`

- 可以添加或者删除某个`Watcher`
- 可以通知所有的`Watcher`执行自己对应的`update`方法

### defineReactive

`defineReactive`每次调用都会生成一个`Dep`对象，表示当前属性可能作为的依赖

- 当 getter 被劫持后，每当取数据的时候，`Dep`对象就会从某个地方(`Dep.target`)把数据索取方(`Watcher`)加入到自己的`subs`列表中
- 如果当前的属性也是个对象，那么会 observe 这个对象，生成`ChildOb`，同时也会将当前的`Watcher`加入到`ChildOb`的`subs`中
- 劫持 setter 后，当新的值过来时，执行`Dep`对象的 notify，通知`Watcher`更新，调用`update`方法
- 如果 set 的值是对象或者数组会对它执行 observe 操作，生成新的`ChildOb`并更新闭包中旧的`ChildOb`
- 上面提到的`Dep`和`ChildOb`都是处于 getter/setter 相对于 defineReactive 的闭包里的

### Watcher

`Watcher`是数据的订阅方，来源有三个地方：render, computed, watch($watch)，相应的 watcher 也就分成三种，`Watcher`对象包含以下主要的内容：

- vm 组件实例对象
- expression 获取数据的方法，如 computed 的回调，watch 的表达式或者方法，更新视图的方法
- cb 变化时的回调方法，对于 watch 来讲它是有回调的
- deps,depIds,newDeps,newDepIds 订阅的`Dep`列表，因为依赖会根据计算更新，所以每次都要更新新的依赖列表，id 用来避免自己被重复加到`Dep`中去
- deep, lazy, sync, dirty, active
- getter 获取数据的方法，就是上面的 expression
- value 当前的值，用于 watch 方法

`Watcher`会提供`update`方法，也就是当数据变化时会被调用，有三种情况：

- 对于 computed-watcher 来讲，是被动触发的过程，当访问到 computed 属性才会计算，那当 computed 依赖的属性发生了变化，computed-watcher 会在 computed-getter 那里标记数据已经变脏，这样 computed 就会重新计算而不会使用缓存值了
- 对于 render-watcher 来讲，渲染是异步的，这时`Watcher`会被加入到全局的待执行的 watcher 列表中，等待渲染调度`nextTick`执行，执行的时候会调用`getter`方法也就更新了组件的视图
- 对于同步的 watcher 来讲会直接调用`getter`获取新的 value，在调用 getter 期间，当前的`Watcher`会被推入一个全局的栈内，并且更新到`Dep.target`，执行的期间会触发数据的 getter 劫持，`Dep`就会得到订阅。执行完之后出栈并更新新的`deps`列表

![alt](https://cn.vuejs.org/images/data.png)

- Dep

  - `Dep.target`
  - `id`
  - `subs` watchers 列表
  - `depend` `Dep.target.addDep(this)` 将自身(dep) 加入到 `Dep.target`的 deps 中，并且 watcher 也会加入到 dep 的 subs 中
  - `notify()` 调用 watchers 的`update`方法

- Observer

  - `value`
  - `dep`
  - 如果值是数组，那么覆写原型方法，然后对每个值递归 `new Observer(value)`
  - 如果是对象，对每个 value 都调用 `defineReactive`，每个对象或数组都会挂载上`__ob__`属性
    - 创建 `dep` 对象，存在在闭包中
    - `getter` 时调用 `dep.depend()` 将 dep 加入 `Dep.target` 的 deps 中（包括子对象的 observer 的 dep）
    - `setter` 对 set 的值进行 observe，调用 dep 的`notify()`
    - 对于子对象会递归调用 `new Observer(value)`

- Watcher
  - `vm`
  - `deps`, `newDeps`
  - `cb`
  - `value`
  - `addDep` 把 dep 加入到 deps（同时也会把自身加入到 dep 的 subs 中）
  - `update`
    - 如果是 lazy，则标记为 dirty
    - 否则将当前 watcher 推入到任务队列
  - `run` 调用 `get` 得到新的值，调用 `cb` 回调
  - `get`，将自身写入`Dep.target`，如果是对象，会把这个对象的所有属性都读一遍，<br>
    之后撤销写入`Dep.target`，类似于回溯，然后会把重新收集到的依赖 `newDeps` 覆写到 `deps`
  - `depend` 调用所有 deps 的 depend 方法
