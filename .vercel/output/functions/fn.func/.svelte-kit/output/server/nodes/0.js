import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.af2e8fcf.js","_app/immutable/chunks/index.457ef75c.js","_app/immutable/chunks/stores.b59c4859.js","_app/immutable/chunks/singletons.f998d675.js","_app/immutable/chunks/index.bf430ae2.js","_app/immutable/chunks/functions.93e96281.js"];
export const stylesheets = ["_app/immutable/assets/0.addf086d.css"];
export const fonts = [];
