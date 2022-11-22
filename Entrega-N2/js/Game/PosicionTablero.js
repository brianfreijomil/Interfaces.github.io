"use strict";

class PosicionTablero {

    constructor(x, y, w, h, ctx) {
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

    //dibuja posicion
    draw() {
        let img = document.getElementById('circuloVerde');
        ctx.fillStyle = '#0E8B16';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x+5, this.y+5, this.w-10, this.h-10);
    }
}