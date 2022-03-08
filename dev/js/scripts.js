import { skillsTrigger } from "./scrollAnimation";

window.addEventListener('load', function(){
    skillsTrigger();
});

$(function(){
    $('#multiscroll').multiscroll({
        navigation: true,
		navigationPosition: 'left',
		navigationColor: '#FFF'
    })
});


