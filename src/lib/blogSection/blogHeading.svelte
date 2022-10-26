<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import {intersecting} from "$lib/utils/blogAttributes"
  let element, intersectingInHeading
  $: $intersecting = intersectingInHeading
  let threshold = .6
  
</script>

<IntersectionObserver {element} {threshold} bind:intersecting = {intersectingInHeading}>
  <h2 id="the-early-stage">The Early Stage</h2>
</IntersectionObserver>
