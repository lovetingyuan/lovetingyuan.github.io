var e=`<h2>\u8282\u6D41(throttle)\u548C\u9632\u6296(debounce)</h2>
<p>\u8FD9\u4E24\u79CD\u51FD\u6570\u6267\u884C\u7B56\u7565\u90FD\u662F\u9488\u5BF9\u77ED\u65F6\u95F4\u5185\u51FD\u6570\u88AB\u9891\u7E41\u89E6\u53D1\u6267\u884C\u7684\u95EE\u9898\uFF0C\u6BD4\u5982 input \u4E8B\u4EF6\uFF0Cresize \u4E8B\u4EF6\uFF0Cscroll \u4E8B\u4EF6\uFF0Cmousemove \u7B49\u7B49\uFF0C\u662F\u6539\u5584\u7A0B\u5E8F\u6027\u80FD\u7684\u4E00\u79CD\u624B\u6BB5\u3002</p>
<p>\u5176\u4E2D</p>
<ul>
<li>\u8282\u6D41\u8868\u793A\u5728\u8BBE\u7F6E\u7684\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u4FDD\u8BC1\u51FD\u6570\u53EA\u88AB\u6267\u884C\u4E00\u6B21\uFF1B</li>
</ul>
<pre><code class="language-javascript">throttle(method, 200) // method\u6BCF\u6B21\u8C03\u7528\u65F6\u95F4\u95F4\u9694\u90FD\u4FDD\u8BC1\u81F3\u5C11\u4E3A200ms
function throttle(func, delay) {
  let timer
  return function (...args) {
    if (timer) return
    timer = setTimeout(() =&gt; {
      // \u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BB0\u5F55\u4E0A\u4E00\u6B21\u6267\u884C\u65F6\u7684\u65F6\u95F4\u6233\u5BF9\u6BD4\u73B0\u5728\u7684\u65F6\u95F4\u6233\u662F\u5426\u8D85\u51FAdelay\u6765\u51B3\u5B9A\u662F\u5426\u6267\u884C\u51FD\u6570
      func.call(this, ...args)
      timer = null
    }, delay)
  }
}
</code></pre>
<ul>
<li>\u9632\u6296\u8868\u793A\u5728\u51FD\u6570\u4EC5\u5728\u9891\u7E41\u89E6\u53D1(\u95F4\u9694\u5C0F\u4E8E\u8BBE\u7F6E\u7684\u65F6\u95F4)\u7684\u6700\u540E\u4E00\u6B21\u6267\u884C\uFF1B</li>
</ul>
<pre><code class="language-javascript">debounce(method, 200) // \u5728\u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u5982\u679Cmethod\u89E6\u53D1\u7684\u5468\u671F\u90FD\u5C0F\u4E8E200ms\uFF0C\u90A3\u4E48\u53EA\u4F1A\u6700\u540E\u6267\u884C\u4E00\u6B21
function debounce(func, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() =&gt; {
      func.call(this, ...args)
    }, delay)
  }
}
</code></pre>
<p><code>lodash</code>\u63D0\u4F9B\u4E86\u4E0A\u9762\u4E24\u4E2A\u65B9\u6CD5\u66F4\u4E3A\u589E\u5F3A\u548C\u7EC6\u81F4\u7684\u5B9E\u73B0\uFF0C<a href="https://github.com/lodash/lodash/blob/master/throttle.js" target="_blank" rel="noopener noreferrer">throttle</a>, <a href="https://github.com/lodash/lodash/blob/master/debounce.js" target="_blank" rel="noopener noreferrer">debounce</a>.</p>
`;export{e as default};
