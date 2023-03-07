"use strict";

let articulosAnim = document.querySelector('.c-articles-entertainment');
let contNews = document.querySelector('.c-news-site');
let freeGame = document.querySelector('.c-cont-new-freeGames');
let articuloAnim = document.querySelectorAll('.c-article');
let newsAnim = document.querySelectorAll('.c-box-comm');
let freeGames = document.querySelectorAll('.c-freeGame');
window.addEventListener('scroll', initAnimations);

function initAnimations() {
    newsAnimadas();
    juegosFreeAnim();
    articulosAnimados();
}

function newsAnimadas() {
    let scrollTop = document.documentElement.scrollTop;
    let alturaNews = contNews.offsetTop;  
    if(alturaNews - 570 < scrollTop){
        for(var i = 0; i<newsAnim.length; i++){
            if(i == 0) {
                newsAnim[i].classList.add("c-newAnim1");
                newsAnim[i].style.opacity = 1;
              }
              if(i == 1) {
                newsAnim[i].classList.add("c-newAnim2");
                newsAnim[i].style.opacity = 1;
              }
              if(i == 2) {
                newsAnim[i].classList.add("c-newAnim3");
                newsAnim[i].style.opacity = 1;
              }
              if(i == 3) {
                newsAnim[i].classList.add("c-newAnim4");
                newsAnim[i].style.opacity = 1;
              }

        }
    }

}

function articulosAnimados() {
let scrollTop = document.documentElement.scrollTop;
    let alturaArtcs = articulosAnim.offsetTop;  
    if(alturaArtcs - 600 < scrollTop){
        for(var i = 0; i<articuloAnim.length; i++){
            if(i == 0) {
                articuloAnim[i].classList.add("articAnim1");
              }
              if(i == 1) {
                articuloAnim[i].classList.add("articAnim2");
              }

        }
    }
}

function juegosFreeAnim() {
    let scrollTop = document.documentElement.scrollTop;
        let alturaGame = freeGame.offsetTop;  
        if(alturaGame - 600 < scrollTop){
            for(var i = 0; i<freeGames.length; i++){
                if(i == 0) {
                    freeGames[i].style.opacity = 1;
                  }
                  if(i == 1) {
                    freeGames[i].style.opacity = 1;
                  }
                  if(i == 2) {
                    freeGames[i].style.opacity = 1;
                  }
    
            }
        }
    }