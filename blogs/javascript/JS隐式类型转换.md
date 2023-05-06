[meta]: javascript "title: 'JavaScript中的隐式类型转换', keywords: 'implicit, type, convertion', date: '2020-9-3'"

## JavaScript 中的隐式类型转换

隐式类型转换是 JS 的一大特色，在大部分情况下开发者都会避免触发 js 的这个怪癖。如果要评选 JS 中糟糕的部分，那它肯定是名列前茅的特性。

之所以存在隐式类型转换，就是某些操作符对应的值不能直接进行计算或比较，比如`[] == ![]` 的值为`true`：

1. !操作符会转换为 bool 值，[]为真值，此时变为 `[] == false`
2. bool 值在比较的时候转成 1 或者 0，即`[] == 0`
3. `[]`执行`valueOf`操作返回的仍是 `[]`，那再执行`toString`操作返回"", 即 `"" == 0`
4. 字符串和数字比较，字符串转为数字，那么`0 == 0`就是`true`

隐式转换被触发时，非基本类型变量会触发`ToPrimitive`操作，通常会尝试先调用`valueOf`看能否转为基本类型，否则接着调用`toString`（Date 对象相反），否则会抛出错误。

- `valueOf`会尽量返回数字类型，如`true`会返回`1`，`null`会返回`0`，`undefined`会返回`NaN`，但是像数组或者对象就无法变成数字就会返回自身
- 之后就会调用`toString`方法返回字符串，一般对象会转为`[object 构造方法名字]`，但是有的对象有自己的实现，例如像数组就相当于调用`join`方法，Date 对象则会返回一个可读的字符串，正则对象则返回字面量形式的字符串等

`+`作为一元操作符时会将值转为数字，作为二元操作符时如果有 string 那就转为 string，否则转为 number 类型

`==`在类型不同的时候也会进行隐式转换：

- `undefined == null` 为 true，除此以外，`undefined`和`null`在与除自身进行宽松比较之外都是 false
- number, string, boolean 比较时都转为 number
- 对象类型还是要执行`ToPrimitive`操作再比较
