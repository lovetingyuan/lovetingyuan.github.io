import { o as openBlock, c as createElementBlock, a as createBaseVNode } from "./index-e93e62f4.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "设计模式", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "工厂模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "单例模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "观察者模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "订阅发布模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "装饰器模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "适配器模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "策略模式"),
  /* @__PURE__ */ createBaseVNode("li", null, "责任链模式")
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _sfc_main = {
  __name: "设计模式",
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
