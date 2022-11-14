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

    draw() {
        let img = document.getElementById('circuloVerde');
        ctx.fillStyle = '#0E8B16';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x+5, this.y+5, this.w-10, this.h-10);
    }

    checkShapeInside(shape) {
        let ShapeX = shape.getX();
        let ShapeY = shape.getY();
        let radio = shape.getRadio();
        return (ShapeX-radio/2) > this.x && (ShapeX+radio/2) < this.x + this.w && (ShapeY-radio/2) > this.y && (ShapeY+radio/2) < this.y + this.h; 
    }
}