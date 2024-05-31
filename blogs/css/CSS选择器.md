[comment]: css "title: 'css选择器和优先级', keywords: 'css,selector,priority', date: '2020-8-25'"

## css 选择器和优先级

> 这里有一个css选择器的可视化站点 https://fffuel.co/css-selectors/

### 一些选择器：

- 直接子代选择器 `ul > li`, ul 下面**一层**的 li
- 一般兄弟选择器 `ul ~ p`, ul 后面同层级的所有 p
- 紧邻兄弟选择器 `h2 + p`, h2 后面紧跟着的 p
- 属性选择器 `[data-id]`
  - `[attr~=value]` 属性值以空格符分开后至少有一个是 value
  - `[attr|=value]` 属性值以`value`或者`value-`为前缀
  - `[attr^=value]` 属性值以`value`为开头
  - `[attr$=value]` 属性值以`value`为结尾
  - `[attr*=value]` 属性值包含 value 即可
  - `[attr operator value i]`, `[attr operator value s]` 加上`value i`(或 s)表示属性值**不区分**大小写和**区分**大小写

### 优先级

- 内联样式
- ID 选择器
- 类，属性，伪类选择器
- 标签，伪元素选择器
  以上选择器优先级从高到低
- 通用选择器(\*)
- 层次选择器( ,>,~,+)
- `:not()`伪类选择器
  以上选择器对优先级没有影响

优先级的计算与元素在 dom 树中的距离无关：

```css
body h1 {
  color: green;
}
html h1 {
  color: purple;
}
```

h1 是紫色，优先级相同就按照顺序覆盖

---

下面列举一些常用的伪类和伪元素:

### 伪元素([mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements))

伪元素表示可以渲染到界面但无法在 html 中描述的“元素”，通常作为现有元素的特定部分

- `::after`, `::before`, `::first-line`, `::first-letter`, `::selection`, `::placeholder`

### 伪类([mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes))

伪类描述一些具有特定结构、状态或者行为的元素

- `:root` 代表 html 元素，但比 html 标签选择器的优先级高一些
- 表单相关
  - `:checked` 通常用于单选复选框，下拉框等，可以不借助 js 实现 tab 效果
  - `:disabled`, `:enabled`; `:required`, `:optional`; `:read-only`, `:read-write`; `:in-range`, `:out-of-range`; `:valid`, `:invalid`; `:default`...
- 结构性伪类
  - `:first-child`, `:last-child`; `:first-of-type`,`:last-of-type`; `:nth-child()`, `:nth-last-child()`; `:nth-of-type()`, `:nth-last-of-type()`
  - `:only-child`, `:only-of-type` 代表元素的唯一子元素，与`:first-child:last-child`含义上相同
  - `:empty` 表示不包含子元素的元素（注释不算子元素但空白字符算），可以用它来展示加载前的样式
- 状态相关
  - `:focus`, `:active`, `:visited`
  - `:link` 表示未访问过的链接，遵循下面的顺序:link — :visited — :hover — :active，`:any-link`表示所有带链接的元素
  - `:focus-within`，匹配包含焦点元素的元素
- `:is()`，参数为一组选择器，然后会遍历这些选择器让其每一个都生效，与此类似的是`:where()`.[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
- `:target` 匹配和当前路由哈希（#）对的上的那个元素
- `:not()` [mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)，反向匹配，匹配不是某选择器的元素
- `:scope` [mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope) 表示当前元素，在 css 里相当于`:root`，在 js 里指代当前元素，如`someElement.querySelectorAll(':scope > div');`
- `:has()` [mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has) 表示匹配当前元素并且满足给定的选择器，如`a:has(> img)`表示只会匹配直接包含 \<img\> 子元素的 \<a\> 元素
