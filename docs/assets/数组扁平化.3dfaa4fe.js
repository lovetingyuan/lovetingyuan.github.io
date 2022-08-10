const t=`<h3>\u6241\u5E73\u5316\u4E00\u4E2A\u5D4C\u5957\u6570\u7EC4</h3>
<pre><code class="language-js">// \u8FED\u4EE3\u6CD5\uFF0C\u4EFF\u7167\u9012\u5F52\u7684\u65B9\u5F0F
var NestedIterator = function (nestedList) {
  const stack = [nestedList]
  const flatten = []
  const start = Symbol()
  while (stack.length) {
    const list = stack.at(-1)
    let len = stack.length
    for (let i = list[start] ?? 0; i &lt; list.length; i++) {
      const item = list[i]
      if (Array.isArray(item)) {
        stack.push(item) // \u603B\u662F\u4F18\u5148\u5904\u7406\u6700\u65B0\u9047\u5230\u7684\u6570\u7EC4
        list[start] = i + 1
        break
      }
      flatten.push(item)
    }
    if (len === stack.length) {
      stack.pop()
    }
  }
  return flatten
}
</code></pre>
<p>\u4E5F\u53EF\u4EE5\u7528 BFS \u6765\u505A\uFF0C\u4F46\u662F\u8FD9\u6837\u8FD4\u56DE\u7684\u987A\u5E8F\u8DDF\u539F\u6570\u7EC4\u4E2D\u7684\u987A\u5E8F\u5C31\u4E0D\u4E00\u81F4\u4E86</p>
`;export{t as default};
