<script>
    import { onMount } from "svelte";
    import Icon from '@iconify/svelte';

    onMount(() => {
        let isChrome = navigator.userAgent.toLowerCase().match(/chrome/);
        let doodle = document.querySelector("css-doodle");
        if (doodle && isChrome) {
            doodle.use = "var(--rule)";
        }
    });
    let height = 10;
    let flip = false;
    $: console.log(flip);
    let projectCardInfo = [
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image3-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image11-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image10-3.png",
            category: ["QGIS"],
        },
        {
            projectName: "The elevation of Jiangxi Province",
            projectDescription:
                "This is a water-ink styled map of my hometown, Jiangxi Province, in China. The map is created with QGIS.",
            projectLink:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png",
            projectImgSource:
                "https://blog.datawrapper.de/wp-content/uploads/2022/08/image13-4.png",
            category: ["QGIS"],
        },
    ];
</script>

<header class="relative w-full h-[500px] flex items-center justify-center">
    <div class="grid">
        <div>Hi, I'm Gordon Tu. I make</div>
        <div class="font-bold font-heading text-[5rem]">
            <span class="bg-[#DD504C] rounded-3xl text-white px-2">Charts</span> 
            <span class="bg-[#63ACD1] rounded-3xl text-white px-2">Maps</span> 
            <span class="bg-[#ffde7d] rounded-3xl text-white px-2">Creative Coding</span>
        </div>
        <div>
            on the web, and I also write 
            <span class="bg-[#B6BFC6] rounded-xl text-white px-2 font-bold font-heading text-[2rem]">Blogs</span> 
            <button><Icon icon="material-symbols:arrow-circle-right-outline-rounded" /></button>
        </div>
    </div>
    <!-- https://css-doodle.com -->
    <div class="absolute h-full w-full flex top-10 items-start justify-center">
        <!-- <style>
            css-doodle {
                --rule: (
                    : doodle {@grid: 80x1 / 100vw 100vh; @min-size: 100px;
                        filter: url(#filter) ; will-change: transform; animation:
                        r 23s linear infinite;} @size: 100% 50%; position: absolute;
                        top: 25%; transform: rotate(@r (360deg)) ; perspective: 130px;:
                        after {content: "" ; position: absolute; @size: @r
                        (10px) ; will-change: transform; animation: cycle @r
                        (2s, 8s) linear infinite; animation-delay: -@r (100s) ; background:
                        #638373; box-shadow: @m3 (0 0 calc(0.5vmin + 5px) #fff) ;
                        --trans: scaleX(@r (0.1, 5)) translateZ(105px) ; transform:
                        rotateY(0) @var (--trans) ;} @keyframes cycle {to {transform:
                        rotateY(@p (-1turn, 1turn)) @var (--trans) ;}}
                        @keyframes r {to {transform: rotate(@p (-1turn, 1turn))}}
                );
            }
        </style>

        <css-doodle click-to-update></css-doodle>

        <svg style="width: 0; height:0">
        <filter id="filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg> -->
        <css-doodle>
            {`
    :doodle {
      @grid: 12 / 90vmin 90vmin;
      perspective: 90vmin;
      perspective-origin: 0% -140%;
      transform: scale(3);
    }
  
    :container {
      transform-style: preserve-3d;
      animation: camera 20s ease-in-out infinite;
      animation-direction: alternate-reverse;
    }
  
    --ds: @r(4s, 12s, .1);
    --size: @r(1, 9);
    
    /* Thanks to mootari for the tip */
    --z: calc(@i() * .0001px + var(--size) * .1px);
  
    animation:
      move var(--ds) linear infinite,
      opacity var(--ds) linear infinite;
    
    animation-delay: 
      calc((@row() - @size-row()) * var(--ds) / @size-row() - @r(@size()) * .1s);
    
    :after {
      content: '';
      @size: calc(var(--size) * 10%);
      background: @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d);
   
    }
  
    position: absolute;
    left: calc(@col() * 100% / @size-row());
    @size: calc(100% / @size-row());
    
    @keyframes move {
      0% {
        transform: 
          translate3d(0, 0, calc(var(--z) - 15vmin)) 
          rotateX(180deg) scaleY(.01);
      }
      10% {
        transform: 
          translate3d(0, calc(10% * @size-row()), var(--z)) 
          rotateX(0) scaleY(.8);
      }
      90% {
        transform: 
          translate3d(0, calc(90% * @size-row()), var(--z)) 
          scale(1);
      }
      100% {
        transform: 
          translate3d(0, calc(100% * @size-row()), calc(var(--z) + 5vmin)) 
          scale(.5);
      }
    }
  
    @keyframes opacity {
      0%, 100% { opacity: 0; }
      10%, 90% { opacity: .9; }
    }
  
    @keyframes camera {
      from {
        transform: rotateX(-45deg) rotate(140deg) translateY(-10%);
      }
      to {
        transform: rotateX(-45deg) rotate(220deg) translateY(-10%);
      }
    }
    `}
        </css-doodle>
    </div>
</header>

<main class="flex flex-col items-center justify-center ">
    <!--* Project  -->
    <!-- <section class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-projectCol gap-x-4"> -->
    <!-- <section class="flex flex-wrap flex-col max-h-[1000px]"> -->
    <!-- https://codepen.io/93lucasp/pen/rNJgapY?editors=1010 -->
    <!-- <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-projectCol"> -->
    <!-- <section class="columns-1 lg:columns-3 lg:mx-[100px] lg:gap-4">
        {#each projectCardInfo as { projectName, projectDescription, projectLink, projectImgSource }}
            <article class="relative group w-full lg:mb-2 rounded-lg ">
                <div
                    class="absolute py-10 w-full h-full bg-gray-300 opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out"
                >
                    <h2>{projectName}</h2>
                    <p class="text-black truncate">
                        {projectDescription}
                    </p>
                </div>
                <a href={projectLink} class="relative">
                    <img
                        alt="foreground"
                        class="group-hover:opacity-20 inset-0 object-cover pointer-events-none"
                        src={projectImgSource}
                    />
                </a>
            </article>
        {/each}
    </section> -->

    <!--* Project  -->
    <section class="flex ">
        <div class="postcard hover border-3 border-black BORDER-B-8">
            <div class="front border-18 border-black" />

            <div class="back">
                <div class="message">
                    <p>Dude!</p>
                    <p>Having a great time in the desert!</p>
                    <p>
                        Saw my first camel today, but its not the same without
                        you here.
                    </p>
                    <p>Talk soon,</p>
                    <p>D x</p>
                </div>
                <div class="address">
                    <p>Eight Arms Head Office</p>
                    <p>London</p>
                    <p>E3 2PX</p>
                    <p><a href="https://eightarms.co.uk">eightarms.co.uk</a></p>
                </div>
                <div class="photo-by">
                    Photo by the incredible <a
                        href="http://www.fluidr.com/photos/8181572@N05/interesting"
                        >Dave Carr</a
                    >
                </div>
                <div class="stamp">
                    <div class="inner">S</div>
                </div>
            </div>
        </div>

        <div class="postcard hover border-8 border-black mb-20">
            <div class="front border-18 border-black">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="/projects/chart_broadway.png" />
            </div>

            <div class="back">
                <div class="message">
                    <p>Dude!</p>
                    <p>Having a great time in the desert!</p>
                    <p>
                        Saw my first camel today, but its not the same without
                        you here.
                    </p>
                    <p>Talk soon,</p>
                    <p>D x</p>
                </div>
                <div class="address">
                    <p>Eight Arms Head Office</p>
                    <p>London</p>
                    <p>E3 2PX</p>
                    <p><a href="https://eightarms.co.uk">eightarms.co.uk</a></p>
                </div>
                <div class="photo-by">
                    Photo by the incredible <a
                        href="http://www.fluidr.com/photos/8181572@N05/interesting"
                        >Dave Carr</a
                    >
                </div>
                <div class="stamp">
                    <div class="inner">S</div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="flex items-center justify-center">
    Give thanks to family and friends
</footer>
<svelte:head>
    <script
        defer
        src="https://unpkg.com/css-doodle@0.30.8/css-doodle.js"
    ></script>
</svelte:head>

<style lang="scss">
    // .absolute {
    //     width: 100%;
    //     height: 100%;
    //     margin: 0;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     background: radial-gradient(#c0d6cb, #314d4c);
    //     overflow: hidden;
    // }

    $stamp: #eb8046;

    .postcard {
        width: 600px;
        position: relative;
        margin: 0 auto;
        height: 400px;
    }

    .front,
    .back {
        box-shadow: 0 0 20px 0 #999;
        width: 600px;
        height: 400px;
        overflow: hidden;
        width: 580px;
        height: 380px;
        overflow: hidden;
        border: 10px solid #fff;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front {
        -webkit-transform: rotateX(0deg) rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;

        -moz-transform: rotateX(0deg) rotateY(0deg);
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;

        /* -- transition is the magic sauce for animation -- */
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        background-image: url("/projects/svelte_teacherSalary.png");
    }

    .postcard:hover .front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);

        -moz-box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    }
    .back {
        -webkit-transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;

        -moz-transform: rotateY(-180deg);
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;

        /* -- transition is the magic sauce for animation -- */
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .postcard:hover .back {
        z-index: 1000;

        -webkit-transform: rotateX(0deg) rotateY(0deg);
        -moz-transform: rotateX(0deg) rotateY(0deg);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .message,
    .address {
        font-family: "Swanky and Moo Moo", cursive;
    }

    .message {
        float: left;
        width: 300px;
        box-sizing: border-box;
        padding: 4em 2em 2em;
    }

    .message:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 300px;
        background: #eaeaea;
        top: 30px;
        left: 300px;
    }

    .address {
        float: left;
        width: 250px;
        box-sizing: border-box;
        padding: 7em 2em 2em;

        p {
            margin: 0.5em 0 0;
        }
    }

    .photo-by {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #777;
        font-size: 0.4em;
    }

    .stamp {
        width: 50px;
        height: 60px;
        position: absolute;
        top: 10px;
        right: 10px;
        background: $stamp;
        padding: 5px;
        border: 2px dotted #fff;
        .inner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            position: absolute;
            top: 5px;
            bottom: 5px;
            left: 5px;
            right: 5px;
            color: #fff;
            font-family: roboto, serif;
            font-weight: 100;
            font-size: 2em;
            padding-top: 4px;
            text-align: center;
        }
    }
</style>
