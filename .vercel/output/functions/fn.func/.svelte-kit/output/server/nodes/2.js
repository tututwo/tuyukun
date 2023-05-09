import * as universal from '../entries/pages/blog/_post_/_layout.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/blog/_post_/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[post]/+layout.js";
export const imports = ["_app/immutable/nodes/2.2c1f9d3d.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/blogAttributes.dbadb2b5.js","_app/immutable/chunks/index.bf430ae2.js","_app/immutable/chunks/index.457ef75c.js","_app/immutable/chunks/gsap.40dc4ee6.js"];
export const stylesheets = [];
export const fonts = [];
