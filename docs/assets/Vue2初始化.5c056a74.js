var e=`<h2>Vue \u7684\u521D\u59CB\u5316\u8FC7\u7A0B</h2>
<p>Vue \u7684\u5165\u53E3\u5728<code>src/core/instance/index.js</code>\uFF0C\u9996\u5148\u662F\u8BBE\u7F6E\u4E00\u4E9B\u5168\u5C40 API\uFF0C\u5982<code>set</code>, <code>delete</code>, <code>nextTick</code>, <code>observable</code>, <code>use</code>, <code>mixin</code>, <code>component</code>, <code>directive</code>, <code>extend</code>\u7B49\uFF0C\u4EE5\u53CA\u6CE8\u518C\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4E4B\u540E\u5C31\u662F\u4ECE\u6839\u7EC4\u4EF6\u5F00\u59CB\uFF0C\u89E3\u6790\u7EC4\u4EF6\u9009\u9879\uFF0C\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u586B\u5145\u5404\u79CD vm \u5C5E\u6027\u65B9\u6CD5\uFF0C\u8C03\u7528 render \u8FDB\u884C\u6E32\u67D3\u3002</p>
<ul>
<li>\u5728\u539F\u578B\u4E0A\u8BBE\u7F6E<code>_init</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8D1F\u8D23\u751F\u6210 vm \u5E76\u5BF9 vm \u8FDB\u884C\u5904\u7406\uFF1A
<ul>
<li>\u6807\u51C6\u5316\u7EC4\u4EF6\u9009\u9879\u5E76\u5408\u5E76\u751F\u6210<code>$options</code></li>
<li>\u8BBE\u7F6E<code>$parent</code>, <code>$children</code>\u4EE5\u53CA\u4E00\u4E9B\u751F\u547D\u5468\u671F\u72B6\u6001\u5982<code>$isMounted</code>, <code>$isDestroyed</code>\u7B49</li>
<li>\u66F4\u65B0<code>$listeners</code>\u5230\u7EC4\u4EF6\u4E0A</li>
<li>\u8BBE\u7F6E\u6E32\u67D3\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u5982<code>$slots</code>, <code>$attrs</code>, <code>$listeners</code>, <code>$vnode</code>, <code>$createElement</code>\u7B49</li>
<li>\u8C03\u7528<code>beforeCreate</code>\u94A9\u5B50</li>
<li>\u5904\u7406<code>inject</code>\u9009\u9879</li>
<li>\u5904\u7406<code>props</code>, <code>data</code>, <code>computed</code>, <code>watch</code>, <code>methods</code></li>
<li>\u5904\u7406<code>provide</code>\u9009\u9879</li>
<li>\u8C03\u7528<code>created</code>\u94A9\u5B50</li>
<li>\u5982\u679C\u6709<code>el</code>\u9009\u9879\u5219\u6267\u884C<code>$mount</code>\u65B9\u6CD5\uFF08\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u521B\u5EFA\u65B0\u7EC4\u4EF6\u4E5F\u662F\u6267\u884C\u8FD9\u4E2A\uFF09\uFF0C\u6838\u5FC3\u5C31\u662F<code>mountComponent</code>
<ul>
<li>\u6267\u884C<code>beforeMount</code></li>
<li>\u6267\u884C<code>mountComponent:</code> <code>vm._update(vm._render(), hydrating)</code></li>
<li>\u5EFA\u7ACB\u8BE5\u8868\u8FBE\u5F0F\u548C vm \u4E4B\u95F4\u7684 watcher\uFF0C\u6CE8\u5165<code>beforeUpdate</code>\u94A9\u5B50</li>
<li>\u6267\u884C<code>mounted</code>\u94A9\u5B50</li>
</ul>
</li>
</ul>
</li>
<li>\u5728\u539F\u578B\u4E0A\u8BBE\u7F6E state \u76F8\u5173\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u5305\u62EC<code>$set</code>, <code>$delete</code>, <code>$data</code>, <code>$props</code>, <code>$watch</code>\u7B49</li>
<li>\u5728\u539F\u578B\u4E0A\u8BBE\u7F6E\u4E8B\u4EF6\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C\u5305\u62EC<code>$on</code>, <code>$off</code>, <code>$emit</code>, <code>$once</code>\u7B49</li>
<li>\u5728\u539F\u578B\u4E0A\u8BBE\u7F6E\u751F\u547D\u5468\u671F\u76F8\u5173\u7684\u65B9\u6CD5\uFF1A
<ul>
<li>\u5C06\u771F\u6B63\u7684<code>_update</code>\u65B9\u6CD5\u8BBE\u7F6E\u5230\u539F\u578B\u4E0A\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u771F\u6B63\u8D1F\u8D23\u6267\u884C\u521D\u59CB\u6E32\u67D3\u6216\u8005\u66F4\u65B0\u6E32\u67D3</li>
<li>\u8BBE\u7F6E<code>$forceUpdate</code>, <code>$destroy</code>\u7B49\u751F\u547D\u5468\u671F api</li>
</ul>
</li>
<li>\u5728\u539F\u578B\u4E0A\u8BBE\u7F6E\u6E32\u67D3\u76F8\u5173\u7684\u65B9\u6CD5\uFF1A
<ul>
<li>\u8BBE\u7F6E\u6E32\u67D3\u51FD\u6570\u7528\u5230\u7684\u4E00\u4E9B\u6E32\u67D3\u8F85\u52A9\u65B9\u6CD5\uFF0C\u5982 renderList, renderSlot \u7B49\uFF0C\u5F53\u7136\u5B83\u4EEC\u90FD\u7528\u7B80\u5199\u7684\u5F62\u5F0F\u6302\u8F7D\u5230\u539F\u578B\u4E0A\u4E86</li>
<li>\u5C06\u771F\u6B63\u7684<code>_render</code>\u65B9\u6CD5\u8BBE\u7F6E\u5230\u539F\u578B\u4E0A\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7528\u6765\u6267\u884C\u7EC4\u4EF6\u7684 render \u65B9\u6CD5\u4EA7\u751F\u65B0\u7684 vnode</li>
<li>\u8BBE\u7F6E<code>$nextTick</code></li>
</ul>
</li>
</ul>
<p>Vue \u672C\u8EAB\u652F\u6301 web \u548C weex \u4E24\u79CD\u5E73\u53F0\uFF0C\u6240\u4EE5\u4E0D\u540C\u5E73\u53F0\u7684\u5165\u53E3\u4E5F\u4F1A\u5728 Vue \u4E0A\u505A\u4E00\u4E9B\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u5305\u62EC\u4E00\u4E9B\u5185\u7F6E\u7684\u7EC4\u4EF6\u548C\u5E73\u53F0\u7279\u5B9A\u7684\u914D\u7F6E\u3002</p>
<hr>
<ul>
<li>
<p>\u5728\u539F\u578B\u6302\u8F7D\u4E00\u4E9B\u65B9\u6CD5\u548C\u5C5E\u6027</p>
<ul>
<li><code>_init</code>\uFF08vue \u521D\u59CB\u5316\u5165\u53E3\u65B9\u6CD5\uFF09</li>
<li><code>$data</code>, <code>$props</code>, <code>$set</code>, <code>$delete</code>, <code>$watch</code></li>
<li><code>$on</code>, <code>$once</code>, <code>$off</code>, <code>$emit</code></li>
<li><code>_update</code>, <code>$forceUpdate</code>, <code>$destroy</code></li>
<li><code>_render</code>, render helpers\uFF0C<code>$nextTick</code></li>
</ul>
</li>
<li>
<p>\u8C03\u7528 <code>_init</code></p>
<ul>
<li>\u521B\u5EFA <code>vm</code></li>
<li>resolve and merge options -&gt; <code>$options</code></li>
<li><code>$parent</code>, <code>$children</code>, <code>$root</code>, <code>$refs</code></li>
<li>update component events</li>
<li><code>_vnode</code>, <code>$slots</code>, <code>$scopedSlots</code>, <code>$createElement</code>, <code>$attrs</code>, <code>$listeners</code></li>
<li>hook <code>beforeCreate</code></li>
<li>\u5411 vm \u4E2D\u6DFB\u52A0\uFF1A<code>inject</code>, <code>props</code>, <code>methods</code>, <code>data</code>, <code>computed</code>, <code>watch</code>, <code>provide</code></li>
<li>hook <code>created</code></li>
<li>\u8C03\u7528 <code>$mount</code>\uFF0C\u4E5F\u5C31\u662F<code>mountComponent</code></li>
<li>hook <code>beforeMount</code></li>
<li>\u521B\u5EFA Render-Watcher<pre><code class="language-js">new Watcher(
  vm,
  () =&gt; {
    vm._update(vm._render(), hydrating)
  },
  noop,
  {
    before() {
      callHook(vm, 'beforeUpdate')
    },
  },
  true /* isRenderWatcher */
)
</code></pre>
</li>
<li>hook <code>mounted</code></li>
</ul>
</li>
</ul>
`;export{e as default};
