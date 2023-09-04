import { o as openBlock, c as createElementBlock, a as createBaseVNode } from "./index-30d4195a.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", null, "css 实现轮播图", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "../../demo/css-slider.html" }, "demo")
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _sfc_main = {
  __name: "css效果",
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
