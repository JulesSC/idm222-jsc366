import { gsap } from "gsap";
import { skillsTrigger } from "./scrollAnimation";
import { circleRotate } from "./circleRotate";

window.addEventListener('load', function(){
    circleRotate();
    skillsTrigger();
});

$(function(){
    $('#multiscroll').multiscroll({
        navigation: true,
		navigationPosition: 'left',
		navigationColor: '#FFF',

        // snaps to normal scroll at md screen size
        responsiveWidth: 768,
        responsiveExpand: true
    })
});


