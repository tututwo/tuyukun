import { sveltekit } from "@sveltejs/kit/vite";
// import _compress from "vite-plugin-compress"
// const compress = _compress.default;

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    ssr: {
        noExternal: ["three", "troika-three-text"],

    },
};

export default config;
