[meta]: mobile "title: 'Hybrid通信方案', keywords: 'hybrid, jsbridge, message, native', date: '2020-8-1'"

## Hybrid 通信方案

### 对于 Android 来讲：

#### JS 调用原生方法

- 通过原生方法向 webview 注入全局变量，如 Android 可以通过`addJavascriptInterface`，JS 就可以调用挂在在全局的 API 了，这种方式不能同步获取原生返回值；
- URL 拦截的方法：重载 webview 的`shouldOverrideUrlLoading`方法，在这个方法里可以获取到 webview 发出的各种请求
- 弹窗拦截的方法：当你调用 js 的一些方法（`alert`,`confirm`,`prompt`,`console.log`）时，webview 是可以拦截到这些调用的，例如通过重载`onJsPrompt`方法，可以拦截到 js 对`prompt`的调用

#### 从原生调用 JS

- Android 可以调用 webview 实例上的`evaluateJavascript`，该方法接受一段 js 代码和一个包含回调方法的对象作为参数，js 执行的结果会通过回调返回给原生端；
- 在上面这个方法出现之前，通常是调用 webview 实例上的`loadUrl`方法，它同样接受一段 javascript 协议的代码，但是无法返回 js 执行的结果；

---

### 对于 IOS 来讲，同 Android 的原理大同小异：

IOS 在旧的版本中使用`UIWebView`作为 webview 组件，在 8 之后新增了`WKWebView`，后者采用 safari 内核，功能和性能都更好：

#### JS 调用原生方法

- 同 Android 一样，`UIWebView`可以通过`JavascriptCore(JSCore)`获取到 webview 的 JS 上下文，然后可以直接注入原生的方法供 JS 调用，js 就可以获取到原生 API 返回的值；在`WKWebView`中无法获取`JSCore`，但提供了`addScriptMessageHandler`的方式，也可以直接向 JS 环境注入方法，js 需要采用`window.webkit.messageHandlers.helloWorld.postMessage()`这样的形式调用，原生方法执行完后通过调用 JS 的方法返回结果；
- `UIWebView`支持使用`shouldStartLoadWithRequest`来对 webview 发出的请求进行拦截；
- `WKWebView`中调用`alert`,`confirm`,`prompt`这些弹窗方法实际上会调用原生对应的方法，例如对于`prompt`方法来说，原生的`runJavaScriptTextInputPanelWithPrompt`方法(需要原生来实现)会被调用；

#### 原生调用 JS

- IOS 支持直接执行 JS 代码，通过`stringByEvaluatingJavaScriptFromString`方法传入，可以直接获取到 JS 代码的执行结果，两种 webview 都支持这样的方式；

- `UIWebView`中可以通过`JSCore`获取到 js 上下文，然后调用`evaluateScript`可以直接执行一段 js 代码并获取到返回值，`WKWebView`无法直接获取到 js 上下文，但是仍任支持通过`evaluateJavaScript`来执行 js 代码，它接受一段 js 代码和一个回调方法作为参数

---

总结来讲，原生调用 JS 一般都是通过执行一段 JS 代码来实现，JS 调用原生可以直接调用原生注入的方法，也可以通过`iframe`等方式发出 url 请求或者是调用弹窗方法（一般`prompt`用的最多，因为它可以获得返回值）被拦截。在实际开发中需要考虑兼容性，性能，安全以及业务场景等按照上面的原理自定义一套通信协议。

Android 端和 IOS 端都有成熟的开源库实现了 JSBridge，例如：
IOS [WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge), [JSPatch](https://github.com/bang590/JSPatch), Android [DSBridge](https://github.com/wendux/DSBridge-Android)
