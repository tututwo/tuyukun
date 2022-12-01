<script>
    import Icon from "@iconify/svelte";

    import Project from "$lib/project/project.svelte";
    import BlogSection from "$lib/blogSection/BlogSection.svelte";

    import { gsap, ScrollTrigger } from "$lib/utils/scripts/gsap";
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    let options = {};

    import { projectCardInfo } from "$lib/project/project";

    $: currentProjectTitleTag = $projectCardInfo;
    /*
     * Project
     */
    let projectSectionNodes = [];
    function filterProjectButton(event) {
        // list = list.filter(n => n !== number)

        currentProjectTitleTag = $projectCardInfo.filter(
            (d) => d.titleTag == event.target.textContent
        );
        console.log(currentProjectTitleTag);
    }
    onMount(async () => {
        let eachProject = await projectSectionNodes.children;
        // console.log(eachProject)
        gsap.to("section", {
            x: 0,
        });
    });

    function showBlogSelection() {
        currentProjectTitleTag = [];
    }
</script>

<header class="relative w-full h-[500px] flex items-center justify-center">
    <div class="grid">
        <div>Hi, I'm Gordon Tu. I make</div>
        <div class="font-bold font-heading text-[5rem]">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#DD504C] rounded-3xl text-white px-2"
                on:click={filterProjectButton}>Charts</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#63ACD1] rounded-3xl text-white px-2"
                on:click={filterProjectButton}>Maps</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#ffde7d] rounded-3xl text-white px-2"
                on:click={filterProjectButton}>Creative Coding</span
            >
        </div>
        <div>
            on the web, and I also write
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
                class="bg-[#B6BFC6] rounded-xl text-white px-2 font-bold font-heading text-[2rem]"
                on:click={showBlogSelection}>Blogs</span
            >
            <button on:click={showBlogSelection}>
                <Icon
                    icon="material-symbols:arrow-circle-right-outline-rounded"
                /></button
            >
        </div>
    </div>
</header>

<main class="flex flex-col items-center justify-center h-full w-full">
    <!--* Project  -->
    {#key currentProjectTitleTag}
        <section class="flex flex-wrap" bind:this={projectSectionNodes}>
            {#each currentProjectTitleTag as individualProject (individualProject.id)}
                <div
                    animate:flip={options}
                    class="postcard hover lg:w-[600px] lg:h-[400px] m-0 relative border-3 border-black BORDER-B-8"
                >
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
