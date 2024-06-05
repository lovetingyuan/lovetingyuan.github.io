### flex 布局

#### 容器属性

- `flex-direction` 表示主轴方向
  `row(主轴水平，默认) | row-reverse | column(主轴垂直) | column-reverse;`
- `flex-wrap` 表示子元素是否换行，使用`wrap`或`wrap-reverse`属性会使得当前的容器拥有多条主轴
  `nowrap | wrap | wrap-reverse;`
- `flex-flow`
  是上述两个属性的缩写，默认为`row nowrap`
- `justify-content` 表示子项目的对齐方式
  `flex-start | flex-end | center | space-between | space-around;`
- `align-items` 定义子项目在交叉轴上的对齐方式
  `flex-start | flex-end | center | baseline(以子项目文本的baseline对齐) | stretch;`
- `align-content` 定义多根主轴的对齐方式。如果项目只有一根轴线，该属性不起作用
  `flex-start | flex-end | center | space-between | space-around | stretch;`

#### 子元素属性

- `order` 可以定义项目的位置（顺序） , 取整数，默认为 0，越小项目就排前面
- `flex-grow` 项目的放大比例，默认为 0，如果是 1 那么将占据剩余空间
- `flex-shrink` 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
- `flex-basis`

  > flex-basis 优先级是比 width 高，二者最好不要一起使用
  > flex-basis 默认为 auto ，表示子项的基本尺寸根据其自身的尺寸决定
  > 如果 flex-basis 的值是具体尺寸，那么子项的尺寸会取自身内容尺寸和 basis 尺寸较大的那个值

  此外还可以取尺寸关键词，如 `content`, `min-content`, `max-content`, `fill`, `fit-content`

- `flex` 是 `flex-grow, flex-shrink, flex-basis` 的缩写，默认是 `0 1 auto` <br>
  如果值是整数，那么代表 flex-grow 的数值，shrink 还是 1，basis 则是 0%<br>
  如果是 auto，那么等同于`1 1 auto`, 如果是 none，则是`0 0 auto`

- `align-self`
  可以单独设置在交叉轴上的对齐方式，会覆盖`align-items`属性<br>
  `auto | flex-start | flex-end | center | baseline | stretch;`

资源：

- https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
- https://flexboxfroggy.com/
- https://flexbox.tech/
