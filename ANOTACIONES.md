# ANOTACIONES DEL FINAL #

- AGREGUE NUEVA CARPETA "ENTREGA-FINAL" AL PROYECTO

- ACTUALICE MENU DEL PROYECTO

- AGREGUE "CURSOR POINTER" A BOTONES DEL GAME

- ACHIQUE TAMAÑO DEL LOGO



"Use strict";
var carruseles = document.getElementsByClassName('carousel-container');
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
const carousel = document.getElementsByClassName("carousel-container");
const track = document.getElementsByClassName("track");

let index = 0;
let width = carousel.offsetWidth;
for (let i = 0; i < carousel.length; i++) {
    window.addEventListener("resize", function () {
        width = carousel[i].offsetWidth;
    });
}

for (let i = 0; i < next.length; i++) {
    width = carousel[i].offsetWidth;
    next[i].addEventListener("click", function (e) {
        e.preventDefault();
        index = index + 1;
        prev[i].classList.add("show");
        track[i].style.transform = "translateX(" + index * -width + "px)";
        if (track[i].offsetWidth - index * width < index * width) {
          next[i].classList.add("hide");
        }
      });
}

for (let i = 0; i < prev.length; i++) {
    width = carousel[i].offsetWidth;
    prev[i].addEventListener("click", function () {
        index = index - 1;
        next[i].classList.remove("hide");
        if (index === 0) {
          prev[i].classList.remove("show");
        }
        track[i].style.transform = "translateX(" + index * -width + "px)";
      });
}