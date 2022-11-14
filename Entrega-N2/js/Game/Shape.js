"use strict"

class Shape {

    constructor(x, y, ctx, duenio) {
        this.posXinicial = x;
        this.posYinicial = y;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.r = 20;
        this.selected = false;
        this.duenio = duenio;
        this.usada = false;
    }

    getRadio() {
        return this.r;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getDuenio() {
        return this.duenio;
    }

    getXinicial() {
        return this.posXinicial;
    }

    getYinicial() {
        return this.posYinicial;
    }

    getUsada() {
        return this.usada;
    }

    setUsada(estado) {
        this.usada = estado;
    }

    draw(img) {
        this.ctx.fillStyle = "FFFFFF";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r, 0, 2 * Math.PI); 
        ctx.fill();
        ctx.drawImage(img, this.getX()-20, this.getY()-20, 40, 40);
        ctx.closePath();
    }
    
    checkSelected(x,y) {
        let dx = this.x - x;
        let dy = this.y - y;
        return Math.sqrt(dx * dx  +   dy * dy) < this.r;
    }

    backPosicionInicial() {
        this.x = this.posXinicial;
        this.y = this.posYinicial;
    }

    goPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    
    move(x,y) {
        this.x = x - this.r/2;
        this.y = y - this.r/2;
    }

    isSelected() {
        return this.selected;
    }

    setIsSelected(selected) {
        this.selected = selected;
    }
}