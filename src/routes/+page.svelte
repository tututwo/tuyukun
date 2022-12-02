<script>
    import Icon from "@iconify/svelte";
    import { annotate } from "svelte-rough-notation";

    import Project from "$lib/project/project.svelte";
    import BlogSection from "$lib/blogSection/BlogSection.svelte";

    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { gsapOut, gsapIn } from "$lib/utils/tweens";
    let options = {};

    import { projectCardInfo } from "$lib/project/project";

    /**
     * Title
     */
    let headerWidth = 1000;
    $: console.log(headerWidth);
    /*
     * Project
     */

    $: currentProjectTitleTag = $projectCardInfo;
    let projectNodes = [];
    function filterProjectButton(event) {
        currentProjectTitleTag = $projectCardInfo.filter(
            (d) => d.titleTag == event.target.textContent
        );
    }

    /**
     * Blog
     */
    function showBlogSelection() {
        currentProjectTitleTag = [];
    }
</script>

<header
    class="relative w-full lg:h-[50vh] flex items-center justify-center font-bold text-[2.rem]"
>
    <div class="grid" bind:offsetWidth={headerWidth}>
        <div>Hi, I'm Gordon Tu. I make</div>
        <!--* Project -->
        <div class="font-black font-heading text-[5rem] cursor-pointer">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#DD504C] rounded-3xl text-white px-2 pb-2"
                on:click={filterProjectButton}>Charts</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#63ACD1] rounded-3xl text-white px-2 pb-2"
                on:click={filterProjectButton}>Maps</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#ffde7d] rounded-3xl text-white px-2 pb-2"
                on:click={filterProjectButton}>Creative Coding</span
            >
        </div>
        <!--* Blog -->
        <div>
            on the web, and I also write
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                use:annotate={{
                    visible: true,
                    color: "#33BFB1",
                    type: "underline",
                    animationDuration: 1000,
                    strokeWidth: 6,
                }}
                class="cursor-pointer font-bold font-heading text-[2rem]"
                on:click={showBlogSelection}>Blogs</span
            >
            <button on:click={showBlogSelection}>
                <Icon icon="ph:cursor-fill" /></button
            >
        </div>
        <!--* Icon -->
        <div class="flex mr-10">
            <a href="https://twitter.com/tu_yukun" class="px-2"
                ><Icon
                    class="hover:color-[grey]"
                    icon="akar-icons:twitter-fill"
                /></a
            >
            <a href="https://github.com/tututwo" class="px-2"
                ><Icon icon="akar-icons:github-fill" /></a
            >
            <a href="https://observablehq.com/@tututwo?tab=profile" class="px-2"
                ><Icon icon="simple-icons:observable" /></a
            >
        </div>
    </div>
</header>

<main class="w-full h-full flex items-center justify-center" >
    <!--* Project  -->
    {#key currentProjectTitleTag}
    <!-- style:width={headerWidth +"px"} -->
        <section class="flex items-center justify-start flex-wrap h-full w-full"  >
            {#each currentProjectTitleTag as individualProject, i (individualProject.id)}
                <div
                    in:gsapIn
                    out:gsapOut={{
                        currentProjectTitleTagLength:
                            currentProjectTitleTag.length,
                    }}
                    class="postcard hover"
                    bind:this={projectNodes[i]}
                >
                <!--  lg:w-1/3 lg:h-[400px] mb-10 px-4 relative border-2 border-black flex justify-center items-center -->
                    <Project {individualProject} />
                </div>
            {/each}
        </section>
    {/key}

    <!--* Blog -->
    {#if currentProjectTitleTag.length == 0}
        <BlogSection />
    {/if}
</main>

<footer class="flex items-center justify-center">
    Give thanks to family and friends
</footer>

<style>
    .postcard {
        width: 33%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>