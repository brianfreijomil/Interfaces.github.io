"Use strict";

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', initAnimations);

function initAnimations() {
  headerSticky();
  checkBoxes();
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


