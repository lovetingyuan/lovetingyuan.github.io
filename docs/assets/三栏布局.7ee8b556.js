const t=`<h3>\u4E09\u680F\u5E03\u5C40</h3>
<pre><code class="language-html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
  .left {
    float: left;
    height: 200px;
    width: 100px;
    background-color: red;
  }
  .right {
    width: 200px;
    height: 200px;
    background-color: blue;
    float: right;
  }
  .main {
    margin-left: 120px;
    margin-right: 220px;
    height: 200px;
    background-color: green;
  }
&lt;/style&gt;
&lt;!-- \u6216\u8005\u5229\u7528bfc --&gt;
&lt;style&gt;
  .left {
    float: left;
    height: 200px;
    width: 100px;
    margin-right: 20px;
    background-color: red;
  }
  .right {
    width: 200px;
    height: 200px;
    float: right;
    margin-left: 20px;
    background-color: blue;
  }
  .main {
    height: 200px;
    overflow: hidden;
    background-color: green;
  }
&lt;/style&gt;
</code></pre>
<h4>\u53CC\u98DE\u7FFC</h4>
<pre><code class="language-html">&lt;div class=&quot;content&quot;&gt;
  &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;style&gt;
  .content {
    float: left;
    width: 100%;
  }
  .main {
    height: 200px;
    margin-left: 110px;
    margin-right: 220px;
    background-color: green;
  }
  .left {
    float: left;
    height: 200px;
    width: 100px;
    margin-left: -100%;
    background-color: red;
  }
  .right {
    width: 200px;
    height: 200px;
    float: right;
    margin-left: -200px;
    background-color: blue;
  }
&lt;/style&gt;
</code></pre>
<h4>\u5723\u676F\u5E03\u5C40</h4>
<pre><code class="language-html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
  .container {
    margin-left: 120px;
    margin-right: 220px;
  }
  .main {
    float: left;
    width: 100%;
    height: 300px;
    background-color: red;
  }
  .left {
    float: left;
    width: 100px;
    height: 300px;
    margin-left: -100%;
    position: relative;
    left: -120px;
    background-color: blue;
  }
  .right {
    float: left;
    width: 200px;
    height: 300px;
    margin-left: -200px;
    position: relative;
    right: -220px;
    background-color: green;
  }
&lt;/style&gt;
</code></pre>
`;export{t as default};
