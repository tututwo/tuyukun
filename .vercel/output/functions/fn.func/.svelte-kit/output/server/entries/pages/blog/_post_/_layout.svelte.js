import { c as create_ssr_component, a as subscribe, b as each, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { h as headingStringParse } from "../../../../chunks/index4.js";
import { h as headingData } from "../../../../chunks/blogAttributes.js";
import "../../../../chunks/gsap.js";
const BlogSideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $headingData, $$unsubscribe_headingData;
  $$unsubscribe_headingData = subscribe(headingData, (value) => $headingData = value);
  let { categories = [] } = $$props;
  let { titleSection = [] } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.titleSection === void 0 && $$bindings.titleSection && titleSection !== void 0)
    $$bindings.titleSection(titleSection);
  $$unsubscribe_headingData();
  return `<aside class="flex flex-col justify-start ml-4">

  <h2 class="lg:text-2xl font-extrabold font-heading">Sections</h2>

  <div>
    <div></div>
    
    ${each(titleSection, (section) => {
    return `
      
      <div class="font-light lg:text-lg" id="sideHeading"${add_attribute(
      "style",
      $headingData.progressAtCurrentHeading > 0.5 && $headingData.currentHeading == headingStringParse(section) ? "border-radius: 10px;border: 2px solid red" : "border: none",
      0
    )}><a${add_attribute("href", "#" + headingStringParse(section), 0)}>${escape(section)}</a>
      </div>`;
  })}</div>

  <div class="lg:text-2xl font-extrabold font-heading mt-4 mb-2">Categories
  </div>
  <div class="flex gap-x-4 ">${each(categories, (category) => {
    return `<a href="${"/blog/category/" + escape(category, true)}" class="font-[2000] lg:text-lg bg-[#9AC6BD] text-white px-2 rounded-lg hover:bg-[#F7D138] transition-colors ease-in-out">${escape(category)}
      </a>`;
  })}</div></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories;
  let titleSection;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ categories, titleSection } = data);
  return `
<div class="grid lg:grid-cols-blogSectionLg lg:gap-x-6 bg-white"><div></div>
  ${slots.default ? slots.default({}) : ``}
  <div class="block sticky [align-self:start] top-0">${validate_component(BlogSideBar, "BlogSideBar").$$render($$result, { categories, titleSection }, {}, {})}</div></div>`;
});
export {
  Layout as default
};
