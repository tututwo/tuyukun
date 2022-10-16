<script>
  export let data;
$: console.log(data)
</script>

<main>
  <article>
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
