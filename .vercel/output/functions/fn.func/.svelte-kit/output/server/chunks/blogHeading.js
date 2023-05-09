import { c as create_ssr_component, a as subscribe, d as add_attribute } from "./index3.js";
import { h as headingStringParse } from "./index4.js";
import "./gsap.js";
import { h as headingData } from "./blogAttributes.js";
const BlogHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_headingData;
  $$unsubscribe_headingData = subscribe(headingData, (value) => value);
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$unsubscribe_headingData();
  return `<h2${add_attribute("id", headingStringParse(heading), 0)} class="scrolltrigger-demo"><!-- HTML_TAG_START -->${heading}<!-- HTML_TAG_END --></h2>`;
});
export {
  BlogHeading as B
};
