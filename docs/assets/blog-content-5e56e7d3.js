import { o as openBlock, c as createElementBlock, a as createBaseVNode, d as defineComponent, u as useBlogs, b as useColorMode, w as watchEffect, r as resolveComponent, e as createVNode, f as withCtx, g as unref, i as createCommentVNode, j as createBlock, k as resolveDynamicComponent, l as createTextVNode, t as toDisplayString, m as _sfc_main$1, _ as __vitePreload, n as useStyleTag } from "./index-30d4195a.js";
const _hoisted_1$1 = {
  class: "g-un-icons",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V11.1l-8 7.975V22H6Zm8.5 0q-.2 0-.35-.15T14 21.5v-1.2q0-.2.088-.4t.212-.325l4.85-4.875l2.15 2.1l-4.875 4.9q-.125.15-.325.225t-.4.075h-1.2Zm7.525-5.9L19.9 13.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.713t-.275.687l-.7.7ZM14 9h4l-5-5v4q0 .425.288.713T14 9Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0 = { name: "material-symbols-edit-document-rounded", render };
const _hoisted_1 = { class: "float-right ml-3 text-base" };
const _hoisted_2 = ["href"];
const _hoisted_3 = {
  key: 0,
  class: "pb-[10vh] pt-[15vh]"
};
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 2 };
const _hoisted_6 = { key: 3 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog-content",
  setup(__props) {
    const { articleCmp, blogStatus, cate, name } = useBlogs();
    const colorMode = useColorMode();
    watchEffect(() => {
      const githubMdCss = colorMode.value === "dark" ? __vitePreload(() => import("./github-markdown-dark-d94eba32.js"), true ? [] : void 0) : __vitePreload(() => import("./github-markdown-light-dc4a4290.js"), true ? [] : void 0);
      githubMdCss.then(({ default: css }) => {
        useStyleTag(css, { id: "github-markdown-css" });
      });
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_icon_material_symbols_edit_document_rounded = __unplugin_components_0;
      return openBlock(), createElementBlock("section", null, [
        createBaseVNode("span", _hoisted_1, [
          createVNode(_component_router_link, {
            to: `/blog/${unref(cate)}`
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(cate)), 1)
            ]),
            _: 1
          }, 8, ["to"]),
          createBaseVNode("a", {
            class: "ml-3",
            title: "编辑",
            target: "_blank",
            rel: "noopener noreferrer",
            href: `https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/blogs/${unref(cate)}/${unref(name)}.md`
          }, [
            createVNode(_component_icon_material_symbols_edit_document_rounded)
          ], 8, _hoisted_2)
        ]),
        unref(blogStatus) === "loading" ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_sfc_main$1, { defer: 600 })
        ])) : createCommentVNode("", true),
        unref(blogStatus) === "failed" ? (openBlock(), createElementBlock("div", _hoisted_4, "加载失败，请重试...")) : createCommentVNode("", true),
        unref(blogStatus) === "notFound" ? (openBlock(), createElementBlock("div", _hoisted_5, "当前文章不存在")) : createCommentVNode("", true),
        unref(blogStatus) === "loaded" ? (openBlock(), createElementBlock("article", _hoisted_6, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(articleCmp))))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const blogContent_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
