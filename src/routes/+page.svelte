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
  <!-- <section class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-projectCol gap-x-4"> -->
  <!-- <section class="flex flex-wrap flex-col max-h-[1000px]"> -->
    <!-- https://codepen.io/93lucasp/pen/rNJgapY?editors=1010 -->
  <!-- <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-projectCol"> -->
  <section class="columns-1 lg:columns-3 lg:mx-[100px] lg:gap-4">
    {#each projectCardInfo as {projectName, projectDescription, projectLink, projectImgSource}}
      <article class="relative group w-full lg:mb-2 rounded-lg ">
        <div
            class="absolute py-10 w-full h-full bg-gray-300 opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out"
            >
            <h2>{projectName}</h2>
            <p class="text-black truncate">
              {projectDescription}
            </p>
          </div>
        <a
          href="{projectLink}"
          class="relative"
          >
          <img
            alt="foreground"
            class="group-hover:opacity-20 inset-0 object-cover pointer-events-none"
            src="{projectImgSource}"
          />
          
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
