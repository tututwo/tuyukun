<script>
  // export const prerender = true
  import "../app.css";
  
  import Analytics from "$lib/Analytics.svelte";
  import Header from "$lib/landingPage/Header.svelte";
</script>

<Header />
<Analytics />
<slot />

<footer>
  This website is made of love, and shoulder pain as well as endless support
  from Svelte community.
</footer>

<style>
</style>
