import { gsap, ScrollTrigger } from "$lib/utils/scripts/gsap";

export function gsapOut(node, {currentProjectTitleTagLength=1}) {
    //https://greensock.com/forums/topic/25720-gsap-and-svelte/#comment-125958
    let duration = 1;
    let betweenProjectTimeline = gsap.timeline();
    let ProjectToBlogTimeline = gsap.timeline();

    if (currentProjectTitleTagLength == 0) {
        ProjectToBlogTimeline.to(node, {
            duration,
            x: 11000,
        });
        return {
            duration: duration * 1000,
            tick: (t, u) => {
                ProjectToBlogTimeline.progress(u);
            },
        };
    }

    betweenProjectTimeline.to(node, {
        duration,
        scale: 0.05,
        delay:1.5
    });

    return {
        duration: duration * 1000,
        tick: (t, u) => {
            betweenProjectTimeline.progress(u);
        },
    };
}
export function gsapIn(node, {currentProjectTitleTagLength=1}) {
    //https://greensock.com/forums/topic/25720-gsap-and-svelte/#comment-125958
    let duration = 1;
    let betweenProjectTimeline = gsap.timeline();
    let ProjectToBlogTimeline = gsap.timeline();

    if (currentProjectTitleTagLength == 0) {
        ProjectToBlogTimeline.to(node, {
            duration,
            x: -1000,
        });
        return {
            duration: duration * 1000,
            tick: (t, u) => {
                ProjectToBlogTimeline.progress(u);
            },
        };
    }

    betweenProjectTimeline.from(node, {
        duration,
        scale:.05,
        delay:0.5
    });

    return {
        duration: duration * 1000,
        tick: (t, u) => {
            betweenProjectTimeline.progress(t);
        },
    };
}