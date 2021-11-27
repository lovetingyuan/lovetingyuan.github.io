[meta]: <vuejs> (title: 'Vue的vnode的diff过程', keywords: 'vue,vuejs,vnode,diff,patch', date: '2020-08-21')

## Vue中vnode的diff过程

Vue 虚拟dom的diff过程在`src/core/vdom`下面

### Vnode都包含什么？
vnode就是虚拟dom节点，它会包含以下一些主要的内容：
* tag 标签名
* children 子vnode列表
* text 文本节点的文本
* elm 对应的真实dom节点
* context 表示所处当前组件的上下文
* key vnode的唯一标识
* componentInstance 组件实例对象
* componentOptions 组件选项
* parent 父vnode
* data VNodeData，里面包含了节点的attr,props,domProps,ref,slots,on,directives,style,class等等
* 除此之外还包括isStatic,isOnce,asyncFactory,ssrContext等等信息

每个VNode都有自己的生命周期钩子：create, activate, update, remove, destroy，在vnode新增，删除更新的时候都会调用外部注册的各种方法

### diff-patch的过程是怎样的？

主要分两个阶段，先是对比新旧两个vnode；然后再依次对比各自的children，整个过程是递归调用：

#### diff

* 新节点不存在，旧节点存在，则销毁旧节点
* 旧节点不存在，则创建新节点，有四种类型：component, element, comment, text，之后将它们插入到真实dom中
* 都存在
  * 如果旧节点是实际的dom（SSR水合或者vnode是异步的）就更新elm返回，失败会置空旧节点（相当于后续新建）
  * 如果新旧vnode相同
    * key相同并且tag相同或都是comment，都有VNodeData，如果是input那么type必须相同就直接patch vnode
  * 不同的话就创建新节点，然后插入到真实dom中，然后销毁旧节点

#### patch

* 新旧节点引用相同那无需patch
* 如果都是静态节点并且key相同或者是v-once那么也无需patch，更新组件实例引用即可
* 更新节点的属性，包括事件，指令，也就是attrs,class,style,event listeners,directives,transition等
* 更新children
  * 如果子节点只是text，那就直接更新文本
  * 如果新节点有children旧节点没有或者只是text，那么依次新建子节点并插入，反之就移除旧节点的children
  * 采用首尾指针（新首，新尾，旧首，旧尾）依次patch子节点，首尾指针向中间靠
    * 如果旧首为空，那么旧首向右移
    * 如果旧尾为空，那么旧尾向左移
    * 如果旧首新首相同，则执行patchVnode，之后新首旧首都向右移
    * 如果旧尾新尾相同，则执行patchVnode，之后新尾旧尾都向左移
    * 如果旧首新尾相同，执行patch，把更新的dom节点放到旧尾指针指向dom节点的后面，旧首指针右移，新尾指针左移
    * 如果旧尾新首相同，执行patch，把更新的dom节点放到旧首指针指向的dom节点前面，旧尾指针左移，新首指针右移
    * 四个指针都是不同节点，找新首是否存在于旧队列中（根据key去找）
      * 不存在，新首是新的节点，需要创建新节点并插入到旧首节点之前，新首指针右移
      * 存在，执行patch，从旧队列中将旧vnode置空并将新的dom节点插入到旧首节点之前，新首指针右移
  * 当新队列或者旧队列首尾指针相遇时
    * 旧队列遍历完毕，剩余的新首到新尾这些节点都是需要新建的节点
    * 新队列遍历完毕，旧首到旧尾的这些节点都需要被清除

diff-patch的过程是参考了[`Snabbdom`](https://github.com/snabbdom/snabbdom)的实现。
