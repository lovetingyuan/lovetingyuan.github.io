[meta]: <javascript> (title: '节流与防抖', keywords: 'throttle, debounce', date: '2020-7-29')

## 节流(throttle)和防抖(debounce)

这两种函数执行策略都是针对短时间内函数被频繁触发执行的问题，比如input事件，resize事件，scroll事件，mousemove等等，是改善程序性能的一种手段。

其中

* 节流表示在设置的单位时间内，保证函数只被执行一次；

```javascript
throttle(method, 200); // method每次调用时间间隔都保证至少为200ms
function throttle(func, delay) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => { // 也可以通过记录上一次执行时的时间戳对比现在的时间戳是否超出delay来决定是否执行函数
      func.call(this, ...args)
      timer = null
    })
  }
}

```

* 防抖表示在函数仅在频繁触发(间隔小于设置的时间)的最后一次执行；

```javascript
debounce(method, 200); // 在一段时间内，如果method触发的周期都小于200ms，那么只会最后执行一次
function debounce(func, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}

```

`lodash`提供了上面两个方法更为增强和细致的实现，[throttle](https://github.com/lodash/lodash/blob/master/throttle.js), [debounce](https://github.com/lodash/lodash/blob/master/debounce.js).
