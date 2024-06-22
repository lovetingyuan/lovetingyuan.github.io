### vue的插槽

> https://cn.vuejs.org/guide/components/slots.html

#### 默认插槽

```html
<FancyButton>
  <!-- 插槽内容 -->
  Click me!
</FancyButton>
```

```html
<button class="fancy-btn">
  <!-- 插槽出口 -->
  <slot></slot>
</button>
```

```html
<button class="fancy-btn">
  <slot>
    <!-- 默认内容，如果FancyButton没有提供插槽内容，这里就会使用Submit作为button的内容 -->
    Submit
  </slot>
</button>
```

![](https://cn.vuejs.org/assets/slots.CKcE8XYd.png)

#### 具名插槽

插槽可以有多个，我们可以通过设置name的方式来声明多个插槽

上面的默认插槽其实就是隐式名为 `default` 的插槽，只是只有一个插槽的时候我们可以省略name

```html
<div class="layout-container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```html
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
  <template v-slot:default>
    <!-- 默认的内容放这里 -->
  </template>
  <template v-slot:footer>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>

<!-- v-slot 有个专门的语法糖 # -->
<BaseLayout>
  <template #header>
    <!-- header 插槽的内容放这里 -->
  </template>
  <template #default>
    <!-- 默认的内容放这里 -->
  </template>
  <template #footer>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>

<!-- 默认的插槽内容可以省略掉template标签的包裹 -->
<BaseLayout>
  <template #header>
    <!-- header 插槽的内容放这里 -->
  </template>
  <!-- 除了template标签之外的内容都被当作默认插槽的内容 -->
  this is default content
  <template #footer>
    <!-- header 插槽的内容放这里 -->
  </template>
  this is also default content
</BaseLayout>
```

同一个具名插槽只能有一个，包括默认插槽

#### 条件插槽

```html
<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>

    <div v-if="$slots.default" class="card-content">
      <slot />
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
```

vm上的`$slot`对象包含了插槽的内容，key是插槽的名字，值是一个返回插槽内容（vnode数组）的函数

#### 动态插槽名

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]> ... </template>
</base-layout>
```

### 插槽属性

我们知道插槽内容可以访问父组件的作用域，也就是默认情况下插槽的使用方无法控制插槽的内容，只能控制插槽的位置

但是vue提供了类似于属性传递的方式可以向插槽内容传递一些数据

对于默认插槽下面提供了一个示例

```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

```html
<MyComponent v-slot="slotProps">
  this is text: {{ slotProps.text }}
  <hr />
  this is count: {{ slotProps.count }}
</MyComponent>
```

对于具名插槽来说下面提供了一个例子

```html
<MyComponent>
  <template #header="headerProps"> {{ headerProps.message }} </template>
  <template #default="defaultProps"> {{ defaultProps.counter }} </template>
  <template #footer="footerProps"> {{ footerProps }} </template>
</MyComponent>
```

```html
<div class="my-component">
  <slot name="header" message="hello"></slot>
  <slot :counter="3"></slot>
  <!-- 注意上面的name不会被传到headerProps中 -->
</div>
```

可以看到上面默认插槽的例子实际上也可以用下面具名的写法，并且二者并不能混用（会带来作用域的混淆）。

所以我并不推荐第一种默认插槽的写法（v-slot），过于追求语法上的便利而忽略了对写法唯一性约束的重要性是得不偿失的，会增加额外的学习细节，付出额外的选择成本以及破坏API的统一性。
