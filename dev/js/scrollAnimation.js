import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function skillsTrigger(){

    // var rotate = gsap.timeline({
    //     scrollTrigger:{
    //       trigger: ".ms-section",
    //       scrub:0.2,
    //       start: 'top top',
    //       end:'bottom bottom',
    //       markers: true
    //     }
    //   })
    //   .to('#img-container', {
    //     rotation:360*5,
    //     duration:1, ease:'none'
    //   })

    const tl = new gsap.timeline();

    tl.from("#img-container", {
        duration: 3, 
        scaleY: 0, 
        transformOrigin: "top center",
        scrollTrigger: {
            trigger: ".ms-section",
            start: "top top",
            end: "bottom bottom",
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        }
    });
}