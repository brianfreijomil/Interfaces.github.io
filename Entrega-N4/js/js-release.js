"Use strict";

const boxes = document.querySelectorAll('.box');
let habAnimada = document.querySelectorAll('.hab-animada');

window.addEventListener('scroll', initAnimations);

window.addEventListener('scroll', function(){
  let distinct = document.getElementById('distinta');
  distinct.style.display = "none"
  if(window.scrollY>=1400 && window.scrollY<2000){
    distinct.style.display = "block"
  }
  else{
    distinct.style.display = "none"
  }
})

function initAnimations() {
  headerSticky();
  checkBoxes();
  habilidadesAnimadas();
}

function headerSticky() {

    var scroll = window.scrollY;
    if (scroll >= 85) {
      //header
        document.getElementById('header').classList.add('sticky');
        document.getElementById('header').classList.remove('container-logo');
        //menu
        document.getElementById('label').classList.add('label-change');
        document.getElementById('barraM').classList.add('barra-change');
        document.getElementById('barraM2').classList.add('barra-change');
        document.getElementById('barraM3').classList.add('barra-change');
        document.getElementById('menuD').classList.add('menu-desp-change');
    } else if (scroll < 85) {
      //header
        document.getElementById('header').classList.add('container-logo');
        document.getElementById('header').classList.add('cont-logo-extra');
        document.getElementById('header').classList.remove('sticky');
        //menu
        document.getElementById('label').classList.remove('label-change');
        document.getElementById('barraM').classList.remove('barra-change');
        document.getElementById('barraM2').classList.remove('barra-change');
        document.getElementById('barraM3').classList.remove('barra-change');
        document.getElementById('menuD').classList.remove('menu-desp-change');
    }

}



function checkBoxes(){
  const triggerBottom = window.innerHeight/ 5*4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      box.classList.add('show');
    }
    else{
      box.classList.remove('show');
    }
  });
}

function habilidadesAnimadas() {
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i<habAnimada.length; i++){
    let alturaHab = habAnimada[i].offsetTop;
    if(alturaHab - 580 < scrollTop) {
      habAnimada[i].style.opacity = 1;
      if(i == 0) {
        habAnimada[i].classList.add("hab1");
      }
      if(i == 1) {
        habAnimada[i].classList.add("hab2");
      }
      if(i == 2) {
        habAnimada[i].classList.add("hab3");
      }
      if(i == 3) {
        habAnimada[i].classList.add("hab4");
      }
    }
    else {
      habAnimada[i].style.opacity = 0;
    }
  }
}

const prevRelease = document.querySelector(".p-release");
const nextRelease = document.querySelector(".n-release");
const carouselRelease = document.querySelector(".carr-release");
const trackRelease = document.querySelector(".track-release");
let indexRelease = 0;
let width = carouselRelease.offsetWidth;
window.addEventListener("resize", function () {
  width = carouselRelease.offsetWidth;
});
nextRelease.addEventListener("click", function (e) {
  e.preventDefault();
  indexRelease = indexRelease + 1;
  prevRelease.classList.add("show");
  trackRelease.style.transform = "translateX(" + indexRelease * -width + "px)";
  if (trackRelease.offsetWidth - indexRelease * width < indexRelease * width) {
    nextRelease.classList.add("hide");
  }
});
prevRelease.addEventListener("click", function () {
  indexRelease = indexRelease - 1;
  nextRelease.classList.remove("hide");
  if (indexRelease === 0) {
    prevRelease.classList.remove("show");
  }
  trackRelease.style.transform = "translateX(" + indexRelease * -width + "px)";
});


