"use strict";

//Banner-----------------------------------------------------------
let arrBanner = [
  "/Entrega-N2/assets/img/Flyers/bully-flyer.png",
  "/Entrega-N2/assets/img/Flyers/age-flyer.png",
  "/Entrega-N2/assets/img/Flyers/gta-flyer.png",
  "/Entrega-N2/assets/img/Flyers/crash-flyer.png"
];

window.addEventListener("load", cambiar, false);
function cambiar(){
  document.querySelector(".img-banner-home").src = arrBanner[rand(4)-1];
}
function rand(n){
   return(Math.floor(Math.random() * n + 1 ));
}

//profile menu-----------------------------------------------------
document.querySelector(".profile").addEventListener("click", toggleMenu); 

function toggleMenu() {
    document.querySelector(".profile-menu").classList.toggle("show-profile");
}

//casilla pago-----------------------------------------------------
document.querySelector("#casilla-pago").addEventListener("click", hideCasillaPago);

function showCasillaPago(){
  document.querySelector("#casilla-pago").classList.add("show-casilla");
  document.querySelector("#casilla-pago").classList.remove("hide-casilla")
  document.querySelector("#sombra-casilla-pago").classList.add("show-sombra-casilla");
  document.querySelector("#sombra-casilla-pago").classList.remove("hide-sombra-casilla");
}

function hideCasillaPago(){
  document.querySelector("#casilla-pago").classList.remove("show-casilla");
  document.querySelector("#casilla-pago").classList.add("hide-casilla");
  document.querySelector("#sombra-casilla-pago").classList.remove("show-sombra-casilla");
  document.querySelector("#sombra-casilla-pago").classList.add("hide-sombra-casilla");
}


//carrusel 1-------------------------------------------------------
const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");
const carousel1 = document.querySelector(".carousel-container1");
const track1 = document.querySelector(".track1");
let width = carousel1.offsetWidth;
let index1 = 0;
window.addEventListener("resize", function () {
  width = carousel1.offsetWidth;
});
next1.addEventListener("click", function (e) {
  e.preventDefault();
  index1 = index1 + 1;
  prev1.classList.add("show");
  track1.style.transform = "translateX(" + index1 * -width + "px)";
  if (track1.offsetWidth - index1 * width < index1 * width) {
    next1.classList.add("hide");
  }
});


prev1.addEventListener("click", function () {
  index1 = index1 - 1;
  next1.classList.remove("hide");
  if (index1 === 0) {
    prev1.classList.remove("show");
  }
  track1.style.transform = "translateX(" + index1 * -width + "px)";
});

//carrusel 2---------------------------------------------------------
const prev2 = document.querySelector(".p2");
const next2 = document.querySelector(".n2");
const carousel2 = document.querySelector(".carr2");
const track2 = document.querySelector(".track2");
let width2 = carousel2.offsetWidth;
let index2 = 0;
window.addEventListener("resize", function () {
  width = carousel2.offsetWidth;
});
next2.addEventListener("click", function (e) {
  e.preventDefault();
  index2 = index2 + 1;
  prev2.classList.add("show");
  track2.style.transform = "translateX(" + index2 * -width + "px)";
  if (track2.offsetWidth - index2 * width < index2 * width) {
    next2.classList.add("hide");
  }
});
prev2.addEventListener("click", function () {
  index2 = index2 - 1;
  next2.classList.remove("hide");
  if (index2 === 0) {
    prev2.classList.remove("show");
  }
  track2.style.transform = "translateX(" + index2 * -width + "px)";
});


//carrusel 3---------------------------------------------------------
const prev3 = document.querySelector(".p3");
const next3 = document.querySelector(".n3");
const carousel3 = document.querySelector(".carr3");
const track3 = document.querySelector(".track3");
let width3 = carousel3.offsetWidth;
let index3 = 0;
window.addEventListener("resize", function () {
  width = carousel3.offsetWidth;
});
next3.addEventListener("click", function (e) {
  e.preventDefault();
  index3 = index3 + 1;
  prev3.classList.add("show");
  track3.style.transform = "translateX(" + index3 * -width + "px)";
  if (track3.offsetWidth - index3 * width < index3 * width) {
    next3.classList.add("hide");
  }
});
prev3.addEventListener("click", function () {
  index3 = index3 - 1;
  next3.classList.remove("hide");
  if (index3 === 0) {
    prev3.classList.remove("show");
  }
  track3.style.transform = "translateX(" + index3 * -width + "px)";
});



