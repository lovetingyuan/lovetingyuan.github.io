import{o,f as d,O as c}from"./vendor-b1BbEorC.js";const i={class:"markdown-body"},r=c('<h2>Hybrid 通信方案</h2><h3>对于 Android 来讲：</h3><h4>JS 调用原生方法</h4><ul><li>通过原生方法向 webview 注入全局变量，如 Android 可以通过<code>addJavascriptInterface</code>，JS 就可以调用挂在在全局的 API 了，这种方式不能同步获取原生返回值；</li><li>URL 拦截的方法：重载 webview 的<code>shouldOverrideUrlLoading</code>方法，在这个方法里可以获取到 webview 发出的各种请求</li><li>弹窗拦截的方法：当你调用 js 的一些方法（<code>alert</code>,<code>confirm</code>,<code>prompt</code>,<code>console.log</code>）时，webview 是可以拦截到这些调用的，例如通过重载<code>onJsPrompt</code>方法，可以拦截到 js 对<code>prompt</code>的调用</li></ul><h4>从原生调用 JS</h4><ul><li>Android 可以调用 webview 实例上的<code>evaluateJavascript</code>，该方法接受一段 js 代码和一个包含回调方法的对象作为参数，js 执行的结果会通过回调返回给原生端；</li><li>在上面这个方法出现之前，通常是调用 webview 实例上的<code>loadUrl</code>方法，它同样接受一段 javascript 协议的代码，但是无法返回 js 执行的结果；</li></ul><hr><h3>对于 IOS 来讲，同 Android 的原理大同小异：</h3><p>IOS 在旧的版本中使用<code>UIWebView</code>作为 webview 组件，在 8 之后新增了<code>WKWebView</code>，后者采用 safari 内核，功能和性能都更好：</p><h4>JS 调用原生方法</h4><ul><li>同 Android 一样，<code>UIWebView</code>可以通过<code>JavascriptCore(JSCore)</code>获取到 webview 的 JS 上下文，然后可以直接注入原生的方法供 JS 调用，js 就可以获取到原生 API 返回的值；在<code>WKWebView</code>中无法获取<code>JSCore</code>，但提供了<code>addScriptMessageHandler</code>的方式，也可以直接向 JS 环境注入方法，js 需要采用<code>window.webkit.messageHandlers.helloWorld.postMessage()</code>这样的形式调用，原生方法执行完后通过调用 JS 的方法返回结果；</li><li><code>UIWebView</code>支持使用<code>shouldStartLoadWithRequest</code>来对 webview 发出的请求进行拦截；</li><li><code>WKWebView</code>中调用<code>alert</code>,<code>confirm</code>,<code>prompt</code>这些弹窗方法实际上会调用原生对应的方法，例如对于<code>prompt</code>方法来说，原生的<code>runJavaScriptTextInputPanelWithPrompt</code>方法(需要原生来实现)会被调用；</li></ul><h4>原生调用 JS</h4><ul><li><p>IOS 支持直接执行 JS 代码，通过<code>stringByEvaluatingJavaScriptFromString</code>方法传入，可以直接获取到 JS 代码的执行结果，两种 webview 都支持这样的方式；</p></li><li><p><code>UIWebView</code>中可以通过<code>JSCore</code>获取到 js 上下文，然后调用<code>evaluateScript</code>可以直接执行一段 js 代码并获取到返回值，<code>WKWebView</code>无法直接获取到 js 上下文，但是仍任支持通过<code>evaluateJavaScript</code>来执行 js 代码，它接受一段 js 代码和一个回调方法作为参数</p></li></ul><hr><p>总结来讲，原生调用 JS 一般都是通过执行一段 JS 代码来实现，JS 调用原生可以直接调用原生注入的方法，也可以通过<code>iframe</code>等方式发出 url 请求或者是调用弹窗方法（一般<code>prompt</code>用的最多，因为它可以获得返回值）被拦截。在实际开发中需要考虑兼容性，性能，安全以及业务场景等按照上面的原理自定义一套通信协议。</p><p>Android 端和 IOS 端都有成熟的开源库实现了 JSBridge，例如： IOS <a href="https://github.com/marcuswestin/WebViewJavascriptBridge" target="_blank" rel="noopener">WebViewJavascriptBridge</a>, <a href="https://github.com/bang590/JSPatch" target="_blank" rel="noopener">JSPatch</a>, Android <a href="https://github.com/wendux/DSBridge-Android" target="_blank" rel="noopener">DSBridge</a></p><h2>Hybrid 性能优化</h2><ul><li><p>离线包缓存 + bsdiff/bspatch 增量更新（完整性校验）</p></li><li><p>首屏直出（可以直出到离线包中，但要跟用户 ID）</p></li><li><p>预加载，包括 Webview 预加载和复用，接口或资源可通过 native 预加载等</p></li><li><p>客户端渲染，可以借助 webview 将渲染好的 html 缓存起来，下次可以直接展示</p></li></ul>',18),t=[r],h={__name:"Hybrid",setup(a,{expose:e}){return e({frontmatter:{}}),(s,p)=>(o(),d("div",i,t))}};export{h as default};