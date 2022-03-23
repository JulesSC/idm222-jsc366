import { gsap } from "gsap";

const mainTL = gsap.timeline();

export function circleRotate(){
    const tl = gsap.timeline();
    tl.to("#img", {duration:8, rotate: 360, transformOrigin: '50% 50%', repeat: -1, ease: "none"})
}