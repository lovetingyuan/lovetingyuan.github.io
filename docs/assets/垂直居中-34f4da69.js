import { o as openBlock, c as createElementBlock, p as createStaticVNode } from "./index-30d4195a.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("<h3>垂直居中的方式</h3><ul><li>单行元素可以设置 <code>line-height</code></li><li>使用<code>vertical-align: middle</code>同时配合添加伪元素，让伪元素撑起高度</li><li>容器高度和自身高度确定的话，可以使用相对定位，<code>calc</code>，<code>translate</code>，负 margin 等方式实现</li><li>绝对定位配合四个方向距离为 0 以及<code>margin: auto</code></li><li>flex</li></ul>", 2);
const _hoisted_4 = [
  _hoisted_2
];
const _sfc_main = {
  __name: "垂直居中",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4);
    };
  }
};
export {
  _sfc_main as default
};
