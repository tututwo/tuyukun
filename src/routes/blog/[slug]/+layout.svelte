<script>
  import BlogSideBar from "$lib/blogSection/blogSideBar.svelte";
  export let data
  $: ({categories, titleSection} = data)
  $: console.log(data)
</script>

<!--TODO I need category and titleSection data -->
<div class="grid lg:grid-cols-blogSectionLg lg:gap-x-2">
  <div class="block sticky [align-self:start] top-0">
    <BlogSideBar {categories} {titleSection}/>
  </div>

  <slot />
</div>
