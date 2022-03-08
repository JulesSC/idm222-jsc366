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

    // const tl = new gsap.timeline();

    // tl.to("#img-container", {
    //     duration: 1, 
    //     scaleX: 2, 
    //     scrollTrigger: {
    //         trigger: ".ms-section",
    //         start: "top bottom",
    //         end: "bottom top",
    //         toggleActions: "restart none resume none",
    //         scrub: true,
    //         markers: true
    //     }
    // });

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".starring",
    //       start: "center top",
    //       end: "center bottom",
    //       scrub: true,
    //       markers: true
    //     }
    //   });
    //   tl.to("#img", {rotate: 180, duration: 3})

      let sections = gsap.utils.toArray(".ms-section"),
    currentSection = sections[0];

    gsap.defaults({overwrite: 'auto', duration: 0.3});

    // create a ScrollTrigger for each section
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        // when a new section activates (from either direction), set the section accordinglyl.
        onToggle: self => self.isActive && setSection(section)
      });
    });

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
        gsap.to(newSection, {scale: 1, autoAlpha: 1});
        currentSection = newSection;
      }
    }

    // handles the infinite part, wrapping around at either end....
    // ScrollTrigger.create({
    //   start: 1,
    //   end: () => ScrollTrigger.maxScroll(window) - 1,
    //   onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
    //   onLeave: self => self.scroll(2)
    // }).scroll(2);
}