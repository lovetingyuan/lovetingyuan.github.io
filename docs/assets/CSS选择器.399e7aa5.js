var e=`<h2 id="css\u9009\u62E9\u5668\u548C\u4F18\u5148\u7EA7">css\u9009\u62E9\u5668\u548C\u4F18\u5148\u7EA7</h2>
<h3 id="\u4E00\u4E9B\u9009\u62E9\u5668\uFF1A">\u4E00\u4E9B\u9009\u62E9\u5668\uFF1A</h3>
<ul>
<li>\u76F4\u63A5\u5B50\u4EE3\u9009\u62E9\u5668 <code>ul &gt; li</code>, ul\u4E0B\u9762<strong>\u4E00\u5C42</strong>\u7684li</li>
<li>\u4E00\u822C\u5144\u5F1F\u9009\u62E9\u5668 <code>ul ~ p</code>, ul\u540E\u9762\u540C\u5C42\u7EA7\u7684\u6240\u6709p</li>
<li>\u7D27\u90BB\u5144\u5F1F\u9009\u62E9\u5668 <code>h2 + p</code>, h2\u540E\u9762\u7D27\u8DDF\u7740\u7684p</li>
<li>\u5C5E\u6027\u9009\u62E9\u5668 <code>[data-id]</code><ul>
<li><code>[attr~=value]</code> \u5C5E\u6027\u503C\u4EE5\u7A7A\u683C\u7B26\u5206\u5F00\u540E\u81F3\u5C11\u6709\u4E00\u4E2A\u662Fvalue</li>
<li><code>[attr|=value]</code> \u5C5E\u6027\u503C\u4EE5<code>value</code>\u6216\u8005<code>value-</code>\u4E3A\u524D\u7F00</li>
<li><code>[attr^=value]</code> \u5C5E\u6027\u503C\u4EE5<code>value</code>\u4E3A\u5F00\u5934</li>
<li><code>[attr$=value]</code> \u5C5E\u6027\u503C\u4EE5<code>value</code>\u4E3A\u7ED3\u5C3E</li>
<li><code>[attr*=value]</code> \u5C5E\u6027\u503C\u5305\u542Bvalue\u5373\u53EF</li>
<li><code>[attr operator value i]</code>, <code>[attr operator value s]</code> \u52A0\u4E0A<code>value i</code>(\u6216s)\u8868\u793A\u5C5E\u6027\u503C<strong>\u4E0D\u533A\u5206</strong>\u5927\u5C0F\u5199\u548C<strong>\u533A\u5206</strong>\u5927\u5C0F\u5199</li>
</ul>
</li>
</ul>
<h3 id="\u4F18\u5148\u7EA7">\u4F18\u5148\u7EA7</h3>
<ul>
<li>\u5185\u8054\u6837\u5F0F</li>
<li>ID\u9009\u62E9\u5668</li>
<li>\u7C7B\uFF0C\u5C5E\u6027\uFF0C\u4F2A\u7C7B\u9009\u62E9\u5668</li>
<li>\u6807\u7B7E\uFF0C\u4F2A\u5143\u7D20\u9009\u62E9\u5668
\u4EE5\u4E0A\u9009\u62E9\u5668\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E</li>
<li>\u901A\u7528\u9009\u62E9\u5668(*)</li>
<li>\u5C42\u6B21\u9009\u62E9\u5668( ,&gt;,~,+)</li>
<li><code>:not()</code>\u4F2A\u7C7B\u9009\u62E9\u5668
\u4EE5\u4E0A\u9009\u62E9\u5668\u5BF9\u4F18\u5148\u7EA7\u6CA1\u6709\u5F71\u54CD</li>
</ul>
<p>\u4F18\u5148\u7EA7\u7684\u8BA1\u7B97\u4E0E\u5143\u7D20\u5728dom\u6811\u4E2D\u7684\u8DDD\u79BB\u65E0\u5173\uFF1A</p>
<pre><code class="language-css">body h1 {
  color: green;
}
html h1 {
  color: purple;
}
</code></pre>
<p>h1\u662F\u7D2B\u8272\uFF0C\u4F18\u5148\u7EA7\u76F8\u540C\u5C31\u6309\u7167\u987A\u5E8F\u8986\u76D6</p>
<hr>
<p>\u4E0B\u9762\u5217\u4E3E\u4E00\u4E9B\u5E38\u7528\u7684\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20:</p>
<h3 id="\u4F2A\u5143\u7D20mdn">\u4F2A\u5143\u7D20(<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements">mdn</a>)</h3>
<p>\u4F2A\u5143\u7D20\u8868\u793A\u53EF\u4EE5\u6E32\u67D3\u5230\u754C\u9762\u4F46\u65E0\u6CD5\u5728html\u4E2D\u63CF\u8FF0\u7684\u201C\u5143\u7D20\u201D\uFF0C\u901A\u5E38\u4F5C\u4E3A\u73B0\u6709\u5143\u7D20\u7684\u7279\u5B9A\u90E8\u5206</p>
<ul>
<li><code>::after</code>, <code>::before</code>, <code>::first-line</code>, <code>::first-letter</code>, <code>::selection</code>, <code>::placeholder</code></li>
</ul>
<h3 id="\u4F2A\u7C7Bmdn">\u4F2A\u7C7B(<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes">mdn</a>)</h3>
<p>\u4F2A\u7C7B\u63CF\u8FF0\u4E00\u4E9B\u5177\u6709\u7279\u5B9A\u7ED3\u6784\u3001\u72B6\u6001\u6216\u8005\u884C\u4E3A\u7684\u5143\u7D20</p>
<ul>
<li><code>:root</code> \u4EE3\u8868html\u5143\u7D20\uFF0C\u4F46\u6BD4html\u6807\u7B7E\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7\u9AD8\u4E00\u4E9B</li>
<li>\u8868\u5355\u76F8\u5173<ul>
<li><code>:checked</code> \u901A\u5E38\u7528\u4E8E\u5355\u9009\u590D\u9009\u6846\uFF0C\u4E0B\u62C9\u6846\u7B49\uFF0C\u53EF\u4EE5\u4E0D\u501F\u52A9js\u5B9E\u73B0tab\u6548\u679C</li>
<li><code>:disabled</code>, <code>:enabled</code>; <code>:required</code>, <code>:optional</code>; <code>:read-only</code>, <code>:read-write</code>; <code>:in-range</code>, <code>:out-of-range</code>; <code>:valid</code>, <code>:invalid</code>; <code>:default</code>...</li>
</ul>
</li>
<li>\u7ED3\u6784\u6027\u4F2A\u7C7B<ul>
<li><code>:first-child</code>, <code>:last-child</code>; <code>:first-of-type</code>,<code>:last-of-type</code>; <code>:nth-child()</code>, <code>:nth-last-child()</code>; <code>:nth-of-type()</code>, <code>:nth-last-of-type()</code></li>
<li><code>:only-child</code>, <code>:only-of-type</code> \u4EE3\u8868\u5143\u7D20\u7684\u552F\u4E00\u5B50\u5143\u7D20\uFF0C\u4E0E<code>:first-child:last-child</code>\u542B\u4E49\u4E0A\u76F8\u540C </li>
<li><code>:empty</code> \u8868\u793A\u4E0D\u5305\u542B\u5B50\u5143\u7D20\u7684\u5143\u7D20\uFF08\u6CE8\u91CA\u4E0D\u7B97\u5B50\u5143\u7D20\u4F46\u7A7A\u767D\u5B57\u7B26\u7B97\uFF09\uFF0C\u53EF\u4EE5\u7528\u5B83\u6765\u5C55\u793A\u52A0\u8F7D\u524D\u7684\u6837\u5F0F</li>
</ul>
</li>
<li>\u72B6\u6001\u76F8\u5173<ul>
<li><code>:focus</code>, <code>:active</code>, <code>:visited</code></li>
<li><code>:link</code> \u8868\u793A\u672A\u8BBF\u95EE\u8FC7\u7684\u94FE\u63A5\uFF0C\u9075\u5FAA\u4E0B\u9762\u7684\u987A\u5E8F:link \u2014 :visited \u2014 :hover \u2014 :active\uFF0C<code>:any-link</code>\u8868\u793A\u6240\u6709\u5E26\u94FE\u63A5\u7684\u5143\u7D20</li>
<li><code>:focus-within</code>\uFF0C\u5339\u914D\u5305\u542B\u7126\u70B9\u5143\u7D20\u7684\u5143\u7D20</li>
</ul>
</li>
<li><code>:is()</code>\uFF0C\u53C2\u6570\u4E3A\u4E00\u7EC4\u9009\u62E9\u5668\uFF0C\u7136\u540E\u4F1A\u904D\u5386\u8FD9\u4E9B\u9009\u62E9\u5668\u8BA9\u5176\u6BCF\u4E00\u4E2A\u90FD\u751F\u6548\uFF0C\u4E0E\u6B64\u7C7B\u4F3C\u7684\u662F<code>:where()</code>.<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is">mdn</a></li>
<li><code>:target</code> \u5339\u914D\u548C\u5F53\u524D\u8DEF\u7531\u54C8\u5E0C\uFF08#\uFF09\u5BF9\u7684\u4E0A\u7684\u90A3\u4E2A\u5143\u7D20</li>
<li><code>:not()</code> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not">mdn</a>\uFF0C\u53CD\u5411\u5339\u914D\uFF0C\u5339\u914D\u4E0D\u662F\u67D0\u9009\u62E9\u5668\u7684\u5143\u7D20</li>
<li><code>:scope</code> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope">mdn</a> \u8868\u793A\u5F53\u524D\u5143\u7D20\uFF0C\u5728css\u91CC\u76F8\u5F53\u4E8E<code>:root</code>\uFF0C\u5728js\u91CC\u6307\u4EE3\u5F53\u524D\u5143\u7D20\uFF0C\u5982<code>someElement.querySelectorAll(&#39;:scope &gt; div&#39;);</code></li>
<li><code>:has()</code> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has">mdn</a> \u8868\u793A\u5339\u914D\u5F53\u524D\u5143\u7D20\u5E76\u4E14\u6EE1\u8DB3\u7ED9\u5B9A\u7684\u9009\u62E9\u5668\uFF0C\u5982<code>a:has(&gt; img)</code>\u8868\u793A\u53EA\u4F1A\u5339\u914D\u76F4\u63A5\u5305\u542B &lt;img&gt; \u5B50\u5143\u7D20\u7684 &lt;a&gt; \u5143\u7D20</li>
</ul>
`;export{e as default};
