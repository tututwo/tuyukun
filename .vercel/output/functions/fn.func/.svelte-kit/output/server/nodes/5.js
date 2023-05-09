import * as universal from '../entries/pages/blog/_post_/_page.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/blog/_post_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[post]/+page.js";
export const imports = ["_app/immutable/nodes/5.02fa681e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/blogAttributes.dbadb2b5.js","_app/immutable/chunks/index.bf430ae2.js","_app/immutable/chunks/index.457ef75c.js","_app/immutable/chunks/blogHeading.883001fd.js","_app/immutable/chunks/gsap.40dc4ee6.js"];
export const stylesheets = ["_app/immutable/assets/5.99a88d82.css"];
export const fonts = [];
