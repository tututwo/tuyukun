<script>
  export let data;
  import "./code.css";
  import "./blog.css";
  // $: console.log(data)
</script>

<main class="overflow-auto">
  <article class="leading-10 lg:text-xl ">

      <!-- {#each data.titleSection as section}
      <h1>{section}</h1>
      {/each} -->

    <!--* Cover Image -->

    <!--* Title and info-->
    <h1 class="lg:text-4xl font-heading font-bold">{data.title}</h1>
    <div class="">
      Published Date: {data.date}
    </div>

    <!--* Content  -->
    <div class="content">
      <svelte:component this={data.content} />
    </div>
  </article>
</main>

<style global>
  .content p a {
    border-bottom: 2px solid #9ab9c7;
    color: #9ab9c7;
  }
  .content p a:visited {
    border-bottom: 2px solid #c4b0a0;
    color: #c4b0a0;
  }
  .content p a:hover {
    border-bottom: 0px;
  }
  .content li > a {
    border-bottom: 2px solid #9ab9c7;
    color: #9ab9c7;
  }

  .content li > a:visited {
    border-bottom: 2px solid #c4b0a0;
    color: #c4b0a0;
  }
  .content li > a:hover {
    border-bottom: 0px;
  }

  .content blockquote > p {
    /* background-color: lightgrey;
    padding: 0.2em;
    width: fit-content; */
  }
  .content blockquote > p {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
  .content blockquote:before {
    color: #ccc;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  /*
  *Inline code 
  */
  .content :not(pre) > code {
    color: white;
    background-color: #9ab9c7;
    border-radius: 5px;
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
  }
</style>
