var e=`<h3>\u5B57\u5178\u5E8F\u7684\u7B2C K \u5C0F\u7684\u6570\u5B57\u662F\u591A\u5C11</h3>
<p>\u7ED9\u5B9A\u6574\u6570 n \u548C k\uFF0C\u8FD4\u56DE [1, n] \u4E2D\u5B57\u5178\u5E8F\u7B2C k \u5C0F\u7684\u6570\u5B57\u3002
<a href="https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/" target="_blank" rel="noopener noreferrer">leetcode</a></p>
<pre><code class="language-log">\u8F93\u5165: n = 13, k = 2
\u8F93\u51FA: 10
\u89E3\u91CA: \u5B57\u5178\u5E8F\u7684\u6392\u5217\u662F [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u5C0F\u7684\u6570\u5B57\u662F 10\u3002
</code></pre>
<p><img src="https://assets.leetcode-cn.com/solution-static/440/440_1.PNG" alt="\u5B57\u5178\u6811"></p>
<pre><code class="language-js">var findKthNumber = function (n, k) {
  // \u5B57\u5178\u6811\u5C31\u662F\u5C42\u6B21\u904D\u5386\u662F\u6309\u7167123\u7684\u987A\u5E8F\uFF0C\u4F46\u662F\u524D\u5E8F\u904D\u5386\u624D\u80FD\u5F97\u5230\u5B57\u5178\u5E8F
  // \u4E0B\u9762\u7684\u601D\u8DEF\u5C31\u662F\u5148\u8BA1\u7B97k\u5728\u7B2C\u51E0\u4E2A\u5B50\u6811\u4E2D\uFF0C\u518D\u8BA1\u7B97k\u5728\u5B83\u6240\u5728\u5B50\u6811\u4E2D\u7B2C\u51E0\u4E2A\u4F4D\u7F6E
  const maxLevel = String(n).length // \u5B57\u5178\u6811\u6700\u5927\u5C42\u6570
  const lastLevelFirstNode = 10 ** (maxLevel - 1) // \u6700\u540E\u4E00\u5C42\u6700\u5DE6\u8FB9\u7684\u8282\u70B9\u503C
  const lastLevelNodes = n - lastLevelFirstNode + 1 // \u6700\u540E\u4E00\u5C42\u7684\u8282\u70B9\u6570
  const lastNodeTreeIndex = String(n)[0] - 0 // \u6700\u540E\u7684\u8282\u70B9\u6240\u5728\u7684\u5B50\u6811\u7684\u5E8F\u53F7
  let kIndex = 1 // k\u8282\u70B9\u6240\u5728\u7684\u5B50\u6811\u7684\u5E8F\u53F7
  let nodes = 0
  let prevNodes = 0
  const fullNodes = (10 ** maxLevel - 1) / 9
  const lessFullNodes = (fullNodes - 1) / 10
  // \u904D\u5386\u5B50\u6811\uFF0C\u8BA1\u7B97\u8282\u70B9\u6570\u52A0\u548C\uFF0C\u627E\u5230k\u5728\u7B2C\u51E0\u4E2A\u5B50\u6811\u4EE5\u53CA\u5728\u6240\u5C5E\u5B50\u6811\u7684\u4F4D\u7F6E
  for (let i = 1; i &lt;= 9; i++) {
    if (i &lt; lastNodeTreeIndex) {
      nodes += fullNodes
    } else if (i === lastNodeTreeIndex) {
      nodes += lessFullNodes + lastLevelNodes - (lastNodeTreeIndex - 1) * lastLevelFirstNode
    } else {
      nodes += lessFullNodes
    }
    if (nodes &gt;= k) {
      kIndex = i
      break
    }
    prevNodes = nodes
  }
  const targetTreeIndex = k - prevNodes
  let result
  let index = 0
  let node = kIndex
  const list = []
  // \u8FED\u4EE3\u6CD5\u8FDB\u884C\u524D\u5E8F\u904D\u5386
  while (index++ &lt; targetTreeIndex) {
    result = node
    const nextNode = node * 10
    if (nextNode &gt; n) {
      node = list.pop()
    } else {
      node = nextNode
      for (let i = 9; i &gt; 0; i--) {
        if (nextNode + i &gt; n) break
        list.push(nextNode + i)
      }
    }
  }
  return result
}
</code></pre>
`;export{e as default};
