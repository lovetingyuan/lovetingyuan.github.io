[meta]: <vuejs> (title: 'Vue的初始化过程', keywords: 'vue,initial,init', date: '2020-08-31')

## Vue的初始化过程

Vue的入口在`src/core/instance/index.js`，首先是设置一些全局API，如`set`, `delete`, `nextTick`, `observable`, `use`, `mixin`, `component`, `directive`, `extend`等，以及注册内置组件，之后就是从根组件开始，解析组件选项，实例化组件对象，填充各种vm属性方法，调用render进行渲染。
* 在原型上设置`_init`方法，该方法负责生成vm并对vm进行处理：
  * 标准化组件选项并合并生成`$options`
  * 设置`$parent`, `$children`以及一些生命周期状态如`$isMounted`, `$isDestroyed`等
  * 更新`$listeners`到组件上
  * 设置渲染相关的内容，如`$slots`, `$attrs`, `$listeners`, `$vnode`, `$createElement`等
  * 调用`beforeCreate`钩子
  * 处理`inject`选项
  * 处理`props`, `data`, `computed`, `watch`, `methods`
  * 处理`provide`选项
  * 调用`created`钩子
  * 如果有`el`选项则执行`$mount`方法（渲染过程中创建新组件也是执行这个），核心就是`mountComponent`
    * 执行`beforeMount`
    * 执行`mountComponent:` `vm._update(vm._render(), hydrating)`
    * 建立该表达式和vm之间的watcher，注入`beforeUpdate`钩子
    * 执行`mounted`钩子
* 在原型上设置state相关方法和属性，包括`$set`, `$delete`, `$data`, `$props`, `$watch`等
* 在原型上设置事件相关的方法，包括`$on`, `$off`, `$emit`, `$once`等
* 在原型上设置生命周期相关的方法：
  * 将真正的`_update`方法设置到原型上，这个方法真正负责执行初始渲染或者更新渲染
  * 设置`$forceUpdate`, `$destroy`等生命周期api
* 在原型上设置渲染相关的方法：
  * 设置渲染函数用到的一些渲染辅助方法，如renderList, renderSlot等，当然它们都用简写的形式挂载到原型上了
  * 将真正的`_render`方法设置到原型上，这个方法用来执行组件的render方法产生新的vnode
  * 设置`$nextTick`

Vue本身支持web和weex两种平台，所以不同平台的入口也会在Vue上做一些不同的处理，包括一些内置的组件和平台特定的配置。
