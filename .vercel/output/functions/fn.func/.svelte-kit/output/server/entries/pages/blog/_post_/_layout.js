import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
const load = async ({ fetch, params }) => {
  const responses = await fetch(`/api/posts`);
  const posts = await responses.json();
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../posts/svelte_component_init.md": () => import("../../../../chunks/svelte_component_init.js"), "../posts/svelte_each.md": () => import("../../../../chunks/svelte_each.js"), "../posts/svelte_import_data.md": () => import("../../../../chunks/svelte_import_data.js") }), `../posts/${params.post}.md`);
  const { title, date, titleSection, categories } = post.metadata;
  post.default;
  return {
    posts,
    title,
    titleSection,
    categories
  };
};
export {
  load
};
