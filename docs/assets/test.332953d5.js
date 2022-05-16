var n=`<h2>typescript</h2>
<ol>
<li>
<p>\u5B9E\u73B0\u9AD8\u7EA7\u7C7B\u578B PromiseType<T></p>
<pre><code class="language-ts">PromiseType&lt;Promise&lt;string&gt;&gt; // string
PromiseType&lt;Promise&lt;Promise&lt;number&gt;&gt;&gt; // number
</code></pre>
</li>
</ol>
<h2>html &amp; css</h2>
<ol>
<li>
<p>\u4F7F\u7528 css \u548C html \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 tab \u9875\u5207\u6362\u6548\u679C\uFF0C\u8981\u6C42\u4E0D\u80FD\u4F7F\u7528 js</p>
<pre><code class="language-html">&lt;div class=&quot;tabs&quot;&gt;
  &lt;!-- \u5728\u6B64\u4E66\u5199tab\u6807\u7B7E --&gt;
  &lt;section&gt;content 1&lt;/section&gt;
  &lt;section&gt;content 2&lt;/section&gt;
  &lt;section&gt;content 3&lt;/section&gt;
&lt;/div&gt;
&lt;style&gt;
  /* \u5728\u6B64\u4E66\u5199\u6837\u5F0F */
&lt;/style&gt;
</code></pre>
</li>
<li>
<p>\u9690\u85CF\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u5143\u7D20\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u6709\u54EA\u4E9B\u65B9\u6CD5\uFF1F
hidden display visibility opacity content-visibility \u7EDD\u5BF9\u5B9A\u4F4D size=0 clip-path:polygon(0 0)</p>
</li>
<li>
<p>\u5B9E\u73B0\u4E00\u4E2A\u5C0F\u77E9\u5F62\u9010\u6E10\u53D8\u6210\u5927\u77E9\u5F62\u7684\u6548\u679C\uFF0C\u6709\u591A\u5C11\u5B9E\u73B0\u65B9\u5F0F\uFF1F</p>
</li>
<li>
<p>\u4E86\u89E3 gpu \u786C\u4EF6\u52A0\u901F\u5417 \u80CC\u540E\u7684\u539F\u7406\u548C\u6D41\u7A0B\u662F\u4EC0\u4E48</p>
</li>
</ol>
<h2>javascript</h2>
<ol>
<li>
<p>\u5B9E\u73B0\u4E0B\u9762\u7684\u8BED\u53E5</p>
<pre><code class="language-js">function foo() {
  console.log(this.val)
}
// \u7528\u4E0D\u7528\u7684\u65B9\u5F0F\u6765\u8C03\u7528foo\uFF0C\u4F7F\u63A7\u5236\u53F0\u6253\u5370\u51FA\u5B57\u7B26\u4E32 foo
// \u4F8B\u5982\uFF1Afoo.call({ val: 'foo' })
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
  setTimeout(() =&gt; {
    console.log(8)
  }, 9)
  setTimeout(() =&gt; {
    console.log(9)
  }, 8)
})()
</code></pre>
</li>
<li>
<p>\u5B9E\u73B0<code>Promise.all</code>\u548C<code>Promise.finally</code></p>
</li>
</ol>
<h2>http</h2>
<ol>
<li>
<p>\u5F53\u524D\u7F51\u7AD9 A \u5411\u7B2C\u4E09\u65B9\u7F51\u7AD9 C\uFF08\u53EF\u4FE1\u4F46\u662F\u4E0D\u540C\u57DF\u540D\uFF09\u8BF7\u6C42\u4E00\u4E2A\u63A5\u53E3\u5E76\u4E14\u5E0C\u671B\u5E26\u4E0A\u4E8C\u8005\u7684 cookie\uFF0C\u8BF7\u95EE\u9700\u8981\u6EE1\u8DB3\u4EC0\u4E48\u6761\u4EF6\u6216\u8005\u505A\u4EC0\u4E48\u8BBE\u7F6E\uFF1F</p>
<p>withCredential: true and same-site cookie</p>
</li>
</ol>
<h2>git</h2>
<ol>
<li>\u5982\u4F55\u5408\u5E76\u591A\u4E2A commit \u4E3A\u4E00\u4E2A commit</li>
</ol>
<h2>\u7B97\u6CD5</h2>
<ol>
<li>
<p>\u5224\u65AD\u4E00\u4E2A\u4E8C\u53C9\u6811\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684<strong>\u5B50\u7ED3\u6784</strong> <a href="https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/" target="_blank" rel="noopener noreferrer">leetcode</a></p>
</li>
<li>
<p>\u4F7F\u7528\u9012\u5F52\u548C\u8FED\u4EE3\u4E24\u79CD\u65B9\u5F0F\u53CD\u8F6C\u4E00\u4E2A\u94FE\u8868 <a href="https://leetcode-cn.com/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">leetcode</a></p>
</li>
</ol>
`;export{n as default};
