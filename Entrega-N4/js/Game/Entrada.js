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

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getPosiciones() {
        return this.posiciones;
    }

    removePosiciones() {
        for (let i = 0; i < this.posiciones.length; i++) {
            this.posiciones.pop();
        }
    }

    //pregunta si las posiciones que tiene estan todas ocupadas
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

    //elimina fichas de sus posiciones
    cleanPosiciones() {
        for (let i = 0; i < this.posiciones.length; i++) {
            this.posiciones[i].setShape(null);
        }
    }

    //dibuja entrada
    draw() {
        let cont = 0;
        let img = document.getElementById('circuloBordo');
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x+5, this.y+5, this.w-10, this.h-10);
    }

    //dibuja posiciones
    drawPosiciones() {
        for (let i = 0; i < this.posiciones.length; i++) {
            this.posiciones[i].draw();
        }
    }

    //agrega posiciones
    addPosiciones(cantPosiciones) {
        let xPosicion = this.x;
        let yPosicion;
        if(cantPosiciones == 6) {
            yPosicion = this.y + 350; 
        }
        else if(cantPosiciones == 7) {
            yPosicion = this.y + 400;
        }
        else {
            yPosicion = this.y + 450;
        }
        for (let i = 0; i < cantPosiciones; i++) {
            yPosicion -= 50;
            let posicion = new PosicionTablero(xPosicion, yPosicion, this.w, this.h, ctx);
            this.posiciones.push(posicion);
        }
    }

    //recibe nueva ficha y la inserta en la posicion libre de mas abajo
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

    //chequea si la ficha callo dentro de sus parametros
    checkShapeOn(shape) {
        let ShapeX = shape.getX();
        let ShapeY = shape.getY();
        let radio = shape.getRadio();
        return (ShapeX-radio/2) > this.x && (ShapeX+radio/2) < this.x + this.w && (ShapeY-radio/2) > this.y && (ShapeY+radio/2) < this.y + this.h; 
    }
}