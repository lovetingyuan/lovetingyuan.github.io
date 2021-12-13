[meta]: <mobile> (title: 'Hybrid通信方案', keywords: 'hybrid, jsbridge, message, native', date: '2020-8-1')

## Hybrid通信方案

### 对于Android来讲：

#### JS调用原生方法
* 通过原生方法向webview注入全局变量，如Android可以通过`addJavascriptInterface`，JS就可以调用挂在在全局的API了，这种方式不能同步获取原生返回值；
* URL拦截的方法：重载webview的`shouldOverrideUrlLoading`方法，在这个方法里可以获取到webview发出的各种请求
* 弹窗拦截的方法：当你调用js的一些方法（`alert`,`confirm`,`prompt`,`console.log`）时，webview是可以拦截到这些调用的，例如通过重载`onJsPrompt`方法，可以拦截到js对`prompt`的调用

#### 从原生调用JS
* Android 可以调用webview实例上的`evaluateJavascript`，该方法接受一段js代码和一个包含回调方法的对象作为参数，js执行的结果会通过回调返回给原生端；
* 在上面这个方法出现之前，通常是调用webview实例上的`loadUrl`方法，它同样接受一段javascript协议的代码，但是无法返回js执行的结果；

------

### 对于IOS来讲，同Android的原理大同小异：

IOS在旧的版本中使用`UIWebView`作为webview组件，在8之后新增了`WKWebView`，后者采用safari内核，功能和性能都更好：

#### JS调用原生方法
* 同Android一样，`UIWebView`可以通过`JavascriptCore(JSCore)`获取到webview的JS上下文，然后可以直接注入原生的方法供JS调用，js就可以获取到原生API返回的值；在`WKWebView`中无法获取`JSCore`，但提供了`addScriptMessageHandler`的方式，也可以直接向JS环境注入方法，js需要采用`window.webkit.messageHandlers.helloWorld.postMessage()`这样的形式调用，原生方法执行完后通过调用JS的方法返回结果；
* `UIWebView`支持使用`shouldStartLoadWithRequest`来对webview发出的请求进行拦截；
* `WKWebView`中调用`alert`,`confirm`,`prompt`这些弹窗方法实际上会调用原生对应的方法，例如对于`prompt`方法来说，原生的`runJavaScriptTextInputPanelWithPrompt`方法(需要原生来实现)会被调用；

#### 原生调用JS
* IOS支持直接执行JS代码，通过`stringByEvaluatingJavaScriptFromString`方法传入，可以直接获取到JS代码的执行结果，两种webview都支持这样的方式；

* `UIWebView`中可以通过`JSCore`获取到js上下文，然后调用`evaluateScript`可以直接执行一段js代码并获取到返回值，`WKWebView`无法直接获取到js上下文，但是仍任支持通过`evaluateJavaScript`来执行js代码，它接受一段js代码和一个回调方法作为参数

------

总结来讲，原生调用JS一般都是通过执行一段JS代码来实现，JS调用原生可以直接调用原生注入的方法，也可以通过`iframe`等方式发出url请求或者是调用弹窗方法（一般`prompt`用的最多，因为它可以获得返回值）被拦截。在实际开发中需要考虑兼容性，性能，安全以及业务场景等按照上面的原理自定义一套通信协议。

Android端和IOS端都有成熟的开源库实现了JSBridge，例如：
IOS [WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge), [JSPatch](https://github.com/bang590/JSPatch), Android [DSBridge](https://github.com/wendux/DSBridge-Android)
