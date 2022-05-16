var n=`<h3>\u4E8C\u53C9\u6811\u4E09\u79CD\u904D\u5386\u7684\u8FED\u4EE3\u5199\u6CD5</h3>
<h4>\u524D\u5E8F\u904D\u5386</h4>
<pre><code class="language-js">var preorderTraversal = function (root) {
  let node = root
  const result = []
  const nodeList = []
  while (node || nodeList.length) {
    while (node) {
      result.push(node.val)
      nodeList.push(node)
      node = node.left
    }
    node = nodeList.pop()
    node = node.right
  }
  return result
}
</code></pre>
<h4>\u4E2D\u5E8F\u904D\u5386</h4>
<pre><code class="language-js">var inorderTraversal = function (root) {
  let node = root
  const nodeList = []
  const result = []
  while (node || nodeList.length) {
    while (node) {
      nodeList.push(node)
      node = node.left
    }
    node = nodeList.pop()
    result.push(node.val)
    node = node.right
  }
  return result
}
</code></pre>
<h4>\u540E\u5E8F\u904D\u5386</h4>
<pre><code class="language-js">var postorderTraversal = function (root) {
  const nodeList = []
  const result = []
  let node = root
  while (node || nodeList.length) {
    while (node) {
      nodeList.push(node)
      node = node.left || node.right
    }
    node = nodeList.pop()
    result.push(node.val)
    const last = nodeList[nodeList.length - 1]
    // \u4E0D\u80FD\u8D70\u56DE\u5934\u8DEF
    if (last &amp;&amp; last.left === node) {
      node = last.right
    } else {
      node = null
    }
  }
  return result
}
</code></pre>
`;export{n as default};
