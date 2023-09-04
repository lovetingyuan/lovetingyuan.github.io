import { o as openBlock, c as createElementBlock, p as createStaticVNode } from "./index-e93e62f4.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2>http 缓存</h2><h3>强缓存</h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control" target="_blank" rel="noopener"><code>cache-control</code></a></p><p>在请求中：</p><ul><li>Cache-Control: <code>max-age=&lt;seconds&gt;</code></li><li>Cache-Control: <code>max-stale[=&lt;seconds&gt;]</code></li><li>Cache-Control: <code>min-fresh=&lt;seconds&gt;</code></li><li>Cache-control: <code>no-cache</code></li><li>Cache-control: <code>no-store</code></li><li>Cache-control: <code>no-transform</code></li><li>Cache-control: <code>only-if-cached</code></li></ul><p>在响应中:</p><ul><li>Cache-control: must-revalidate 本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。</li><li>Cache-control: no-cache 不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验。相当于<code>max-age=0, must-revalidate</code></li><li>Cache-control: <code>no-store</code></li><li>Cache-control: <code>no-transform</code></li><li>Cache-control: <code>public</code></li><li>Cache-control: <code>private</code></li><li>Cache-control: <code>proxy-revalidate</code></li><li>Cache-Control: <code>max-age=&lt;seconds&gt;</code></li><li>Cache-control: <code>s-maxage=&lt;seconds&gt;</code></li></ul><p>非标准属性：</p><ul><li>Cache-control: <code>immutable</code></li><li>Cache-control: <code>stale-while-revalidate=&lt;seconds&gt;</code></li><li>Cache-control: <code>stale-if-error=&lt;seconds&gt;</code></li></ul>', 9);
const _hoisted_11 = [
  _hoisted_2
];
const _sfc_main = {
  __name: "http-cache",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_11);
    };
  }
};
export {
  _sfc_main as default
};
