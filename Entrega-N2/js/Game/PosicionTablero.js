"use strict";

class PosicionTablero {

    constructor(x, y, w, h, ctx) {
        this.xInicial = x;
        this.yInicial = y;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.shape = null;
    }

    //get
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getW() {
        return this.w;
    }

    getH() {
        return this.h;
    }

    getShape() {
        return this.shape;
    }

    setShape(shape) {
        this.shape = shape;
    }

    move(x) {
        this.x = this.x - x;
    }

    backPosicionInicial() {
        this.x = this.xInicial;
        this.y = this.yInicial;
    }

    //dibuja posicion
    draw() {
        let img = document.getElementById('circuloVerde');
        ctx.fillStyle = '#0E8B16';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x+5, this.y+5, this.w-10, this.h-10);
    }

    //chequea si tiene una ficha a dentro
    checkShapeInside(shape) {
        let ShapeX = shape.getX();
        let ShapeY = shape.getY();
        let radio = shape.getRadio();
        return (ShapeX-radio/2) > this.x && (ShapeX+radio/2) < this.x + this.w && (ShapeY-radio/2) > this.y && (ShapeY+radio/2) < this.y + this.h; 
    }
}