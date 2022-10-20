<script>
  export let categories = [];
  export let titleSection = [];
  // https://amirardalan.com/blog/generate-blog-heading-anchors-in-react-markdown
  $: string = (str) =>
    str
      .replace(/^\s+|\s+$/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  $: console.log(categories);
</script>

<aside class="flex flex-col justify-start ml-4">
  <!-- <PostSearch /> -->

  <h2 class="lg:text-2xl font-extrabold">Sections</h2>


  <div>
  {#each titleSection as section}
    <div class="font-icon font-[2000] lg:text-2xl">
      <a href={"#" + string(section)}>{section}</a>
    </div>
  {/each}
</div>

<div class="lg:text-2xl font-extrabold">Categories</div>
<div class="">
  {#each categories as category}
  <div class="font-icon font-[2000] lg:text-2xl">
    {category}
  </div>
{/each}
</div>
</aside>
