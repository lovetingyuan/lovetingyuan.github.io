import { o as openBlock, c as createElementBlock, a as createBaseVNode } from "./index-e93e62f4.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", null, "Hybrid 性能优化", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "离线包缓存 + bsdiff/bspatch 增量更新（完整性校验）")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "首屏直出（可以直出到离线包中，但要跟用户 ID）")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "预加载，包括 Webview 预加载和复用，接口或资源可通过 native 预加载等")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "客户端渲染，可以借助 webview 将渲染好的 html 缓存起来，下次可以直接展示")
  ])
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _sfc_main = {
  __name: "Hybrid性能优化",
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
