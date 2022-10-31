<script>
  // export const prerender = true
  import "../app.css";
  
  import Analytics from "$lib/Analytics.svelte";
  import Header from "$lib/landingPage/Header.svelte";
</script>
<div class="w-full h-full min-h-[100vh]">
<Header />
<Analytics />
<slot />

<footer>
  This website is made of love, and shoulder pain as well as endless support
  from Svelte community.
</footer>
</div>

