"use strict";

class Entrada {

    constructor(x, y, w, h, ctx) {
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.posiciones = [];
    }

    getPosiciones() {
        return this.posiciones;
    }

    isColumnaCompleta() {
        let i = 0;
        let suma = 0;
        while (i < this.posiciones.length) {
            if(this.posiciones[i].getShape()) {
                suma++;
            }
            i++;
        }
        if(suma == this.posiciones.length) {
            return true;
        }
        else {
            return false;
        }
    }

    cleanPosiciones() {
        for (let i = 0; i < this.posiciones.length; i++) {
            this.posiciones[i].setShape(null);
        }
    }

    draw() {
        let cont = 0;
        let img = document.getElementById('circuloBordo');
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x+5, this.y+5, this.w-10, this.h-10);
        ctx.font = '12px fantasy';
        ctx.fillText('SOLTAR', this.x+9, this.y-5, this.w, this.h);

    }

    drawPosiciones() {
        for (let i = 0; i < this.posiciones.length; i++) {
            this.posiciones[i].draw();
        }
    }

    addPosiciones(cantPosiciones) {
        let xPosicion = this.x;
        let yPosicion = this.y + 350;
        for (let i = 0; i < cantPosiciones; i++) {
            yPosicion -= 50;
            let posicion = new PosicionTablero(xPosicion, yPosicion, this.w, this.h, ctx);
            this.posiciones.push(posicion);
        }
    }

    newShape(shape) {
        if(!shape.getUsada()) {
            for(let i = 0; i<this.posiciones.length; i++){
                let posicion = this.posiciones[i];
                let xPos = posicion.getX() + (posicion.getW() / 2);
                let yPos = posicion.getY() + (posicion.getH() / 2);
                if(!posicion.getShape()) {
                    posicion.setShape(shape);
                    shape.goPosition(xPos, yPos);
                    i = this.posiciones.length;
                }
            }
        }
    }

    checkShapeOn(shape) {
        let ShapeX = shape.getX();
        let ShapeY = shape.getY();
        let radio = shape.getRadio();
        return (ShapeX-radio/2) > this.x && (ShapeX+radio/2) < this.x + this.w && (ShapeY-radio/2) > this.y && (ShapeY+radio/2) < this.y + this.h; 
    }
}