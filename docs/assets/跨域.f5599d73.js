const l=`<h2>\u8DE8\u57DF</h2>
<h4>\u540C\u6E90</h4>
<p>\u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3 \u4E00\u81F4\u8868\u793A\u540C\u6E90</p>
<h4>\u89E3\u51B3\u529E\u6CD5</h4>
<ul>
<li>CORS</li>
<li>jsonp</li>
<li>postMessage</li>
<li>WebSocket</li>
<li>\u670D\u52A1\u5668\u4EE3\u7406</li>
<li>iframe + <a href="http://window.name/location.hash/document.domain" target="_blank" rel="noopener noreferrer">window.name/location.hash/document.domain</a></li>
</ul>
<h3>CORS</h3>
<p>\u7B80\u5355\u8BF7\u6C42\uFF1A</p>
<ul>
<li>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET, HEAD, POST</li>
<li>content-type \u53EA\u80FD\u662F\uFF1A
<ul>
<li>text/plain</li>
<li>multipart/form-data</li>
<li>application/x-www-form-urlencoded</li>
</ul>
</li>
<li>header \u53EA\u80FD\u5305\u542B
<ul>
<li>Accept</li>
<li>Accept-Language</li>
<li>Content-Language</li>
<li>Content-Type</li>
<li>DPR</li>
<li>Downlink</li>
<li>Save-Data</li>
<li>Viewport-Width</li>
<li>Width</li>
</ul>
</li>
</ul>
<blockquote>
<p>\u533A\u5206\u7B80\u5355\u8BF7\u6C42\u548C\u590D\u6742\u8BF7\u6C42\u662F\u4E3A\u4E86\u517C\u5BB9\u8868\u5355\u63D0\u4EA4\u8BF7\u6C42\uFF08form\uFF09\uFF0C\u56E0\u4E3A\u5386\u53F2\u4E0A\u8868\u5355\u4E00\u76F4\u53EF\u4EE5\u53D1\u51FA\u8DE8\u57DF\u8BF7\u6C42\u3002AJAX \u7684\u8DE8\u57DF\u8BBE\u8BA1\u5C31\u662F\uFF0C\u53EA\u8981\u8868\u5355\u53EF\u4EE5\u53D1\uFF0CAJAX \u5C31\u53EF\u4EE5\u76F4\u63A5\u53D1\u3002</p>
</blockquote>
<p>\u590D\u6742\u8BF7\u6C42</p>
<p>\u590D\u6742\u8BF7\u6C42\u5728\u53D1\u51FA\u4E4B\u524D\u4F1A\u53D1\u9001<code>OPTIONS</code>\u9884\u68C0\u8BF7\u6C42\uFF0C\u901A\u8FC7\u4E4B\u540E\u624D\u4F1A\u53D1\u9001\u590D\u6742\u8BF7\u6C42</p>
<ul>
<li>Access-Control-Request-Method</li>
<li>Access-Control-Request-Headers</li>
</ul>
<p>\u590D\u6742\u8BF7\u6C42\u76F8\u5173\u5934\u90E8</p>
<ul>
<li>Access-Control-Allow-Origin</li>
<li>Access-Control-Allow-Credentials</li>
<li>Access-Control-Expose-Headers // \u5BA2\u6237\u7AEF\u80FD\u83B7\u53D6\u5230\u7684 header</li>
<li>Access-Control-Allow-Methods</li>
<li>Access-Control-Max-Age // \u9884\u68C0\u8BF7\u6C42\u7684\u7F13\u5B58\u6709\u6548\u671F</li>
</ul>
`;export{l as default};
