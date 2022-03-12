import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function skillsTrigger(){
  
  // gsap.from(".left-1-text", {
  //   scrollTrigger:{
  //     trigger: ".left-1-text",
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     toggleActions: "restart none resume none",
  //     markers: true,
  //     scrub: true
  //   }, 
  //   duration:0.5,
  //   y:-65,
  //   ease: "power1.out",
  //   stagger: 0.05
  // })

  gsap.from(".left-2-text", {
    scrollTrigger:{
      trigger: ".left-2-text",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "restart none resume none",
      markers: true,
      scrub: true
    },
    duration:0.5,
    y:-65,
    ease: "power1.out",
    stagger: 0.05
  })

//   gsap.from(".left-3-text", {
//     scrollTrigger:{
//       trigger: ".left-3-text",
//       start: "top center",
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
//       toggleActions: "restart none resume none",
//       markers: true,
//       scrub: true
//     },
//     duration:0.5,
//     y:-65,
//     ease: "power1.out",
//     stagger: 0.05
//   })
}