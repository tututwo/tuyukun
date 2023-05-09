import { c as create_ssr_component } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-jnh62i.svelte-jnh62i{max-width:800px;margin:0 auto}.card-column.svelte-jnh62i.svelte-jnh62i{width:50%;float:left;padding:4%;box-sizing:border-box}.column-1.svelte-jnh62i.svelte-jnh62i{padding-top:100px}.card.svelte-jnh62i.svelte-jnh62i{width:92%;max-width:340px;margin-left:auto;margin-right:auto;position:relative;background:#eb5160;color:#fff;cursor:pointer;margin-bottom:60px}.border.svelte-jnh62i.svelte-jnh62i{position:absolute;width:100%;height:100%;padding:6px;border:1px solid #fff;opacity:0.5;left:-6px;top:-6px}.card.svelte-jnh62i h1.svelte-jnh62i{position:relative;padding:190px 0px 100px 10px;width:90%}.card.svelte-jnh62i>img.svelte-jnh62i{width:90%;position:absolute;top:-6%;left:-6%}.card-color-0.svelte-jnh62i.svelte-jnh62i{background-color:#eb5160}.card-color-1.svelte-jnh62i.svelte-jnh62i{background-color:#8f3985}.card-color-2.svelte-jnh62i.svelte-jnh62i{background-color:#8daa91}.card-color-3.svelte-jnh62i.svelte-jnh62i{background-color:#888da7}.cover.svelte-jnh62i.svelte-jnh62i{position:fixed;background:#eb5160;z-index:100;transform-origin:50% 50%}.open-content.svelte-jnh62i.svelte-jnh62i{width:100%;z-index:110;position:absolute;opacity:0;pointer-events:none}.open-content.svelte-jnh62i img.svelte-jnh62i{position:relative;width:90%;margin-left:3%;margin-top:20px;z-index:5}.open-content.svelte-jnh62i .text.svelte-jnh62i{background:#fff;margin-top:-56%;padding:60% 5% 5% 5%;width:80%;margin-left:5%;margin-bottom:5%}.close-content.svelte-jnh62i.svelte-jnh62i{display:block;position:absolute;right:12px;top:12px;width:30px;height:30px}.close-content.svelte-jnh62i span.svelte-jnh62i{background:#222;width:30px;height:6px;display:block;position:absolute;top:14px}.x-1.svelte-jnh62i.svelte-jnh62i{transform:rotate(45deg)}.x-2.svelte-jnh62i.svelte-jnh62i{transform:rotate(-45deg)}.card.svelte-jnh62i.svelte-jnh62i{transition:opacity 200ms linear 320ms, transform 200ms ease-out 320ms}.border.svelte-jnh62i.svelte-jnh62i{transition:opacity 200ms linear, transform 200ms ease-out}.card.svelte-jnh62i img.svelte-jnh62i{transition:opacity 200ms linear 0ms, transform 200ms ease-in 0ms}.card.svelte-jnh62i h1.svelte-jnh62i{transform:translate3d(20%, 0px, 0px);transition:opacity 200ms linear 120ms, transform 200ms ease-in 120ms}.cover.svelte-jnh62i.svelte-jnh62i{transition:transform 300ms ease-in-out}.open-content.svelte-jnh62i.svelte-jnh62i{transition:opacity 200ms linear 0ms}@media screen and (max-width: 600px){.card-column.svelte-jnh62i.svelte-jnh62i{width:90%}.column-1.svelte-jnh62i.svelte-jnh62i{padding-top:0px}.open-content.svelte-jnh62i img.svelte-jnh62i{margin-top:40px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="container svelte-jnh62i"><div class="card-column column-0 svelte-jnh62i"><div class="card card-color-0 svelte-jnh62i"><div class="border svelte-jnh62i"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" class="svelte-jnh62i">
            <h1 class="svelte-jnh62i">Hey now, you&#39;re an allstar</h1></div>
        <div class="card card-color-2 svelte-jnh62i"><div class="border svelte-jnh62i"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" class="svelte-jnh62i">
            <h1 class="svelte-jnh62i">Hey now, you&#39;re a rock star</h1></div></div>
    <div class="card-column column-1 svelte-jnh62i"><div class="card card-color-1 svelte-jnh62i"><div class="border svelte-jnh62i"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" class="svelte-jnh62i">
            <h1 class="svelte-jnh62i">Get your game on, go play</h1></div>
        <div class="card card-color-3 svelte-jnh62i"><div class="border svelte-jnh62i"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" class="svelte-jnh62i">
            <h1 class="svelte-jnh62i">Get the show on, get paid</h1></div></div></div>

<div id="cover" class="cover svelte-jnh62i"></div>

<div id="open-content" class="open-content svelte-jnh62i"><a href="#" id="close-content" class="close-content svelte-jnh62i"><span class="x-1 svelte-jnh62i"></span><span class="x-2 svelte-jnh62i"></span></a>
    <img id="open-content-image" src="" class="svelte-jnh62i">
    <div class="text svelte-jnh62i" id="open-content-text"></div>
</div>`;
});
export {
  Page as default
};
