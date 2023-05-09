import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip.js";
import { Draggable } from "gsap/dist/Draggable.js";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, InertiaPlugin, Flip, ScrollTrigger);
}
