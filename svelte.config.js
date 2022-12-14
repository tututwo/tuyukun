import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
  preprocess: [
    seqPreprocessor([preprocess(), preprocessThrelte()]),
    sveltePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
        rehypeSlug,
				rehypeAutolinkHeadings,
				// [rehypeExternalLinks, { target: '_blank' }],

			],
    })
  ]
};

export default config;
