import { o as openBlock, c as createElementBlock, p as createStaticVNode } from "./index-30d4195a.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("<h2>跨域</h2><h4>同源</h4><p>协议+域名+端口 一致表示同源</p><h4>解决办法</h4><ul><li>CORS</li><li>jsonp</li><li>postMessage</li><li>WebSocket</li><li>服务器代理</li><li>iframe + window.name/location.hash/document.domain</li></ul><h3>CORS</h3><p>简单请求：</p><ul><li>请求方法：GET, HEAD, POST</li><li>content-type 只能是： <ul><li>text/plain</li><li>multipart/form-data</li><li>application/x-www-form-urlencoded</li></ul></li><li>header 只能包含 <ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Content-Type</li><li>DPR</li><li>Downlink</li><li>Save-Data</li><li>Viewport-Width</li><li>Width</li></ul></li></ul><blockquote><p>区分简单请求和复杂请求是为了兼容表单提交请求（form），因为历史上表单一直可以发出跨域请求。AJAX 的跨域设计就是，只要表单可以发，AJAX 就可以直接发。</p></blockquote><p>复杂请求</p><p>复杂请求在发出之前会发送<code>OPTIONS</code>预检请求，通过之后才会发送复杂请求</p><ul><li>Access-Control-Request-Method</li><li>Access-Control-Request-Headers</li></ul><p>复杂请求相关头部</p><ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Credentials</li><li>Access-Control-Expose-Headers // 客户端能获取到的 header</li><li>Access-Control-Allow-Methods</li><li>Access-Control-Max-Age // 预检请求的缓存有效期</li></ul>", 14);
const _hoisted_16 = [
  _hoisted_2
];
const _sfc_main = {
  __name: "跨域",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_16);
    };
  }
};
export {
  _sfc_main as default
};
