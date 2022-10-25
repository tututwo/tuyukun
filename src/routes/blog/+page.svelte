<script>
  import { gsap, Flip } from "../../scripts/gsap";
  import { onMount } from "svelte";
  import { path } from "d3-path"
  function transition() {
    
  }
  // https://greensock.com/forums/topic/28849-how-to-make-gsap-draggable-stop-on-click-and-start-on-click/
  onMount(async () => {
    await transition();
  });
  export let data;
  let
    x0 = 40,
    y0 = 100,
    cpx1 = 150,
    cpy1 = 280,
    cpx2 = 150,
    cpy2 = 30,
    x = 350,
    y = 50;
  $: path_call = path()
  
  $: path_call.moveTo(x0, y0);
  $: path_call.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y);
  // $: console.log(data.posts)
</script>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          <span class="font-extrabold">{post.meta.title}</span>
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

<div class="w-[400px] h-[400px]">
  <svg class="w-full h-full " viewBox="0 0 450 300">
    <path d ="{path_call["_"]}" class="stroke-black fill-white"></path>
  </svg>
</div>