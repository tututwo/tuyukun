<script>
  
  export let data;

</script>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          <span class="font-extrabold">{post.meta.title}</span>
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
