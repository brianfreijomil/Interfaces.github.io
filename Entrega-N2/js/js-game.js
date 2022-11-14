"use strict";

//imagenes demostrativas----------------------------------------------------
document.querySelector("#img-h1").addEventListener("click", showImgBig1);
document.querySelector("#img-big1").addEventListener("click", hideImgBig1);
document.querySelector("#img-h2").addEventListener("click", showImgBig2);
document.querySelector("#img-big2").addEventListener("click", hideImgBig2);
document.querySelector("#img-h3").addEventListener("click", showImgBig3);
document.querySelector("#img-big3").addEventListener("click", hideImgBig3);
document.querySelector("#img-h4").addEventListener("click", showImgBig4);
document.querySelector("#img-big4").addEventListener("click", hideImgBig4);
document.querySelector("#img-h5").addEventListener("click", showImgBig5);
document.querySelector("#img-big5").addEventListener("click", hideImgBig5);
document.querySelector("#img-h6").addEventListener("click", showImgBig6);
document.querySelector("#img-big6").addEventListener("click", hideImgBig6);
document.querySelector("#img-h7").addEventListener("click", showImgBig7);
document.querySelector("#img-big7").addEventListener("click", hideImgBig7);
document.querySelector("#img-h8").addEventListener("click", showImgBig8);
document.querySelector("#img-big8").addEventListener("click", hideImgBig8);
document.querySelector("#img-h9").addEventListener("click", showImgBig9);
document.querySelector("#img-big9").addEventListener("click", hideImgBig9);

function showImgBig1(){
  document.querySelector("#img-big1").classList.add("show-img-big1");
  document.querySelector("#img-big1").classList.remove("hide-img-big1");
  showSombra();
}

function hideImgBig1(){
  document.querySelector("#img-big1").classList.remove("show-img-big1");
  document.querySelector("#img-big1").classList.add("hide-img-big1");
  hideSombra();
}

function showImgBig2(){
  document.querySelector("#img-big2").classList.add("show-img-big2");
  document.querySelector("#img-big2").classList.remove("hide-img-big2");
  showSombra();
}

function hideImgBig2(){
  document.querySelector("#img-big2").classList.remove("show-img-big2");
  document.querySelector("#img-big2").classList.add("hide-img-big2");
  hideSombra();
}

function showImgBig3(){
  document.querySelector("#img-big3").classList.add("show-img-big3");
  document.querySelector("#img-big3").classList.remove("hide-img-big3");
  showSombra();
}

function hideImgBig3(){
  document.querySelector("#img-big3").classList.remove("show-img-big3");
  document.querySelector("#img-big3").classList.add("hide-img-big3");
  hideSombra();
}

function showImgBig4(){
  document.querySelector("#img-big4").classList.add("show-img-big4");
  document.querySelector("#img-big4").classList.remove("hide-img-big4");
  showSombra();
}

function hideImgBig4(){
  document.querySelector("#img-big4").classList.remove("show-img-big4");
  document.querySelector("#img-big4").classList.add("hide-img-big4");
  hideSombra();
}

function showImgBig5(){
  document.querySelector("#img-big5").classList.add("show-img-big5");
  document.querySelector("#img-big5").classList.remove("hide-img-big5");
  showSombra();
}

function hideImgBig5(){
  document.querySelector("#img-big5").classList.remove("show-img-big5");
  document.querySelector("#img-big5").classList.add("hide-img-big5");
  hideSombra();
}

function showImgBig6(){
  document.querySelector("#img-big6").classList.add("show-img-big6");
  document.querySelector("#img-big6").classList.remove("hide-img-big6");
  showSombra();
}

function hideImgBig6(){
  document.querySelector("#img-big6").classList.remove("show-img-big6");
  document.querySelector("#img-big6").classList.add("hide-img-big6");
  hideSombra();
}

function showImgBig7(){
  document.querySelector("#img-big7").classList.add("show-img-big7");
  document.querySelector("#img-big7").classList.remove("hide-img-big7");
  showSombra();
}

function hideImgBig7(){
  document.querySelector("#img-big7").classList.remove("show-img-big7");
  document.querySelector("#img-big7").classList.add("hide-img-big7");
  hideSombra();
}

function showImgBig8(){
  document.querySelector("#img-big8").classList.add("show-img-big8");
  document.querySelector("#img-big8").classList.remove("hide-img-big8");
  showSombra();
}

function hideImgBig8(){
  document.querySelector("#img-big8").classList.remove("show-img-big8");
  document.querySelector("#img-big8").classList.add("hide-img-big8");
  hideSombra();
}

function showImgBig9(){
  document.querySelector("#img-big9").classList.add("show-img-big9");
  document.querySelector("#img-big9").classList.remove("hide-img-big9");
  showSombra();
}

function hideImgBig9(){
  document.querySelector("#img-big9").classList.remove("show-img-big9");
  document.querySelector("#img-big9").classList.add("hide-img-big9");
  hideSombra();
}

function showSombra(){
  document.querySelector("#sombra-img-big").classList.add("show-sombra-img-big");
  document.querySelector("#sombra-img-big").classList.remove("hide-sombra-img-big");
}

function hideSombra(){
  document.querySelector("#sombra-img-big").classList.remove("show-sombra-img-big");
  document.querySelector("#sombra-img-big").classList.add("hide-sombra-img-big");
}

//share options----------------------------------------------------
document.querySelector("#button-share").addEventListener("click", toggleShare); 

function toggleShare() {
    document.querySelector(".share-options").classList.toggle("show-share");
}

//show game
let btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener('click', showGame);

function showGame() {
  document.getElementById("preGame").classList.add("hide-pre-game");
  document.getElementById("preGame").classList.remove("pre-game");
  document.getElementById("Mycanvas").classList.add("canvas");
  document.getElementById("Mycanvas").classList.remove("hide-canvas");
}

//carrusel 4 en linea-------------------------------------------------------
const prevGame = document.querySelector(".prevGame");
const nextGame = document.querySelector(".nextGame");
const carouselGame = document.querySelector(".carrGame");
const trackGame = document.querySelector(".trackGame");
let widthGame = carouselGame.offsetWidth;
let indexGame = 0;
window.addEventListener("resize", function () {
  widthGame = carouselGame.offsetWidth;
});
nextGame.addEventListener("click", function (e) {
  e.preventDefault();
  indexGame = indexGame + 1;
  prevGame.classList.add("show");
  trackGame.style.transform = "translateX(" + indexGame * -widthGame + "px)";
  if (trackGame.offsetWidth - indexGame * widthGame < indexGame * widthGame) {
    nextGame.classList.add("hide");
  }
});

prevGame.addEventListener("click", function () {
  indexGame = indexGame - 1;
  nextGame.classList.remove("hide");
  if (indexGame === 0) {
    prevGame.classList.remove("show");
  }
  trackGame.style.transform = "translateX(" + indexGame * -widthGame + "px)";
});
