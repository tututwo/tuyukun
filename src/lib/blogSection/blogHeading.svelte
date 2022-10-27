<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { intersecting } from "$lib/utils/blogAttributes";
  import { gsap, ScrollTrigger } from "../../scripts/gsap";
  import { onMount } from "svelte";
  let element, intersectingInHeading;
  $: $intersecting = intersectingInHeading;
  let threshold = 0.6;

  // scrolltrigger way
  onMount(() => {
    console.log(intersectingInHeading)
    
    ScrollTrigger.create({
      trigger: ".scrolltrigger-demo",
      start: "top top",
      markers: true,
      end: "bottom+=300px 50%+=300px",
      onUpdate: (self) => {
        console.log(
          "progress:",
          self.progress.toFixed(3),
          "direction:",
          self.direction,
          "velocity",
          self.getVelocity()
        );
      },
    });
    ScrollTrigger.refresh() 
  });
</script>

<IntersectionObserver
  {element}
  {threshold}
  bind:intersecting={intersectingInHeading}
>
  <h2 id="the-early-stage">The Early Stage</h2>
</IntersectionObserver>

<h2 id="the-early-stage" class="scrolltrigger-demo">The Early Stage from Scrolltrigger</h2>
