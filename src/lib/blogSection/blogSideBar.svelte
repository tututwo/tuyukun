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

  // $: console.log(categories);
</script>

<aside class="flex flex-col justify-start ml-4">
  <!-- <PostSearch /> -->

  <h2 class="lg:text-2xl font-extrabold font-heading">Sections</h2>


  <div>
  {#each titleSection as section}
    <div class="font-light lg:text-lg">
      <a href={"#" + string(section)}>{section}</a>
    </div>
  {/each}
</div>

<div class="lg:text-2xl font-extrabold font-heading mt-4 mb-2">Categories</div>
<div class="flex gap-x-4 ">
  {#each categories as category}
  <a href="/blog/category/{category}" class="font-[2000] lg:text-lg bg-[#9AC6BD] text-white px-2 rounded-lg hover:bg-[#F7D138] transition-colors ease-in-out">
    {category}
  </a>
{/each}
</div>
</aside>