//carrusel 4---------------------------------------------------------
const prev4 = document.querySelector(".p4");
const next4 = document.querySelector(".n4");
const carousel4 = document.querySelector(".carr4");
const track4 = document.querySelector(".track4");
let index4 = 0;
window.addEventListener("resize", function () {
  width = carousel4.offsetWidth;
});
next4.addEventListener("click", function (e) {
  e.preventDefault();
  index4 = index4 + 1;
  prev4.classList.add("show");
  track4.style.transform = "translateX(" + index4 * -width + "px)";
  if (track4.offsetWidth - index4 * width < index4 * width) {
    next4.classList.add("hide");
  }
});
prev4.addEventListener("click", function () {
  index4 = index4 - 1;
  next4.classList.remove("hide");
  if (index4 === 0) {
    prev4.classList.remove("show");
  }
  track4.style.transform = "translateX(" + index4 * -width + "px)";
});



//carrusel 5---------------------------------------------------------
const prev5 = document.querySelector(".p5");
const next5 = document.querySelector(".n5");
const carousel5 = document.querySelector(".carr5");
const track5 = document.querySelector(".track5");
let index5 = 0;
window.addEventListener("resize", function () {
  width = carousel5.offsetWidth;
});
next5.addEventListener("click", function (e) {
  e.preventDefault();
  index5 = index5 + 1;
  prev5.classList.add("show");
  track5.style.transform = "translateX(" + index5 * -width + "px)";
  if (track5.offsetWidth - index5 * width < index5 * width) {
    next5.classList.add("hide");
  }
});
prev5.addEventListener("click", function () {
  index5 = index5 - 1;
  next5.classList.remove("hide");
  if (index5 === 0) {
    prev5.classList.remove("show");
  }
  track5.style.transform = "translateX(" + index5 * -width + "px)";
});

//carrusel 6---------------------------------------------------------
const prev6 = document.querySelector(".p6");
const next6 = document.querySelector(".n6");
const carousel6 = document.querySelector(".carr6");
const track6 = document.querySelector(".track6");
let width6 = carousel6.offsetWidth;
let index6 = 0;
window.addEventListener("resize", function () {
  width = carousel6.offsetWidth;
});
next6.addEventListener("click", function (e) {
  e.preventDefault();
  index6 = index6 + 1;
  prev6.classList.add("show");
  track6.style.transform = "translateX(" + index6 * -width + "px)";
  if (track6.offsetWidth - index6 * width < index6 * width) {
    next6.classList.add("hide");
  }
});
prev6.addEventListener("click", function () {
  index6 = index6 - 1;
  next6.classList.remove("hide");
  if (index6 === 0) {
    prev6.classList.remove("show");
  }
  track6.style.transform = "translateX(" + index6 * -width + "px)";
});


//carrusel 7---------------------------------------------------------
const prev7 = document.querySelector(".p7");
const next7 = document.querySelector(".n7");
const carousel7 = document.querySelector(".carr7");
const track7 = document.querySelector(".track7");
let index7 = 0;
let width7 = carousel7.offsetWidth;
window.addEventListener("resize", function () {
  width = carousel7.offsetWidth;
});
next7.addEventListener("click", function (e) {
  e.preventDefault();
  index7 = index7 + 1;
  prev7.classList.add("show");
  track7.style.transform = "translateX(" + index7 * -width + "px)";
  if (track7.offsetWidth - index7 * width < index7 * width) {
    next7.classList.add("hide");
  }
});
prev7.addEventListener("click", function () {
  index7 = index7 - 1;
  next7.classList.remove("hide");
  if (index7 === 0) {
    prev7.classList.remove("show");
  }
  track7.style.transform = "translateX(" + index7 * -width + "px)";
});

//loading

setTimeout( function(){

  var contenedor = document.getElementById('loading-content');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';

}, 5000);