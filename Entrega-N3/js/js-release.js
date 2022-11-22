"Use strict";

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