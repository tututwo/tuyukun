<script>
    import { Canvas, InteractiveObject, OrbitControls, T, Three } from "@threlte/core";
    import { useTexture } from "@threlte/core";
    import { useLoader } from "@threlte/core";
    import { spring } from "svelte/motion";
    import { degToRad } from "three/src/math/MathUtils";

	import {
		PerspectiveCamera,
		ShaderMaterial,
		AdditiveBlending,
		Mesh, 
		PlaneGeometry, 
		MeshBasicMaterial
	} from 'three';


    import { onMount } from "svelte";
    //* window metrics
    $: outerWidth = 0;
    $: innerWidth = 0;
    $: outerHeight = 0;
    $: innerHeight = 0;

    const scale = spring(1);
    const perspective = 800;
    $: fov = (180 * (2 * Math.atan(innerHeight / 2 / perspective))) / Math.PI;

    //* texture: for each blog cover
    const tex = useTexture("/demo.png");
    let oneCanvas;
    onMount(() => {
        const { width, height, top, left } = oneCanvas.getBoundingClientRect();
    });
</script>

<svelte:window
    bind:innerWidth
    bind:outerWidth
    bind:innerHeight
    bind:outerHeight
/>

<div class="" bind:this={oneCanvas}>
    <Canvas>
        <T.PerspectiveCamera makeDefault position={[0, 0, perspective]} fov>
            <!-- <OrbitControls
                maxPolarAngle={degToRad(80)}
                enableZoom={false}
                target={{ y: 0.5 }}
            /> -->
        </T.PerspectiveCamera>

        <T.DirectionalLight castShadow position={[3, 10, 10]} />
        <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
        <T.AmbientLight intensity={0.2} />

        <!-- Floor -->
		<Three type = {Mesh} >
  			<Three type = {PlaneGeometry} args = {[30,30]} on:mouseover = {(e) => {
				console.log("Mouseover a plane")
			}}></Three>
			<Three type={MeshBasicMaterial} color = "white" map={tex} />
		</Three>
    </Canvas>
</div>

<style>
    div {
        height: 1000px;
        height: 600px;
    }
</style>
