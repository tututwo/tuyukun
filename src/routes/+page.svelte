<script>
  let height = 10;

  let projectCardInfo = [
    { 
      projectName: "The elevation of Jiangxi Province",
      projectDescription: "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
      projectLink: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png" , 
      projectImgSource: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png",
      category: ["QGIS"]
    },
    { 
      projectName: "The elevation of Jiangxi Province",
      projectDescription: "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
      projectLink: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png" , 
      projectImgSource: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png",
      category: ["QGIS"]
    },
    { 
      projectName: "The elevation of Jiangxi Province",
      projectDescription: "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
      projectLink: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png" , 
      projectImgSource: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png",
      category: ["QGIS"]
    },
    { 
      projectName: "The elevation of Jiangxi Province",
      projectDescription: "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
      projectLink: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png" , 
      projectImgSource: "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png",
      category: ["QGIS"]
    },
  ]
</script>

<header>This the creative section</header>

<main class="flex flex-col items-center justify-center ">
  Project Card Comes Here

  <!--* Project  -->
  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li class="relative">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="object-cover pointer-events-none group-hover:opacity-75">
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for IMG_4985.HEIC</span>
        </button>
      </div>
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4985.HEIC</p>
      <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
    </li>
  
    <!-- More files... -->
  </ul>
  <!-- <section class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-projectCol gap-x-4"> -->
  <section class="flex flex-wrap">
    {#each projectCardInfo as {projectName, projectDescription, projectLink, projectImgSource}}
      <article class="grow shrink basis-1/3 col-span-1 border-solid border-2 ">
        <a
          href="{projectLink}"
          class="relative"
          >
          <img
            alt="foreground"
            class=" inset-0 object-cover pointer-events-none"
            src="{projectImgSource}"
          />
          <div
            class=" py-10 w-full h-full bg-gray-300 opacity-0 hover:opacity-70 transition duration-1000 ease-in-out"
            >
            <h2>{projectName}</h2>
            <p class="text-black">
              {projectDescription}
            </p>
          </div>
        </a>
      </article>
    {/each}
  </section>

  <!--* Post  -->
  <section>
    <article></article>
  </section>
</main>

<footer class="flex items-center justify-center">Give thanks to family and friends</footer>
