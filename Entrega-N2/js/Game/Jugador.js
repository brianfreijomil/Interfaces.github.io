"use strict";

class Jugador {

    constructor(nombre) {
        this.nombre = nombre;
        this.turno = false;
        this.shapes = [];
    }

    getNombre() {
        return this.nombre;
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    isMiTurno() {
        return this.turno;
    }
    
    setIsMiTurno(turno) {
        this.turno = turno;
    }

    cleanShapes() {
        let i = 0;
        while (i<this.shapes.length) {
            this.shapes.pop();
        }
    }
}