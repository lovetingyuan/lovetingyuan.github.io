import { o as openBlock, c as createElementBlock, p as createStaticVNode } from "./index-e93e62f4.js";
const _hoisted_1 = { class: "markdown-body" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("<h2>IEEE-745 标准下浮点数精度丢失问题</h2><p>JavaScript 中的数字类型只有 Number 一种，Number 类型采用 IEEE754 标准中的 “双精度浮点数” 来表示一个数字，不区分整数和浮点数。 几乎所有的编程语言浮点数都是都采用 IEEE 浮点数算术标准。 单精度 32 位浮点数:</p><ul><li>1bit 符号</li><li>8bit 指数部分</li><li>23bit 尾数</li></ul><p>双精度浮点数采用 64 位存储：</p><ul><li>1bit 符号</li><li>11bit 指数部分</li><li>52bit 尾数</li></ul>", 5);
const _hoisted_7 = [
  _hoisted_2
];
const _sfc_main = {
  __name: "浮点数精度问题",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_7);
    };
  }
};
export {
  _sfc_main as default
};
