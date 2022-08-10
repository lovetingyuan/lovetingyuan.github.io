const l=`<h2>http \u7F13\u5B58</h2>
<h3>\u5F3A\u7F13\u5B58</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control" target="_blank" rel="noopener noreferrer"><code>cache-control</code></a>
\u5728\u8BF7\u6C42\u4E2D\uFF1A</p>
<ul>
<li>Cache-Control: max-age=<seconds></li>
<li>Cache-Control: max-stale[=<seconds>]</li>
<li>Cache-Control: min-fresh=<seconds></li>
<li>Cache-control: no-cache</li>
<li>Cache-control: no-store</li>
<li>Cache-control: no-transform</li>
<li>Cache-control: only-if-cached</li>
</ul>
<p>\u5728\u54CD\u5E94\u4E2D:</p>
<ul>
<li>Cache-control: must-revalidate
\u672C\u5730\u526F\u672C\u8FC7\u671F\u524D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u526F\u672C\uFF1B\u672C\u5730\u526F\u672C\u4E00\u65E6\u8FC7\u671F\uFF0C\u5FC5\u987B\u53BB\u6E90\u670D\u52A1\u5668\u8FDB\u884C\u6709\u6548\u6027\u6821\u9A8C\u3002</li>
<li>Cache-control: no-cache
\u4E0D\u7BA1\u672C\u5730\u526F\u672C\u662F\u5426\u8FC7\u671F\uFF0C\u4F7F\u7528\u8D44\u6E90\u526F\u672C\u524D\uFF0C\u4E00\u5B9A\u8981\u5230\u6E90\u670D\u52A1\u5668\u8FDB\u884C\u526F\u672C\u6709\u6548\u6027\u6821\u9A8C\u3002\u76F8\u5F53\u4E8E<code>max-age=0, must-revalidate</code></li>
<li>Cache-control: no-store</li>
<li>Cache-control: no-transform</li>
<li>Cache-control: public</li>
<li>Cache-control: private</li>
<li>Cache-control: proxy-revalidate</li>
<li>Cache-Control: max-age=<seconds></li>
<li>Cache-control: s-maxage=<seconds></li>
</ul>
<p>\u975E\u6807\u51C6\u5C5E\u6027\uFF1A</p>
<ul>
<li>Cache-control: immutable</li>
<li>Cache-control: stale-while-revalidate=<seconds></li>
<li>Cache-control: stale-if-error=<seconds></li>
</ul>
`;export{l as default};
