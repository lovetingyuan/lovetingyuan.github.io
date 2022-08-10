const t=`<h3>\u65B9\u6CD5\u4E00\uFF1A\u5C06footer\u7EDD\u5BF9\u5B9A\u4F4D\u5230\u5E95\u90E8</h3>
<pre><code class="language-html">&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;content&quot;&gt;&lt;!-- \u9875\u9762\u4E3B\u4F53\u5185\u5BB9\u533A\u57DF --&gt;&lt;/div&gt;
  &lt;div class=&quot;footer&quot;&gt;&lt;!-- \u9700\u8981\u505A\u5230 Sticky Footer \u6548\u679C\u7684\u9875\u811A --&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
html, body {
  height: 100%;
}
.wrapper {
  position: relative;
  min-height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 50px;
}
&lt;/style&gt;

</code></pre>
<h3>\u65B9\u6CD5\u4E8C\uFF1A\u4E3Afooter\u8BBE\u7F6E\u8D1Fmargin-top</h3>
<pre><code class="language-html">&lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
&lt;footer class=&quot;footer&quot;&gt;&lt;/footer&gt;

&lt;style&gt;
html, body {
  height: 100%;
}
.content {
  min-height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
}

.footer {
  height: 50px;
  /* \u4E0B\u9762\u7684margin-top\u4E5F\u53EF\u4EE5\u8F6C\u4E3A\u5BF9.content \u8BBE\u7F6E margin-bottom: -50px; */
  margin-top: -50px;
}
&lt;/style&gt;
</code></pre>
`;export{t as default};
