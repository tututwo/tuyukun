import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { B as BlogHeading } from "../../../../chunks/blogHeading.js";
const code = "";
const blog = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content{font-size:1rem}.content p a{border-bottom:2px solid #9ab9c7;color:#9ab9c7}.content p a:visited{border-bottom:2px solid #c4b0a0;color:#c4b0a0}.content p a:hover{border-bottom:0px}.content li>a{border-bottom:2px solid #9ab9c7;color:#9ab9c7}.content li>a:visited{border-bottom:2px solid #c4b0a0;color:#c4b0a0}.content li>a:hover{border-bottom:0px}.content blockquote>p{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:0.5em 10px\n    }.content blockquote:before{color:#ccc;font-size:4em;line-height:0.1em;margin-right:0.25em;vertical-align:-0.4em}.content :not(pre)>code{color:white;background-color:#9ab9c7;border-radius:5px;padding:0.2em;padding-top:1px;padding-bottom:1px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="overflow-auto"><article class="leading-10 lg:text-xl ">

        
        <h1 class="lg:text-[3rem] font-heading font-extrabold my-5 leading-[3rem]">${escape(data.title)}</h1>
        <div class="">Published Date: ${escape(data.date)}</div>

        
        

        <div class="content leading-1.6 md:leading-5 lg:leading-[1.21rem]">${validate_component(BlogHeading, "BlogHeading").$$render($$result, {}, {}, {})}
            ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article>
</main>`;
});
export {
  Page as default
};
