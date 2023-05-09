import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import "css-doodle";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/functions.js";
import "rough-notation";
const app = "";
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-KL11ZHZSTB", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ip12h6_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-KL11ZHZSTB"><\/script><script>window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-KL11ZHZSTB");
  <\/script><!-- HEAD_svelte-ip12h6_END -->`, ""}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{position:relative}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="absolute h-full w-full flex items-start justify-center overflow-hidden z-[-1] pointer-events-none"></div>


<div class="w-full h-full min-h-[100vh]">
        ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
        ${slots.default ? slots.default({}) : ``}</div>

<footer class="flex items-center justify-center mt-[120px] z-[-1]">This website is made of love, and shoulder pain as well as endless support
    from Svelte community.
</footer>`;
});
export {
  Layout as default
};
