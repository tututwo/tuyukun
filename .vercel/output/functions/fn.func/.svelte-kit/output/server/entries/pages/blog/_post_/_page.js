import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../posts/svelte_component_init.md": () => import("../../../../chunks/svelte_component_init.js"), "../posts/svelte_each.md": () => import("../../../../chunks/svelte_each.js"), "../posts/svelte_import_data.md": () => import("../../../../chunks/svelte_import_data.js") }), `../posts/${params.post}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};
