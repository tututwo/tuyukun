import { c as create_ssr_component, o as onDestroy, f as spread, h as escape_object, i as createEventDispatcher, e as escape, d as add_attribute, b as each, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { c as checkIconState, g as generateIcon } from "../../chunks/functions.js";
import "rough-notation";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/gsap.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const project_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@charset "UTF-8";.front.svelte-pqr9s4,.back.svelte-pqr9s4{box-shadow:0 0 20px 0 #999;border:10px solid #fff;position:absolute}.front.svelte-pqr9s4{-webkit-transform:rotateX(0deg) rotateY(0deg);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;-moz-transform:rotateX(0deg) rotateY(0deg);-moz-transform-style:preserve-3d;-moz-backface-visibility:hidden;transition:all 0.4s ease-in-out}.postcard:hover .front{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);box-shadow:0 15px 50px rgba(0, 0, 0, 0.2)}.back.svelte-pqr9s4{-webkit-transform:rotateY(-180deg);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;-moz-transform:rotateY(-180deg);-moz-transform-style:preserve-3d;-moz-backface-visibility:hidden;transition:all 0.4s ease-in-out}.postcard:hover .back{z-index:1000;background-color:white;-webkit-transform:rotateX(0deg) rotateY(0deg);-moz-transform:rotateX(0deg) rotateY(0deg)}.photo-by.svelte-pqr9s4{position:absolute;right:10px;bottom:10px;color:#777;font-size:0.4em}.stamp.svelte-pqr9s4{width:60px;height:90px;position:absolute;top:10px;right:10px;background-image:url("/印章.png");background-size:cover;padding:5px}',
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { individualProject } = $$props;
  let { projectNode = {} } = $$props;
  individualProject.projectDescription;
  let titleHeight = 36;
  let projectCard = {};
  let mouseX, mouseY, rotateXY = ``;
  if ($$props.individualProject === void 0 && $$bindings.individualProject && individualProject !== void 0)
    $$bindings.individualProject(individualProject);
  if ($$props.projectNode === void 0 && $$bindings.projectNode && projectNode !== void 0)
    $$bindings.projectNode(projectNode);
  $$result.css.add(css$2);
  {
    {
      if (projectNode) {
        projectNode["projectCardOffsetLeft"] = projectNode.offsetLeft;
        projectNode["projectCardOffsetHeight"] = projectNode.offsetHeight;
      }
    }
  }
  {
    {
      const rotateXAxis = mouseX / projectCard.clientWidth * 25;
      const rotateYAxis = mouseY / projectCard.clientHeight * -25;
      rotateXY = `transform: rotateY(${rotateXAxis}deg) rotateX(${rotateYAxis}deg)`;
    }
  }
  return `<div class="front relative border-black w-full h-full lg:h-[400px] bg-cover bg-no-repeat bg-center svelte-pqr9s4" style="${"background-image: url(" + escape(individualProject.projectImgSource, true) + ");border-bottom-width: " + escape(titleHeight, true) + "px;"}"><div class="absolute w-full flex justify-center text-center " style="${"bottom: -" + escape(titleHeight, true) + "px"}"><a${add_attribute("href", individualProject.projectLink, 0)} class="font-bold font-icon lg:text-[1.5rem]">${escape(individualProject.projectName)}</a></div></div>

<div class="back card-wrap w-full h-full lg:h-[400px] flex flex-col justify-center items-center svelte-pqr9s4"${add_attribute("style", rotateXY, 0)}${add_attribute("this", projectCard, 0)}><div class="card flex flex-col justify-center text-center"><a${add_attribute("href", individualProject.projectLink, 0)} class="font-heading lg:text-[1.5rem]">${escape(individualProject.projectName)}</a>
        ${each(individualProject.tools, (tool) => {
    return `<p class="font-light">${escape(tool)}</p>`;
  })}</div>
    
    <div class="photo-by svelte-pqr9s4">Created By 涂钰坤, aka, Gordon Tu</div>
    <div class="stamp svelte-pqr9s4"></div>
</div>`;
});
const blogCardInfo = writable([
  {
    blogtName: "how to download data requested by the current website.",
    icon: "akar-icons:twitter-fill",
    blogLink: "https://twitter.com/tu_yukun/status/1468683526606258178",
    blogImgSource: "/post-images/twitterThread/cover.jpeg",
    date: "2022-01-01"
  },
  {
    blogtName: "GSAP ScrollTrigger in Observable",
    icon: "simple-icons:observable",
    blogLink: "https://observablehq.com/@tututwo/gsap-scrolltrigger-in-observable",
    blogImgSource: "/post-images/observalbe/scrolltrigger.png",
    date: "2022-05-01"
  }
]);
const BlogSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'section.svelte-1t8rkjx.svelte-1t8rkjx.svelte-1t8rkjx{display:flex;flex-direction:row;justify-content:center;overflow:hidden;height:80vh;width:100%;font-family:"Roboto", sans-serif;transition:0.25s}section.svelte-1t8rkjx .options.svelte-1t8rkjx.svelte-1t8rkjx{display:flex;flex-direction:row;align-items:stretch;overflow:hidden;min-width:600px;max-width:800px;width:calc(100% - 100px);height:400px}@media screen and (max-width: 718px){section.svelte-1t8rkjx .options.svelte-1t8rkjx.svelte-1t8rkjx{min-width:520px}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(5){display:none}}@media screen and (max-width: 638px){section.svelte-1t8rkjx .options.svelte-1t8rkjx.svelte-1t8rkjx{min-width:440px}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(4){display:none}}@media screen and (max-width: 558px){section.svelte-1t8rkjx .options.svelte-1t8rkjx.svelte-1t8rkjx{min-width:360px}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(3){display:none}}@media screen and (max-width: 478px){section.svelte-1t8rkjx .options.svelte-1t8rkjx.svelte-1t8rkjx{min-width:280px}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(2){display:none}}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx{position:relative;overflow:hidden;min-width:60px;margin:10px;background:var(--optionBackground, var(--defaultBackground, #e6e9ed));background-size:auto 120%;background-position:center;cursor:pointer;transition:0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(1){--defaultBackground:#ed5565}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(2){--defaultBackground:#fc6e51}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(3){--defaultBackground:#ffce54}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(4){--defaultBackground:#2ecc71}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(5){--defaultBackground:#5d9cec}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:nth-child(6){--defaultBackground:#ac92ec}section.svelte-1t8rkjx .options .option.active.svelte-1t8rkjx.svelte-1t8rkjx{flex-grow:10000;transform:scale(1);max-width:600px;margin:0px;border-radius:40px;background-size:auto 100%}section.svelte-1t8rkjx .options .option.active .shadow.svelte-1t8rkjx.svelte-1t8rkjx{box-shadow:inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black}section.svelte-1t8rkjx .options .option.active .label.svelte-1t8rkjx.svelte-1t8rkjx{bottom:20px;left:20px}section.svelte-1t8rkjx .options .option.active .label .info.svelte-1t8rkjx>div.svelte-1t8rkjx{left:0px;opacity:1}section.svelte-1t8rkjx .options .option.svelte-1t8rkjx.svelte-1t8rkjx:not(.active){flex-grow:1;border-radius:30px}section.svelte-1t8rkjx .options .option:not(.active) .shadow.svelte-1t8rkjx.svelte-1t8rkjx{bottom:-40px;box-shadow:inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black}section.svelte-1t8rkjx .options .option:not(.active) .label.svelte-1t8rkjx.svelte-1t8rkjx{bottom:10px;left:10px}section.svelte-1t8rkjx .options .option:not(.active) .label .info.svelte-1t8rkjx>div.svelte-1t8rkjx{left:20px;opacity:0}section.svelte-1t8rkjx .options .option .shadow.svelte-1t8rkjx.svelte-1t8rkjx{position:absolute;bottom:0px;left:0px;right:0px;height:120px;transition:0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)}section.svelte-1t8rkjx .options .option .label.svelte-1t8rkjx.svelte-1t8rkjx{display:flex;position:absolute;right:0px;height:40px;transition:0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)}section.svelte-1t8rkjx .options .option .label .icon.svelte-1t8rkjx.svelte-1t8rkjx{display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:40px;max-width:40px;height:40px;border-radius:100%;background-color:white;color:var(--defaultBackground)}section.svelte-1t8rkjx .options .option .label .info.svelte-1t8rkjx.svelte-1t8rkjx{display:flex;flex-direction:column;justify-content:center;margin-left:10px;color:white;white-space:pre}section.svelte-1t8rkjx .options .option .label .info.svelte-1t8rkjx>div.svelte-1t8rkjx{position:relative;transition:0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out}section.svelte-1t8rkjx .options .option .label .info .main.svelte-1t8rkjx.svelte-1t8rkjx{font-weight:bold;font-size:1.2rem}section.svelte-1t8rkjx .options .option .label .info .sub.svelte-1t8rkjx.svelte-1t8rkjx{transition-delay:0.1s}',
  map: null
};
const BlogSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $blogCardInfo, $$unsubscribe_blogCardInfo;
  $$unsubscribe_blogCardInfo = subscribe(blogCardInfo, (value) => $blogCardInfo = value);
  let activeIndex = 0;
  $$result.css.add(css$1);
  $$unsubscribe_blogCardInfo();
  return `<section class="svelte-1t8rkjx"><div class="options svelte-1t8rkjx">${each($blogCardInfo, (blog, i) => {
    return `
            <div class="${["option svelte-1t8rkjx", i == activeIndex ? "active" : ""].join(" ").trim()}" style="${"--optionBackground:url(" + escape(blog.blogImgSource, true) + ");"}"><div class="shadow svelte-1t8rkjx"></div>
                <div class="label svelte-1t8rkjx"><div class="icon svelte-1t8rkjx">${validate_component(Icon, "Icon").$$render($$result, { icon: blog.icon }, {}, {})}</div>
                    <div class="info svelte-1t8rkjx"><a class="main svelte-1t8rkjx"${add_attribute("href", blog.blogLink, 0)}>${escape(blog.blogtName)}</a>
                        <div class="sub svelte-1t8rkjx">${escape(blog.date)}</div>
                    </div></div>
            </div>`;
  })}</div>
</section>`;
});
let projectCardInfo = writable([
  {
    projectName: "Global Earthquakes - 3D Visualization with Three.js and Observable",
    projectDescription: "",
    projectLink: "https://earthquake-r3f.vercel.app/",
    projectImgSource: "/projects/CreativeCoding/Earthquake.png",
    tools: ["Three.js, React.js"],
    titleTag: "code creatively",
    date: "2023-03-01"
  },
  {
    projectName: "Stitching Heart, Blooming Flowers",
    projectDescription: "",
    projectLink: "https://beating-heart-phi.vercel.app/",
    projectImgSource: "/projects/CreativeCoding/R3f-Heart.png",
    tools: ["Three.js, React.js"],
    titleTag: "code creatively",
    date: "2023-02-01"
  },
  {
    projectName: "Spike Planet",
    projectDescription: "",
    projectLink: "https://spikey-planet.vercel.app/",
    projectImgSource: "/projects/CreativeCoding/R3f-spikey.png",
    tools: ["Three.js, React.js"],
    titleTag: "code creatively",
    date: "2023-03-01"
  },
  {
    projectName: "Number of Chinese Company Infrastructure in the US and Abroad.",
    projectDescription: "",
    projectLink: "https://twitter.com/tu_yukun/status/1646917464767225862/photo/1",
    projectImgSource: "https://pbs.twimg.com/media/FtcYkEzXoAAxtcw?format=png&name=medium",
    tools: ["Observable"],
    titleTag: "charts",
    date: "2023-04-01"
  },
  {
    projectName: "Number of Middle Age Himalayan Climbers Is Increasing Over Time",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/himalayan-ridge",
    projectImgSource: "/projects/Charts/d3_Himalayan.png",
    tools: ["Observable"],
    titleTag: "charts",
    date: "2022-01-01"
  },
  {
    projectName: "Recreate: Why teachers are walking out of the classroom",
    projectDescription: "",
    projectLink: "https://teacher-svelte.netlify.app/",
    projectImgSource: "/projects/Charts/svelte_teacherSalary.png",
    tools: ["Svelte", "D3"],
    titleTag: "charts",
    date: "2021-07-01"
  },
  {
    projectName: "Covid Monitoring Dashboard - China",
    projectDescription: "",
    projectLink: "https://www.chinacovidmonitor.org/",
    projectImgSource: "/projects/Charts/svelte-covid-cn.png",
    tools: ["Svelte", "D3", "R"],
    titleTag: "charts",
    date: "2022-08-01"
  },
  {
    projectName: "How dry would each state be if Americans only consumed local state-produced beer?",
    projectDescription: "Geofacetted stack bar chart that compares the beer production and beer consumption in each statevisuals.",
    projectLink: "https://twitter.com/tu_yukun/status/1281702418581827584/photo/1",
    projectImgSource: "/projects/Charts/tt_Beer_Produciton.png",
    tools: ["R"],
    titleTag: "charts",
    date: "2020-12-10"
  },
  {
    projectName: "How much money did award-winning shows earn before the award date?",
    projectDescription: "Exploring the net gross and days before the awarding date of each musical that debutted after 1986",
    projectLink: "https://twitter.com/tu_yukun/status/1297733577849765888/photo/1",
    projectImgSource: "/projects/Charts/tt_Broadway.png",
    tools: ["R"],
    titleTag: "charts",
    date: "2021-01-10"
  },
  {
    projectName: "CSS Doodle Chinese Pattern",
    projectDescription: "",
    projectLink: "https://codepen.io/collection/LPePxy",
    projectImgSource: "/projects/CreativeCoding/css-doodle-纹样.png",
    tools: ["CSS"],
    titleTag: "code creatively",
    date: "2021-12-02"
  },
  {
    projectName: "Rotating 3D Cubes",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/three-js-animated-cubes?collection=@tututwo/three-js-creative-coding-practice",
    projectImgSource: "/projects/CreativeCoding/Observable_GR_animateCubes.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-01-02"
  },
  {
    projectName: "Sunset Blob",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/the-annual-ring-v2?collection=@tututwo/three-js-creative-coding-practice",
    projectImgSource: "/projects/CreativeCoding/Observable_GR_blobRing.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-01-09"
  },
  {
    projectName: "Rough Fried Eggs",
    projectDescription: "",
    projectLink: "https://observablehq.com/d/1d6edd39edb160e7?collection=@tututwo/three-js-creative-coding-practice",
    projectImgSource: "/projects/CreativeCoding/Observable_GR_circlePackingMerging.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-02-09"
  },
  {
    projectName: "Lili Pads",
    projectDescription: "",
    projectLink: "https://observablehq.com/d/86bf42953f2582bd?collection=@tututwo/three-js-creative-coding-practice",
    projectImgSource: "/projects/CreativeCoding/Observable_GR_lotusLeave.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-01-19"
  },
  {
    projectName: "Rough Squares",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/rough-canvas-squares",
    projectImgSource: "/projects/CreativeCoding/Observable_GR_roughSquare.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-01-01"
  },
  {
    projectName: "GLSL SDF Practice Collection",
    projectDescription: "",
    projectLink: "https://observablehq.com/collection/@tututwo/sdf",
    projectImgSource: "/projects/CreativeCoding/Observable_SDF.png",
    tools: ["GLSL"],
    titleTag: "code creatively",
    date: "2022-08-01"
  },
  {
    projectName: "Star Candy Ball",
    projectDescription: "",
    projectLink: "https://observablehq.com/d/027525671baa52b4",
    projectImgSource: "/projects/CreativeCoding/Observable-Star.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2022-12-01"
  },
  {
    projectName: "Flow Field 2D",
    projectDescription: "",
    projectLink: "https://observablehq.com/d/73794013ffa23a9c?collection=@tututwo/three-js-creative-coding-practice",
    projectImgSource: "/projects/CreativeCoding/Observable-flowfield.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2023-01-31"
  },
  {
    projectName: "Unfold a Chinese Lattern",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/chinese-lantern",
    projectImgSource: "/projects/CreativeCoding/Observable_lattern.png",
    tools: ["Observable"],
    titleTag: "code creatively",
    date: "2021-07-01"
  },
  {
    projectName: "Canvas Lightning",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/lightning",
    projectImgSource: "/projects/CreativeCoding/Observable_lightning.png",
    tools: ["GLSL"],
    titleTag: "code creatively",
    date: "2021-10-01"
  },
  {
    projectName: "Kois",
    projectDescription: "",
    projectLink: "https://observablehq.com/@tututwo/kois",
    projectImgSource: "/projects/CreativeCoding/Observable_kois.png",
    tools: ["Canvas"],
    titleTag: "code creatively",
    date: "2022-09-10"
  },
  {
    projectName: "Developing and undeveloped countries remain to be the agricultural countries, made in QGIS",
    projectDescription: "",
    projectLink: "https://datawrapper.dwcdn.net/VjDoq/5/",
    projectImgSource: "/projects/Maps/map_datawrapper_agriculture.png",
    tools: ["Datawrapper"],
    titleTag: "maps",
    date: "2020-12-10"
  },
  {
    projectName: "China Elevation",
    projectDescription: "",
    projectLink: "/projects/Maps/map_elevation_ridge.png",
    projectImgSource: "/projects/Maps/map_elevation_ridge.png",
    tools: ["QGIS", "Adobe Illustrator"],
    titleTag: "maps",
    date: "2020-10-17"
  },
  {
    projectName: "Most buildings in Manhattan were built before 1960s",
    projectDescription: "",
    projectLink: "/projects/Maps/map_Manhattan.png",
    projectImgSource: "/projects/Maps/map_Manhattan_cover.png",
    tools: ["QGIS"],
    titleTag: "maps",
    date: "2020-12-27"
  },
  {
    projectName: "Sichuan Basin Elevation",
    projectDescription: "",
    projectLink: "https://observablehq.com/d/299f845c1c4ba8fe",
    projectImgSource: "/projects/Maps/map_ridgelineSichuan.png",
    tools: ["Observable"],
    titleTag: "maps",
    date: "2022-01-27"
  },
  {
    projectName: "The elevation of Jiangxi Province",
    projectDescription: "",
    projectLink: "/projects/Maps/map_shuimomap_shuimo.png",
    projectImgSource: "/projects/Maps/map_shuimomap_shuimo_cover.png",
    tools: ["QGIS"],
    titleTag: "maps",
    date: "2020-11-07"
  },
  {
    projectName: "Two Dragons of China",
    projectDescription: "",
    projectLink: "/projects/Maps/map_twodragons.png",
    projectImgSource: "/projects/Maps/map_twodragons_cover.png",
    tools: ["QGIS"],
    titleTag: "maps",
    date: "2020-11-27"
  }
]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.rough-annotation{z-index:999}.rough-annotation:hover{opacity:0.4}.clearText.svelte-76dqr6{position:relative;width:-moz-fit-content;width:fit-content}.clearText.svelte-76dqr6::before{content:"";background-color:white;background-size:cover;position:absolute;top:0px;right:0px;bottom:0px;left:0px;opacity:0.85;border-radius:0.21rem}.actualClearText.svelte-76dqr6{position:relative;line-height:0.9;z-index:1000}.postcard.svelte-76dqr6{perspective:1000px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectNodes;
  let $projectCardInfo, $$unsubscribe_projectCardInfo;
  $$unsubscribe_projectCardInfo = subscribe(projectCardInfo, (value) => $projectCardInfo = value);
  let titleTags = [
    { tag: "charts", color: "#E4523E" },
    { tag: "maps", color: "#81ABD9" },
    { tag: "code creatively", color: "#0EAEC9" }
  ];
  let tagNodes = [];
  let currentProjectTitleTag = $projectCardInfo.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  $$result.css.add(css);
  projectNodes = [];
  $$unsubscribe_projectCardInfo();
  return `<header class="relative top-[20vh] w-full lg:min-h-[50vh] flex flex-col items-center justify-center text-[1.2rem]"><div class="lg:px-[300px] lg:min-w-[40vw] "><div class="flex items-center">
            <span class="clearText svelte-76dqr6"><p class="actualClearText svelte-76dqr6">Hi, I&#39;m Gordon Tu. I make</p></span>
            
            ${each(titleTags, ({ tag, color }, index) => {
    return `<span class="z-[1000] font-heading font-black cursor-pointer mx-2 px-2 flex items-center justify-center text-[2rem] " style="${"color: " + escape("white", true)}"${add_attribute("this", tagNodes[index], 0)}>${escape(tag)}
                </span>`;
  })}
            <div>on the web,</div></div>
        
        <div class="clearText svelte-76dqr6"><div class="actualClearText svelte-76dqr6">and I also write
                
                <span class="cursor-pointer font-bold font-heading text-[2rem] ">blog posts</span>
                <button>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:cursor-fill" }, {}, {})}</button></div></div>
        
        <div class="flex mt-2"><a href="https://twitter.com/tu_yukun" class="mr-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "hover:color-[grey]",
      icon: "akar-icons:twitter-fill"
    },
    {},
    {}
  )}</a>
            <a href="https://github.com/tututwo" class="mx-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "akar-icons:github-fill" }, {}, {})}</a>
            <a href="https://observablehq.com/@tututwo?tab=profile" class="mx-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "simple-icons:observable" }, {}, {})}</a>
            <a href="https://www.linkedin.com/in/gordon-tu-675a43255/" class="mx-2 scale-125">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:linkedin" }, {}, {})}</a></div></div>

    <div class="mt-10 h-full lg:min-h-[2000px] w-full flex justify-center ">
        ${currentProjectTitleTag.length > 0 ? `<section class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10">${each(currentProjectTitleTag, (individualProject, i) => {
    return `<div${add_attribute("id", individualProject.projectName, 0)} class="postcard hover lg:w-[90%] gap-[10rem] h-[20vh] lg:h-[400px] mb-10 relative flex justify-center items-center svelte-76dqr6"${add_attribute("this", projectNodes[i], 0)}>
                            ${validate_component(Project, "Project").$$render(
      $$result,
      {
        individualProject,
        projectNode: projectNodes[i]
      },
      {},
      {}
    )}
                        </div>`;
  })}</section>` : ``}
        
        ${currentProjectTitleTag.length == 0 ? `${validate_component(BlogSection, "BlogSection").$$render($$result, {}, {}, {})}` : ``}</div></header>

`;
});
export {
  Page as default
};
