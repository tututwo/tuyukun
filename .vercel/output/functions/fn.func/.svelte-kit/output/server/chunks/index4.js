//!  grab all our Markdown files and return their data
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/posts/svelte_component_init.md": () => import("./svelte_component_init.js"), "/src/routes/blog/posts/svelte_each.md": () => import("./svelte_each.js"), "/src/routes/blog/posts/svelte_import_data.md": () => import("./svelte_import_data.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3).replace("posts/", "");
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const headingStringParse = (str) => str.replace(/^\s+|\s+$/g, "").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
export {
  fetchMarkdownPosts as f,
  headingStringParse as h
};
