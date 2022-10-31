<script>
    import { gsap, Flip } from "../../scripts/gsap";
    import { onMount, tick } from "svelte";
    import { path } from "d3-path";
    export let data;

    let pathElement;
    let pathLength = 0;

    const val = { distance: 0 };
    function transition() {}
    // https://greensock.com/forums/topic/28849-how-to-make-gsap-draggable-stop-on-click-and-start-on-click/
    /**
     * Blog Curve
     */
    let blogSectionWidth = 1500;
    let blogSectionHeight = 400;

    $: sideLineLength =
        ((blogSectionWidth * data.posts.length) / 2.5 - blogSectionWidth) * 0.5;

    function draw(context) {
        context.moveTo(-sideLineLength, blogSectionHeight); // move current point to ⟨10,10⟩
        context.lineTo(0, blogSectionHeight); // draw straight line to ⟨100,10⟩
        context.quadraticCurveTo(
            blogSectionWidth / 2,
            0,
            blogSectionWidth,
            blogSectionHeight
        ); // draw an arc, the turtle ends up at ⟨194.4,108.5⟩
        context.lineTo(blogSectionWidth + sideLineLength, blogSectionHeight); // draw straight line to ⟨300,10⟩

        return context; // not mandatory, but will make it easier to chain operations
    }
    $: {
        if (pathElement && blogSectionWidth > 1000) {
            pathLength = pathElement.getTotalLength();
            console.log(pathLength);
        }
    }
    // onMount(async () => {
    //     await transition();
    //     await tick()
    //     pathLength = pathElement.getTotalLength();
    //     console.log(pathLength)
    // });
</script>

{#if pathElement}
    <div class="relative overflow-x">
        {#each data.posts as post, index}
            {@const cardLocation = pathElement.getPointAtLength(
                (pathLength / data.posts.length) * index
            )}

            <!-- <div class="absolute border-2 w-[10%] h-[200px]" id = "project-card" style = "--left: {pathLength / data.posts.length * (index + 1)}px"> -->
            <div
                class="absolute border-2 w-[60%] h-[200px]"
                id="project-card"
                style="--left: {cardLocation.x}px; --top: {cardLocation.y}px"
            >
                <h2>
                    <a href={post.path}>
                        <span class="font-extrabold">{post.meta.title}</span>
                    </a>
                </h2>
                Published {post.meta.date}

                {#each post.meta.categories as category}
                    <div>{category}</div>
                {/each}
            </div>
        {/each}
    </div>
{/if}
<div
    class="w-full h-[100vh] overflow-auto"
    bind:clientWidth={blogSectionWidth}
    bind:clientHeight={blogSectionHeight}
>
    <svg>
        <!-- d={path_call["_"]} -->
        <path
            d={draw(path()).toString()}
            bind:this={pathElement}
            stroke="pink"
            fill="none"
            stroke-width="10px"
        />
    </svg>
</div>

<style>
    #project-card {
        left: var(--left);
        top: var(--top);
    }

    svg {
        width: 1000%;
        height: 100%;
    }
</style>
