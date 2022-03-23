import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// export function skillsTrigger(){
  

//   // places element markers at top and bottom of text within first left section, scroll markers at center and bottom of screen
//   gsap.from(".left-1-text", {
//     scrollTrigger:{
//       trigger: ".left-1-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     }, 
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-2-text", {
//     scrollTrigger:{
//       trigger: ".left-2-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-3-text", {
//     scrollTrigger:{
//       trigger: ".left-3-text",
//       sstart: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-4-text", {
//     scrollTrigger:{
//       trigger: ".left-4-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-5-text", {
//     scrollTrigger:{
//       trigger: ".left-5-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-6-text", {
//     scrollTrigger:{
//       trigger: ".left-6-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })

//   gsap.from(".left-7-text", {
//     scrollTrigger:{
//       trigger: ".left-7-text",
//       start: "top center",
//       end: "bottom bottom",
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })
// }