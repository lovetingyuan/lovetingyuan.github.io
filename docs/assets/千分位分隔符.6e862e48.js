var e=`<h3>\u5343\u5206\u4F4D\u5206\u9694\u7B26</h3>
<p>\u4E00\u4E32\u6570\u5B57\uFF0C\u4F7F\u7528\u5343\u5206\u4F4D\u5206\u9694\u7B26\u5206\u9694\u5F00
\u5982 100000 -&gt; 100,000</p>
<p>10000000 -&gt; 10,000,000</p>
<p>\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5B9E\u73B0\uFF0C\u4ECE\u672B\u5C3E\u5F00\u59CB\u5411\u524D\uFF0C\u6BCF\u4E09\u4E2A\u6570\u5B57\u5C31\u63D2\u5165\u4E00\u4E2A\u5206\u9694\u7B26</p>
<p><code>/(\\d{3})+$/</code></p>
<p>\u8FD9\u6837\u4F1A\u5339\u914D\u672B\u5C3E\u4E4B\u524D\u4E09\u7684\u6574\u6570\u500D\u7684\u6570\u5B57</p>
<blockquote>
<p>\u5173\u4E8E\u6B63\u5219\u91CF\u8BCD\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers</a></p>
</blockquote>
<p>\u4F46\u5B9E\u9645\u6211\u4EEC\u8981\u5339\u914D\u7684\u662F\u4E09\u4E2A\u6570\u5B57\u4E4B\u524D\u7684\u90A3\u4E2A\u7A7A\u767D\u4F4D\u7F6E\uFF0C\u5206\u9694\u7B26\u9700\u8981\u88AB\u63D2\u5165\u5230\u8BE5\u4F4D\u7F6E\u3002\u8FD9\u65F6\u9700\u8981\u7528\u5230\u524D\u5411\u65AD\u8A00<code>x(?=y)</code>\uFF0C\u8FD9\u4E2A\u6B63\u5219\u4F1A\u5339\u914D x \u4F46\u662F\u8981\u6C42 x \u540E\u9762\u5FC5\u987B\u8DDF\u7740 y\uFF0C<code>(?=(\\d{3}))</code>\u8FD9\u6837\u4F1A\u5339\u914D\u4E00\u4E2A\u7A7A\u767D\u4F4D\u7F6E\uFF0C\u540E\u9762\u8DDF\u7740\u4E09\u4E2A\u6570\u5B57\uFF0C\u8FD9\u6837\u6B63\u5219\u53D8\u6210\u4E86 <code>(?=(\\d{3})+$)</code></p>
<blockquote>
<p>\u5173\u4E8E\u6B63\u5219\u65AD\u8A00\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions</a></p>
</blockquote>
<p>\u63A5\u4E0B\u6765\u9700\u8981\u5904\u7406\u5F00\u5934\u7684\u7279\u6B8A\u60C5\u51B5\uFF0C\u4E0D\u5904\u7406\u7684\u8BDD\u5982\u679C\u6570\u5B57\u6070\u597D\u662F\u4E09\u7684\u6574\u6570\u500D\uFF0C\u90A3\u4E48\u5F00\u5934\u4E5F\u4F1A\u88AB\u63D2\u5165\u5206\u9694\u7B26
\u6211\u4EEC\u53EA\u9700\u8981\u4E0D\u5339\u914D\u5F00\u5934\u5373\u53EF\uFF0C<code>/(?=(\\B\\d{3})+$)/g</code>\uFF0C\u8FD9\u91CC\u7684\u5143\u5B57\u7B26<code>\\B</code>\u8868\u793A\u975E\u5355\u8BCD\u8FB9\u754C\uFF0C\u5BBD\u5EA6\u4E3A 0</p>
<blockquote>
<p>\u5173\u4E8E\u6B63\u5219\u5143\u5B57\u7B26\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes</a></p>
</blockquote>
<pre><code class="language-js">var str = &quot;10000000000&quot;,
  reg = /(?=(\\B\\d{3})+$)/g;
console.log(str.replace(reg, &quot;,&quot;)); // 10,000,000,000
</code></pre>
`;export{e as default};
