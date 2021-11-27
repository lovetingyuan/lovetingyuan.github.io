[comment]: <browser> (title: '前端监控', keywords: 'monitor, error', date: '2020-8-11')

## 前端监控

浏览器端的监控主要有以下几个方面：
* 性能监控
  * 加载性能
  * 渲染帧率
* 错误监控
  * 资源错误
  * JS运行错误
* 埋点上报

### 性能监控

#### 页面加载
衡量页面加载的速度有很多指标，比如：
* FCP: First contentful paint
* FMP: First meaningful paint
* [`LCP`](https://web.dev/lcp/): **Largest contentful paint**

    表示当前处于viewport内最大（未拉伸且实际显示的大小）的图片（可能是背景图）或者video或者文本块渲染完成的时间；
* [`FID`](https://web.dev/fid/): **First input delay**

    表示首次交互延迟时间，通常发生在`FCP`和`TTI`之间，此时用户点击了链接或者按钮或者进行了输入，页面却可能被主线程阻塞无反应；
* TTI: Time to Interactive
* [`CLS`](https://web.dev/cls/): **Cumulative layout shift**

    用来衡量页面稳定性，用户不希望在浏览页面时被突然加载上的图片或者iframe将内容弹开，应该尽量避免dom插入或移动，并给置换元素提前设定好大小

<img src="https://webdev.imgix.net/vitals/lcp_ux.svg" width=280px>
<img src="https://webdev.imgix.net/vitals/fid_ux.svg" width=280px>
<img src="https://webdev.imgix.net/vitals/cls_ux.svg" width=280px>

我们可以通过[`performance`](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)API来计算出上面这些指标。performance API仍处于标准化的过程中，其中的属性和方法仍可能会变化。可以通过`performance.getEntries()`来获取当前可用的性能指标(`PerformanceEntry`)，每个指标都会包含`duration`,`entryType`,`name`,`startTime`这几个属性，其中`duration`就表示耗时。

这些指标包含有不同的类型：
  * [`PerformanceNavigationTiming`](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API)，这个指标中包含了页面导航、加载的一些时间点，包括从页面请求发出到DNS查找到重定向到响应结束再到dom树构建等丰富的时间节点，这些属性也可以通过`performance.timing`来获取；
  * [`PerformanceMark`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceMark)和[`PerformanceMeasure`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceMeasure)，这个指标供用户自己进行时间打点，可以调用[`performance.mark(name)`](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/mark)开始计时，调用[`performance.measure(name)`](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/measure)结束计时，然后通过`performance.getEntriesByName(name)`就能拿到测量的结果；
  * [`PerformanceResourceTiming`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceResourceTiming)，这个指标用来衡量资源加载和API请求的情况，包括重定向，DNS查找，请求开始结束等等的时间；
  * [`PerformancePaintTiming`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformancePaintTiming)和[`PerformanceEventTiming`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceEventTiming)，这两个指标包含`FP`,`FCP`, `first-input`;
  * 另外还有`PerformanceServerTiming`,`PerformanceLongTaskTiming`,`PerformanceElementTiming`,`PerformanceFrameTiming`等等。

性能指标的衡量是个动态的过程，随着页面渲染和交互的不断进行，其中的一些指标是会不断变化的，可以用[`PerformanceObserver`](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver)来进行监听，它可以监听例如`first-input`(可以用来计算FID), `largest-contentful-paint`, `layout-shift`(可以用来计算CLS), `navigation`, `mark`&`measure`等指标的变化。

Nodejs同时也对performance API提供了支持，实现了[perf_hooks](https://nodejs.org/api/perf_hooks.html)接口。

#### 渲染性能

页面渲染问题，一般可以在开发阶段进行评估和发现。Long-task的JS，频繁的重绘回流，大量的dom节点，复杂的动画，过高的CPU内存占用等都会引起掉帧问题。Chrome浏览器的控制台提供了功能强大的performance面板，以及rendering工具（可以查看实时帧率和重绘回流），JavaScript profiler工具，performance monitor工具（CPU，内存，重绘回流，dom节点数等），coverage工具等工具集，可以帮助快速定位性能问题。考虑到可能的掉帧问题，可以利用`requestAnimationFrame`来计算渲染帧率，例如fpsmeter，然后针对有连续掉帧的场景进行上报。

------

### 错误监控

#### JS及资源加载错误
* `window.onerror`或`window.addEventListener('error', handler)`
  * 用来捕获JS运行时错误（包括语法错误），回调参数包含错误信息，脚本url，行号，列号等；
    有时候脚本是从不同的域加载的，这时是无法获取错误的详细信息的，解决办法是为script标签加上`crossorigin`属性并让服务器开启`CORS`；
  * 资源加载错误不会冒泡，所以只能通过`window.addEventListener('error', handler, true)`在捕获阶段捕获；

#### Promise错误
* `window.onunhandledrejection`或`window.addEventListener('unhandledrejection', handler)`
  * 用来捕获没有reject或catch来处理的`Promise`错误，回调的错误对象包含该promise以及`reason`
  * 也可以捕获`async/await`中发生的错误，但对于`await`后面的promise一般都需要进行错误处理，避免执行中断

#### 接口错误
* 对于接口请求，通常会封装成一系列方法供业务调用，此时可以很方便的集中处理接口错误；
否则可以通过patch的方法来实现对API错误的追踪：`fetch`可以直接被overwrite，`XMLHttpRequest`可以patch原型上的`open`，`send`等方法，拿到`xhr`实例然后监听错误。

-----

### 数据埋点上报
一般需要对用户数据以及用户行为进行上报，用户数据包括账户信息，设备信息等，用户行为包括访问路径，访问时长，页面交互等；

埋点方式一般有代码埋点（主动调用上报API，或者采用dataset或指令等声明式），可视化埋点（如记录控件xpath），无痕埋点（如通过事件委托全量记录用户操作）

上报方式一般采用1px图片Get请求，将数据放在query中；或者采用 [`navigator.sendBeacon`](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)，它是异步的post请求，可以保证页面卸载也能完成上报，并且不会与接口请求竞争，是理想的上报方式
