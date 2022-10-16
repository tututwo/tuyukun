<script>
  import BlogSideBar from "$lib/blogSection/blogSideBar.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data
  
</script>

<div class="grid lg:grid-cols-blogSectionLg lg:gap-x-2">
  <div class="sidebar-wrapper">
    <BlogSideBar />
  </div>

  <slot />
</div>
