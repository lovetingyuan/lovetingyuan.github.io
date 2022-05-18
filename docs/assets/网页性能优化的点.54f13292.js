var e=`<ul>
<li>
<p>\u4EE3\u7801</p>
<ul>
<li>
<p>js\uFF0Ccss\uFF0Chtml \u538B\u7F29\uFF0C\u5206\u5305</p>
</li>
<li>
<p>\u4F7F\u7528 cdn \u6765\u670D\u52A1\u9759\u6001\u8D44\u6E90</p>
</li>
<li>
<p>\u5C3D\u53EF\u80FD\u5C06\u8F83\u5C0F\u7684\u8D44\u6E90\u5185\u8054</p>
</li>
<li>
<p>\u6CE8\u610F\u8BF7\u6C42\u6570\u91CF\uFF0C\u5C3D\u53EF\u80FD\u5728\u8BF7\u6C42\u6570\u91CF\u548C\u8D44\u6E90\u5927\u5C0F\u5BFB\u6C42\u5E73\u8861\uFF0C\u5982\u5C3D\u91CF\u51CF\u5C11\u8BF7\u6C42\u6570\u4F46\u662F\u4E5F\u8981<strong>\u907F\u514D\u5355\u4E00 js \u8FC7\u5927</strong></p>
</li>
<li>
<p>\u57DF\u540D\u5206\u7247\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u57DF\u540D\u4E00\u822C\u6700\u591A\u53EA\u80FD\u6709 6 \u4E2A tcp \u8FDE\u63A5</p>
</li>
<li>
<p>\u4E0D\u5728\u9996\u5C4F\u7684\u8D44\u6E90\u5C3D\u91CF\u5F02\u6B65\u52A0\u8F7D\uFF0C\u5305\u62EC\u5F02\u6B65\u8DEF\u7531\uFF0C\u590D\u6742\u7EC4\u4EF6\u7684\u5F02\u6B65\u5316\uFF0C\u7B2C\u4E09\u65B9\u5E93\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u56FE\u7247\u7684 <code>loading=&quot;lazy&quot;</code> \u7B49</p>
</li>
<li>
<p>\u56FE\u7247\u538B\u7F29\uFF0C\u5C0F\u56FE\u7247\u5185\u8054\u6216\u8005\u96EA\u78A7\u56FE\uFF1B\u56FE\u6807\u5C3D\u91CF\u4F7F\u7528 svg \u6216 css \u6280\u672F\u6765\u5B9E\u73B0\uFF1B\u5982\u679C\u56FE\u7247\u4F53\u79EF\u8FC7\u5927\u63A8\u8350\u4F7F\u7528<a href="https://akarin.dev/2021/11/04/progressive-image-loading/" target="_blank" rel="noopener noreferrer">\u6E10\u8FDB\u5F0F\u56FE\u7247\u52A0\u8F7D</a>\uFF1B\u4F7F\u7528\u54CD\u5E94\u5F0F\u56FE\u7247\u6280\u672F</p>
<pre><code class="language-html">&lt;img
  srcset=&quot;elva-fairy-320w.jpg 320w, elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w&quot;
  sizes=&quot;(max-width: 320px) 280px, (max-width: 480px) 440px, 800px&quot;
  src=&quot;elva-fairy-800w.jpg&quot;
  alt=&quot;Elva dressed as a fairy&quot;
/&gt;
&lt;picture&gt;
  &lt;source type=&quot;image/svg+xml&quot; srcset=&quot;pyramid.svg&quot; /&gt;
  &lt;source type=&quot;image/webp&quot; srcset=&quot;pyramid.webp&quot; /&gt;
  &lt;img src=&quot;pyramid.png&quot; alt=&quot;regular pyramid built from four equilateral triangles&quot; /&gt;
&lt;/picture&gt;
&lt;style&gt;
  .box {
    background-image: url('large-balloons.jpg');
    background-image: image-set('large-balloons.avif' type('image/avif'), 'large-balloons.jpg' type('image/jpeg'));
  }
  .box {
    background-image: image-set(url('small-balloons.jpg') 1x, url('large-balloons.jpg') 2x);
  }
&lt;/style&gt;
</code></pre>
</li>
<li>
<p>\u4F7F\u7528<a href="https://web.dev/priority-hints/" target="_blank" rel="noopener noreferrer"><code>fetchpriority</code></a>\u5C5E\u6027\u6765\u624B\u52A8\u6307\u5B9A\u8D44\u6E90\u7684\u52A0\u8F7D\u4F18\u5148\u7EA7</p>
</li>
<li>
<p>\u5B57\u4F53\u6587\u4EF6\u538B\u7F29\uFF0Ctree-shaking\uFF08\u53BB\u6389\u7528\u4E0D\u4E0A\u7684\u5B57\u7B26\u96C6\uFF09\uFF0C\u91C7\u7528\u81EA\u5B9A\u4E49\u5B57\u4F53<code>@font-face</code>\u4F18\u5148\u4F7F\u7528\u6700\u65B0\u683C\u5F0F\u5982<code>woff2</code></p>
</li>
</ul>
</li>
<li>
<h2>\u9884\u8BF7\u6C42</h2>
<ul>
<li>
<p><code>dns-prefetch</code>, <code>preconnect</code>(preconnect \u4F1A\u5EFA\u7ACB tcp \u8FDE\u63A5\uFF0C\u5EFA\u8BAE\u53EA\u5BF9\u91CD\u8981\u7684\u7F51\u5740\u4F7F\u7528)</p>
</li>
<li>
<p><code>preload</code>, <code>prefetch</code>\uFF0C preload \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u5E76\u4E14\u5FC5\u987B\u662F\u5F53\u524D\u9875\u9762\u5185\u4E00\u5B9A\u4F1A\u4F7F\u7528\u4F46\u662F\u6D4F\u89C8\u5668\u65E0\u6CD5\u7B2C\u4E00\u65F6\u95F4\u63A2\u6D4B\u5230\u7684\u8D44\u6E90</p>
<pre><code class="language-html">&lt;link rel=&quot;preload&quot; as=&quot;style&quot; href=&quot;asyncstyle.css&quot; onload=&quot;this.rel='stylesheet'&quot; /&gt;
&lt;link rel=&quot;preload&quot; href=&quot;font.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin /&gt;
&lt;link rel=&quot;preload&quot; href=&quot;cat.png&quot; as=&quot;image&quot; imagesrcset=&quot;cat.png 1x, cat-2x.png 2x&quot; /&gt;
&lt;link rel=&quot;modulepreload&quot; href=&quot;/modern.js&quot; /&gt;
&lt;link rel=&quot;prefetch&quot; href=&quot;next-route.js&quot; as=&quot;js&quot; /&gt;
&lt;link rel=&quot;prefetch&quot; href=&quot;/articles/&quot; as=&quot;document&quot; /&gt;
</code></pre>
</li>
<li>
<p><code>prerender</code>(\u5EFA\u8BAE\u53EA\u5BF9\u91CD\u8981\u9AD8\u9891\u7684\u7AD9\u70B9\u4F7F\u7528)</p>
</li>
<li>
<p>\u57FA\u4E8E\u7528\u6237\u884C\u4E3A\u548C\u4F7F\u7528\u4E60\u60EF\u8FDB\u884C\u4E2A\u6027\u5316\u7684\u9884\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/GoogleChromeLabs/quicklink" target="_blank" rel="noopener noreferrer">quicklink</a>,<a href="https://github.com/guess-js/guess" target="_blank" rel="noopener noreferrer">guessjs</a></p>
</li>
</ul>
</li>
<li>
<p>css</p>
<ul>
<li>\u538B\u7F29</li>
<li>\u53BB\u9664\u6389\u672A\u4F7F\u7528\u7684\u89C4\u5219\uFF08\u8FD9\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u80FD\u9700\u8981\u4ED8\u51FA\u4E00\u4E9B\u989D\u5916\u6210\u672C\u548C\u627F\u62C5\u4E00\u5B9A\u7684\u98CE\u9669\uFF09</li>
<li>\u5185\u8054\uFF0C\u5305\u62EC\u80CC\u666F\u56FE\u7B49\u7684\u5185\u8054</li>
<li>\u63D0\u53D6 critical css \u5E76\u5185\u8054\uFF0C\u5982 <a href="https://github.com/addyosmani/critical" target="_blank" rel="noopener noreferrer">critical</a></li>
<li>\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u5982 <a href="https://github.com/filamentgroup/loadCSS" target="_blank" rel="noopener noreferrer">loadCSS</a></li>
</ul>
</li>
<li>
<p>\u5DE5\u5177</p>
<ul>
<li>chrome \u63A7\u5236\u53F0\u9762\u677F\uFF1A<code>Lighthouse</code>, <code>Coverage</code>, <code>Performance</code>, <code>Rendering</code></li>
<li><a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">https://pagespeed.web.dev/</a></li>
<li><a href="https://frontendchecklist.io/" target="_blank" rel="noopener noreferrer">https://frontendchecklist.io/</a></li>
</ul>
</li>
<li>
<p>\u7F51\u7EDC</p>
<ul>
<li>\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u5B9A\u5411</li>
<li>\u542F\u7528\u538B\u7F29\uFF0C<code>gzip</code>, <code>br</code></li>
<li>\u4F7F\u7528\u65B0\u7684\u7F51\u7EDC\u534F\u8BAE\uFF0C\u5982 TLS 1.3, HTTP/2, HTTP/3</li>
<li>content \u54C8\u5E0C + http \u5F3A\u7F13\u5B58</li>
<li>\u53EF\u4EE5\u4F7F\u7528 service worker \u66F4\u7075\u6D3B\u7684\u63A7\u5236\u8D44\u6E90\u52A0\u8F7D\u548C\u7F13\u5B58\u673A\u5236</li>
</ul>
</li>
<li>
<p>\u8FD0\u884C</p>
<ul>
<li>\u4F7F\u7528\u6761\u4EF6 polyfill\uFF0C\u501F\u52A9\u4E8E <code>document.write</code>\u7B49\u6280\u672F</li>
<li>\u4F7F\u7528\u73B0\u4EE3\u683C\u5F0F\u7684\u4EE3\u7801\uFF0C\u501F\u52A9\u4E8E <code>type=&quot;module&quot;</code>\uFF0C \u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7<a href="https://jasonformat.com/modern-script-loading/" target="_blank" rel="noopener noreferrer">\u6587\u7AE0</a></li>
<li>\u4F7F\u7528\u73B0\u4EE3\u8BED\u6CD5\u548C API\uFF0C\u4EE5\u5B9E\u73B0\u6447\u6811\u4F18\u5316\u4EE5\u53CA\u79FB\u9664\u4E0D\u5FC5\u8981\u7684 polyfill\uFF08\u5C3D\u5728\u5FC5\u8981\u7684\u65F6\u5019\u8FDB\u884C\u4F18\u96C5\u964D\u7EA7\uFF09</li>
<li>\u957F\u4EFB\u52A1\uFF08\u8017\u65F6\u8D85\u8FC7 50ms\uFF09\u8003\u8651\u4F7F\u7528<code>WebWorker</code>\u6216\u8005\u5229\u7528<code>rAF</code>\u505A\u65F6\u95F4\u5206\u7247\u6765\u4F18\u5316</li>
<li>\u6CE8\u610F\u8FD0\u7528\u8282\u6D41\u548C\u9632\u6296</li>
<li>\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\u5C3D\u91CF\u4F7F\u7528 css \u4EE3\u66FF\u4E00\u4E9B js \u5B9E\u73B0\u7684\u6548\u679C</li>
<li>\u501F\u52A9\u4E8E <code>navigator.connection</code> \u5728\u7F51\u7EDC\u72B6\u51B5\u4E0D\u597D\u65F6\u653E\u5F03\u4E00\u4E9B\u4E0D\u91CD\u8981\u7684\u4F53\u9A8C</li>
<li>\u6CE8\u91CD html \u7684\u8BED\u4E49\u5316\uFF0C\u907F\u514D\u8FC7\u591A\u7684\u5D4C\u5957\u548C\u8282\u70B9\u6570\u91CF</li>
<li>\u52A8\u6001\u751F\u6210 iframe\uFF0C\u56E0\u4E3A iframe \u4F1A\u963B\u585E onload \u4E8B\u4EF6</li>
<li>\u907F\u514D\u8FC7\u6DF1\u7684 css \u9009\u62E9\u5668\u5D4C\u5957\uFF0C\u4E0D\u5229\u4E8E\u89E3\u6790\u4E5F\u4E0D\u5229\u4E8E\u7EF4\u62A4 \u5C11\u4F7F\u7528\u901A\u914D\u7B26\uFF0C\u5C5E\u6027\uFF0C\u5B50\u9009\u62E9\u5668\u7B49</li>
<li>css \u6E32\u67D3\u4F18\u5316\uFF0C\u5982 <code>will-change</code>, <code>contain</code>, GPU \u786C\u4EF6\u52A0\u901F\uFF0C\u5408\u6210\u5C42\u63D0\u5347(\u6CE8\u610F\u907F\u514D\u9690\u5F0F\u63D0\u5347)</li>
<li>\u907F\u514D\u9759\u6001\u8D44\u6E90\u57DF\u643A\u5E26 cookie</li>
<li>\u9884\u6E32\u67D3</li>
<li>\u670D\u52A1\u7AEF\u6E32\u67D3</li>
</ul>
</li>
</ul>
<p>\u53C2\u8003\uFF1A <a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer">https://web.dev/fast/</a></p>
`;export{e as default};
