[meta]: <vuejs> (title: 'Vue的响应式原理', keywords: 'vue,vuejs,reactive,observer,watcher,dep', date: '2020-08-21')

### Vue的响应式原理

Vue的响应式实现在`src/core/observer`下面

响应式的建立依靠的是`Observer`, `Dep`, `Watcher`以及订阅发布模式，其中`Observer`通过`getter/setter`实现了数据的拦截，
`Dep`作为publisher，`Watcher`作为subscriber

Vue的每个响应式对象包括数组都有`__ob__`的属性，这就是`Observer`

### Observer
`Observer`实际上就是对对象和数组进行响应式代理
* 对于对象就对每个属性调用`defineReactive`执行实际的getter/setter劫持
* 对于数组，Vue会更改数组的`__proto__`指向以实现对方法的覆盖，并依次代理数组项中的对象和数组
* 生成的`Observer`对象会被挂载到响应式对象的`__ob__`属性上
* 每个`Observer`对象都会有一个`Dep`对象，用来保存依赖于自己的一系列`Watcher`

### Dep
`Dep`就是发布变化的对象，它有一个id标识并且维护一个`Watcher`列表`subs`
* 可以添加或者删除某个`Watcher`
* 可以通知所有的`Watcher`执行自己对应的`update`方法

### defineReactive
`defineReactive`每次调用都会生成一个`Dep`对象，表示当前属性可能作为的依赖
* 当getter被劫持后，每当取数据的时候，`Dep`对象就会从某个地方(`Dep.target`)把数据索取方(`Watcher`)加入到自己的`subs`列表中
* 如果当前的属性也是个对象，那么会observe这个对象，生成`ChildOb`，同时也会将当前的`Watcher`加入到`ChildOb`的`subs`中
* 劫持setter后，当新的值过来时，执行`Dep`对象的notify，通知`Watcher`更新，调用`update`方法
* 如果set的值是对象或者数组会对它执行observe操作，生成新的`ChildOb`并更新闭包中旧的`ChildOb`
* 上面提到的`Dep`和`ChildOb`都是处于getter/setter相对于defineReactive的闭包里的

### Watcher
`Watcher`是数据的订阅方，来源有三个地方：render, computed, watch($watch)，相应的watcher也就分成三种，`Watcher`对象包含以下主要的内容：
* vm 组件实例对象
* expression 获取数据的方法，如computed的回调，watch的表达式或者方法，更新视图的方法
* cb 变化时的回调方法，对于watch来讲它是有回调的
* deps,depIds,newDeps,newDepIds 订阅的`Dep`列表，因为依赖会根据计算更新，所以每次都要更新新的依赖列表，id用来避免自己被重复加到`Dep`中去
* deep, lazy, sync, dirty, active
* getter 获取数据的方法，就是上面的expression
* value 当前的值，用于watch方法

`Watcher`会提供`update`方法，也就是当数据变化时会被调用，有三种情况：
* 对于computed-watcher来讲，是被动触发的过程，当访问到computed属性才会计算，那当computed依赖的属性发生了变化，computed-watcher会在computed-getter那里标记数据已经变脏，这样computed就会重新计算而不会使用缓存值了
* 对于render-watcher来讲，渲染是异步的，这时`Watcher`会被加入到全局的待执行的watcher列表中，等待渲染调度`nextTick`执行，执行的时候会调用`getter`方法也就更新了组件的视图
* 对于同步的watcher来讲会直接调用`getter`获取新的value，在调用getter期间，当前的`Watcher`会被推入一个全局的栈内，并且更新到`Dep.target`，执行的期间会触发数据的getter劫持，`Dep`就会得到订阅。执行完之后出栈并更新新的`deps`列表

![alt](https://cn.vuejs.org/images/data.png)
