var n=`<h2>typescript</h2>
<ol>
<li>
<p>\u5B9E\u73B0\u9AD8\u7EA7\u7C7B\u578B PromiseType<T></p>
<pre><code class="language-ts">PromiseType&lt;Promise&lt;string&gt;&gt; // string
PromiseType&lt;Promise&lt;Promise&lt;number&gt;&gt;&gt; // number
</code></pre>
</li>
</ol>
<h2>html</h2>
<ol>
<li>
<p>\u4F7F\u7528 css \u548C html \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 tab \u9875\u5207\u6362\u6548\u679C\uFF0C\u8981\u6C42\u4E0D\u80FD\u4F7F\u7528 js</p>
<p><code>label id for radio input :checked +</code></p>
</li>
</ol>
<h2>css</h2>
<h2>javascript</h2>
<ol>
<li>
<p>\u5B9E\u73B0\u4E0B\u9762\u7684\u8BED\u53E5</p>
<pre><code class="language-js">function foo() {
  return this.val
}
// \u5728\u6B64\u5199\u4EFB\u4F55\u8BED\u53E5\uFF0C\u4F7F\u5F97\u4E0B\u9762\u7684\u8BED\u53E5\u53EF\u4EE5\u6253\u5370\u51FA\u5B57\u7B26\u4E32 foo\uFF0C\u6709\u51E0\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF1F
console.log(foo())
</code></pre>
</li>
<li>
<p>\u5199\u51FA\u5BF9\u5E94\u7684\u8F93\u51FA</p>
<pre><code class="language-js">;(async () =&gt; {
  const p = new Promise((r) =&gt; {
    console.log(1)
    Promise.resolve().then(() =&gt; {
      r()
      console.log(2)
    })
  })
  console.log(3)
  console.log(await 4)
  p.then(() =&gt; {
    console.log(5)
  }).then(() =&gt; {
    console.log(6)
  })
  p.then(() =&gt; {
    console.log(7)
  })
})()
</code></pre>
</li>
<li>
<p>\u5982\u4F55\u53D6\u6D88\u4E00\u4E2A fetch \u8BF7\u6C42\uFF1F</p>
<p>\u4F7F\u7528<a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController" target="_blank" rel="noopener noreferrer"><code>AbortController</code></a></p>
</li>
</ol>
<h2>http</h2>
<ol>
<li>
<p>\u5F53\u524D\u7F51\u7AD9 A \u5411\u7B2C\u4E09\u65B9\u7F51\u7AD9 C\uFF08\u53EF\u4FE1\u4F46\u662F\u4E0D\u540C\u57DF\u540D\uFF09\u8BF7\u6C42\u4E00\u4E2A\u63A5\u53E3\u5E76\u4E14\u5E0C\u671B\u5E26\u4E0A\u4E8C\u8005\u7684 cookie\uFF0C\u8BF7\u95EE\u9700\u8981\u6EE1\u8DB3\u4EC0\u4E48\u6761\u4EF6\u6216\u8005\u505A\u4EC0\u4E48\u8BBE\u7F6E\uFF1F</p>
<p>withCredential: true and same-site cookie</p>
</li>
</ol>
`;export{n as default};
