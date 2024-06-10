[meta]: vuejs "title: 'Vue的vnode的diff过程', keywords: 'vue,vuejs,vnode,diff,patch', date: '2020-08-21'"

## Vue 中 vnode 的 diff 过程

Vue 虚拟 dom 的 diff 过程在`src/core/vdom`下面

### Vnode 都包含什么？

vnode 就是虚拟 dom 节点，它会包含以下一些主要的内容：

- tag 标签名
- children 子 vnode 列表
- text 文本节点的文本
- elm 对应的真实 dom 节点
- context 表示所处当前组件的上下文
- key vnode 的唯一标识
- componentInstance 组件实例对象
- componentOptions 组件选项
- parent 父 vnode
- data VNodeData，里面包含了节点的 attr,props,domProps,ref,slots,on,directives,style,class 等等
- 除此之外还包括 isStatic,isOnce,asyncFactory,ssrContext 等等信息

每个 VNode 都有自己的生命周期钩子：create, activate, update, remove, destroy，在 vnode 新增，删除更新的时候都会调用外部注册的各种方法

### diff-patch 的过程是怎样的？

主要分两个阶段，先是对比新旧两个 vnode；然后再依次对比各自的 children，整个过程是递归调用：

#### diff

- 新节点不存在，旧节点存在，则销毁旧节点
- 旧节点不存在，则创建新节点，有四种类型：component, element, comment, text，之后将它们插入到真实 dom 中
- 都存在
  - 如果旧节点是实际的 dom（SSR 水合或者 vnode 是异步的）就更新 elm 返回，失败会置空旧节点（相当于后续新建）
  - 如果新旧 vnode 相同
    - key 相同并且 tag 相同或都是 comment，都有 VNodeData，如果是 input 那么 type 必须相同就直接 patch vnode
  - 不同的话就创建新节点，然后插入到真实 dom 中，然后销毁旧节点

#### patch

- 新旧节点引用相同那无需 patch
- 如果都是静态节点并且 key 相同或者是 v-once 那么也无需 patch，更新组件实例引用即可
- 更新节点的属性，包括事件，指令，也就是 attrs,class,style,event listeners,directives,transition 等
- 更新 children
  - 如果子节点只是 text，那就直接更新文本
  - 如果新节点有 children 旧节点没有或者只是 text，那么依次新建子节点并插入，反之就移除旧节点的 children
  - 采用首尾指针（新首，新尾，旧首，旧尾）依次 patch 子节点，首尾指针向中间靠
    - 如果旧首为空，那么旧首向右移
    - 如果旧尾为空，那么旧尾向左移
    - 如果旧首新首相同，则执行 patchVnode，之后新首旧首都向右移
    - 如果旧尾新尾相同，则执行 patchVnode，之后新尾旧尾都向左移
    - 如果旧首新尾相同，执行 patch，把更新的 dom 节点放到旧尾指针指向 dom 节点的后面，旧首指针右移，新尾指针左移
    - 如果旧尾新首相同，执行 patch，把更新的 dom 节点放到旧首指针指向的 dom 节点前面，旧尾指针左移，新首指针右移
    - 四个指针都是不同节点，找新首是否存在于旧队列中（根据 key 去找）
      - 不存在，新首是新的节点，需要创建新节点并插入到旧首节点之前，新首指针右移
      - 存在，执行 patch，从旧队列中将旧 vnode 置空并将新的 dom 节点插入到旧首节点之前，新首指针右移
  - 当新队列或者旧队列首尾指针相遇时
    - 旧队列遍历完毕，剩余的新首到新尾这些节点都是需要新建的节点
    - 新队列遍历完毕，旧首到旧尾的这些节点都需要被清除

![示例](https://cdn.nlark.com/yuque/0/2020/gif/1355506/1598423349095-73718a2f-88d3-440e-af5e-5475755598ee.gif#align=left&display=inline&height=375&margin=%5Bobject%20Object%5D&name=vue2-dom-diff.gif&originHeight=375&originWidth=600&size=542460&status=done&style=none&width=600)

diff-patch 的过程是参考了[`Snabbdom`](https://github.com/snabbdom/snabbdom)的实现。
