"use strict"

let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let bg2 = document.getElementById("bg2");
let boone = document.getElementById("boone");
let ede = document.getElementById("ede");

window.addEventListener('scroll', function(){
    var value = this.window.scrollY;
    const triggerBottom = window.innerHeight/ 5*4;

    bg.style.top = value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    text2.style.top = -value * 1 + 'px';
    if(value >= triggerBottom){
        //text3.style.top = value * 0.1 + 'px';
        //bg2.style.top = value * 1 + 'px';
        boone.style.top = -value * 0.8 + 'px'; 
        ede.style.top = -value * 0.87 + 'px'; 
    }
})
