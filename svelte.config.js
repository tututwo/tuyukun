import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
  preprocess: [
    sveltePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
				rehypeAutolinkHeadings,
				[rehypeExternalLinks, { target: '_blank' }],

			],
    })
  ]
};

export default config;
