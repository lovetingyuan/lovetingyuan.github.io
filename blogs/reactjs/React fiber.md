### react fiber

> https://jser.pro/ddir/rie 这里有一个fiber工作可视化的演练场

当React组件状态变化时，react需要重新渲染该组件，此时会向任务调度器（Scheduler）推入一个渲染更新的任务，任务总是从当前fibre树的**根节点**开始进行协调作业（scheduleUpdateOnFiber -> ensureRootIsScheduled -> performSyncWorkOnRoot/performConcurrentWorkOnRoot -> performUnitOfWork(will check spare time) -> beginWork|completeUnitOfWork）。

![](https://7km.top/static/reactfiberworkloop.b647e134.png)

react组件发生渲染的时候会分为两个阶段：

1. render阶段（协调阶段） （异步可中断）
   - 如果是更新的话如果有memo或者shouldComponentUpdate就判断是否要渲染，如果需要更新或者是首次渲染则调用render方法生成新的fiber节点（如果之前fiber节点有current属性，则会复用current指向的fiber）
   - diff现在的fiber节点和新生成的fiber节点，同时记录副作用（包含对真实DOM应该执行的操作以及组件中的Effect回调等）

render阶段结束后，会生成一个具有副作用的fiber节点的链表或者队列，以及新的fiber树（finishedWork）

2. commit阶段 （同步不可中断）
   这一阶段主要是遍历之前得到的副作用，执行其副作用，分为三个子阶段，每个阶段去遍历整个副作用：
   1. DOM变更之前，主要是执行class组件的`getSnapshotBeforeUpdate`钩子方法，新建一个用于调度副作用的任务队列
   2. 更新DOM节点上的事件和属性，更新文本节点的值，更新ref，同步执行`useLayoutEffect`的clean函数，异步执行`useEffect`的clean函数。如果DOM需要移除，则调用其及其所有子节点的unmount钩子，以及把所有effect clean函数推入执行队列，并同步执行
   3. DOM变更后，调用class组件的updated或者mounted钩子，以及重新聚焦之前的焦点；同步执行`useLayoutEffect`，异步执行`useEffect`，同步执行`setState`的完成回调

commit阶段结束后，之前生成的finishedWork会替代当前的fiber树
