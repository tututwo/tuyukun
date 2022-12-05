<script>
    import Icon from "@iconify/svelte";
    // import { annotate } from "svelte-rough-notation";
    import { annotateAction, titleTagVisibility } from "$lib/utils/landingPage";
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
    let titleTags = [
        {tag: "Charts", color: "#E4523E"},
        {tag: "Maps", color: "#81ABD9"},
        {tag: "Creative Coding", color: "#0EAEC9"}
    ];
    let tagTextColor = "black";

    let tagNodes = []
    /*
     * Project
     */

    $: currentProjectTitleTag = $projectCardInfo.sort((a,b) => {return new Date(b.date) - new Date(a.date);});
    let projectNodes = [];

    let visible = false
    function filterProjectButton(event) {
        currentProjectTitleTag = $projectCardInfo.filter(
            // .textContent will not work
            // https://stackoverflow.com/questions/24427621/innertext-vs-innerhtml-vs-label-vs-text-vs-textcontent-vs-outertext
            (d) => d.titleTag == event.target.innerText
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
    class="relative w-full lg:h-[50vh] flex items-center justify-center font-bold text-[1.3rem]"
>
    <div class="grid" bind:offsetWidth={headerWidth}>
        <div class="clearText">
            <div class="actualClearText">Hi, I'm Gordon Tu. I make</div>
        </div>
        <!--* Project Tags -->
        <div
            class="font-black font-heading text-[2rem] cursor-pointer flex items-center justify-start clearText"
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#each titleTags as {tag, color}, index}
                <div
                    class="actualClearText mx-2 pb-2 mt-2  flex items-center justify-center w-[20vw] text-[2rem] tracking-tight"
                    style="color: {"white"}"
                    bind:this = {tagNodes[index]}
                    on:click={filterProjectButton}
                    use:annotateAction={{
                        visible: true,
                        color: color,
                        type: "highlight",
                        animationDuration: 1000,
                        padding: 10,
                    }}
                >
                    {tag}
                </div>
            {/each}
        </div>
        <!--* Blog Tag -->
        <div class="clearText">
            <div class="actualClearText">
                on the web, and I also write
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span
                    use:annotateAction={{
                        visible: true,
                        color: "#33BFB1",
                        type: "underline",
                        animationDuration: 1000,
                        strokeWidth: 6,
                    }}
                    class="cursor-pointer font-bold font-heading text-[2rem] "
                    on:click={showBlogSelection}>Blogs</span
                >
                <button on:click={showBlogSelection}>
                    <Icon icon="ph:cursor-fill" /></button
                >
            </div>
        </div>
        <!--* Icon -->
        <div class="flex mr-10">
            <a href="https://twitter.com/tu_yukun" class="mx-2"
                ><Icon
                    class="hover:color-[grey]"
                    icon="akar-icons:twitter-fill"
                /></a
            >
            <a href="https://github.com/tututwo" class="mx-2"
                ><Icon icon="akar-icons:github-fill" /></a
            >
            <a href="https://observablehq.com/@tututwo?tab=profile" class="mx-2"
                ><Icon icon="simple-icons:observable" /></a
            >
        </div>
    </div>
</header>
<!-- in:gsapIn
out:gsapOut={{
    currentProjectTitleTagLength:
        currentProjectTitleTag.length,
}} -->
<main class="h-full min-h-[2000px] w-full flex items-center justify-center" >
    <!--* Project  -->
    {#if currentProjectTitleTag.length > 0}
        {#key currentProjectTitleTag}
            <!-- style:width={headerWidth +"px"} -->
            <!-- flex items-center justify-start flex-wrap h-full w-full -->
            <section
                class="h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2"
                style:width={headerWidth +"px"}
            >
                {#each currentProjectTitleTag as individualProject, i (individualProject.projectName)}
                    <div
                        id={individualProject.projectName}
                        class="postcard hover lg:w-[90%] gap-[10rem] lg:h-[400px] mb-10 relative flex justify-center items-center"
                        bind:this={projectNodes[i]}
                    >
                        <!--  -->
                        <Project {individualProject} />
                    </div>
                {/each}
            </section>
        {/key}
    {/if}
    <!--* Blog -->
    {#if currentProjectTitleTag.length == 0}
        <BlogSection />
    {/if}
</main>

<footer class="flex items-center justify-center">
    Give thanks to family and friends
</footer>

<style>
    :global(.rough-annotation) {
        z-index: 999;
    }
    :global(.rough-annotation:hover) {
        opacity: .4
    }
    .clearText {
        position: relative;

        width: fit-content;
    }

    .clearText::before {
        content: "";
        background-color: white;
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.85;
        border-radius: 0.21rem;
    }

    .actualClearText {
        position: relative;

        font-size: 1em;
        line-height: 0.9;
        z-index: 1000;
    }
</style>
