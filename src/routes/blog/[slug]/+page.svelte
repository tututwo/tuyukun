<script>
  export let data;
  import "./code.css";
</script>

<main>
  <article class="leading-10 lg:text-xl ">
    <!--* Cover Image -->

    <!--* Title and info-->
    <h1 class="lg:text-4xl">{data.title}</h1>
    <div class="">
      Published Date: {data.date}
    </div>

    <!--* Content  -->
    <svelte:component this = {data.content}></svelte:component>
  </article>
</main>

<style>
  /* :global(code) {
   font-size:30px
  } */
</style>