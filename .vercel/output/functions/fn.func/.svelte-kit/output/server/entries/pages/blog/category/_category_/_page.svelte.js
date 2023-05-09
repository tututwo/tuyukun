import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import "../../../../../chunks/gsap.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.posts.length ? `<ul>${each(data.posts, (post) => {
    return `<li><h2><a${add_attribute("href", post.path, 0)}><span class="font-extrabold">${escape(post.meta.title)}</span>
        </a></h2>
      Published ${escape(post.meta.date)}
    </li>`;
  })}</ul>` : ``}`;
});
export {
  Page as default
};
