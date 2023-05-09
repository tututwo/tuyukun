import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.31f6c7a3.js","_app/immutable/chunks/index.457ef75c.js"];
export const stylesheets = ["_app/immutable/assets/4.cc47b0c7.css"];
export const fonts = [];
