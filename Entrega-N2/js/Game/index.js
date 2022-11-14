"use strict";


let canvas = document.getElementById("Mycanvas");
let ctx = canvas.getContext('2d');
let headerH = document.getElementById("header2");
let breadcrumH = document.getElementById("breadcrum");
document.getElementById("btn-play-again").addEventListener('click', hiddenWinner);
let imgFondoCanvas = document.getElementById("fondoCanvas");
let imgP1 = document.getElementById('player1'); 
let imgP2 = document.getElementById('player2');
let imgTurno1 = document.getElementById('turno1');
let imgTurno2 = document.getElementById('turno2');
let img1 = document.getElementById('messi'); 
let img2 = document.getElementById('bicho');

let shapes = [];
let entradas = [];
let shapesUsadas = 0;

let jugador;
let jugador1;
let jugador2;
let turno = 1;

let imagenFondo;
let widthCanvas = 900;
let heigthCanvas = 500;

let cantShapes = 36;
let cantEntradas = 7;
let cantPos = 6;

//let btn1 = document.getElementById("btn1").addEventListener('click', );
//let btn2 = document.getElementById("btn2").addEventListener('click', );
//let btn3 = document.getElementById("btn3").addEventListener('click', );

//INICIO JUEGO
function init() {
    addPlayers("The GOAT", "El Bicho");
    addEntradas(entradas, 150, 225, cantEntradas);
    addTablero(cantPos);
    addShape(shapes, 190, 50, jugador, cantShapes);
    drawImgFondo();
    drawElements(cantShapes);
    initEvents();
    setInterval(drawElements,20);
}


function drawImgFondo() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, widthCanvas, heigthCanvas);   
}

// INICIO EVENTOS DEL MOUSE
function initEvents() {
    canvas.onmousedown = mouseDown;
    canvas.onmousemove = mouseMove;
    canvas.onmouseup = mouseUp;
}


function resetGame() {
    jugador1.cleanShapes();
    jugador2.cleanShapes();
    for (let i = 0; i < entradas.length; i++) {
        entradas[i].cleanPosiciones();   
    }
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].backPosicionInicial();
        shapes[i].setUsada(false);   
    }
    turno = 1;
}

function showWinner(winner) {
    document.getElementById("winner").classList.remove("winner");
    document.getElementById("winner").classList.add("winner-show");
    if(winner == jugador2) {
        document.getElementById("text-winner").innerHTML = winner.getNombre() + " Win";
    }
    else {
        document.getElementById("text-winner").innerHTML = winner.getNombre() + " Win"
    }
}

function hiddenWinner() {
    document.getElementById("winner").classList.remove("winner-show");
    document.getElementById("winner").classList.add("winner");
    resetGame();
}

// DIBUJO ELEMENTOS DEL JUEGO (entradas, tablero, fichas)
function drawElements() {
    clearCanvas();
    drawImg(imgFondoCanvas,0,0,900,500);
    drawImg(imgP1,60,80,100,100);
    drawImg(imgP2,730,80,100,100);
    if(turno == 1) {
        ctx.clearRect(350,40,200,30);
        drawImg(imgTurno1,350,40,200,30);
    }
    else {
        ctx.clearRect(350,40,200,30);
        drawImg(imgTurno2,350,40,200,30);
    }
    entradas.forEach(entrada => {
        entrada.draw();
        entrada.drawPosiciones();
    });
    for(let i = 0; i<shapes.length; i++) {
        shapes[i].draw(img1);
        if (i>17) {
            shapes[i].draw(img2);
        }
    }
}

function drawImg(img,x,y,w,h) {
    ctx.drawImage(img, x, y, w, h);
    ctx.closePath();
}

// BORRA TODO LO HECHO EN EL CANVAS
function clearCanvas() {
    ctx.clearRect(0, 0, 900, 600);
}

// AGREGO JUGADOR
function addPlayers(name1, name2) {
    jugador1 = new Jugador(name1);
    jugador2 = new Jugador(name2);
}

// AGREGO FICHA
function addShape(arr, y, x, jugador) {
    for (let i = 0; i < cantShapes; i++) {
        if(i < 18) {
            jugador = jugador1;
        }
        else {
            jugador = jugador2;
        }
        if(i==6) {
            x += 60;
            y = 190;
        }
        if(i==12) {
            x += 60;
            y = 190;
        }
        if(i==18) {
            x+=550;
            y = 190;
        }
        if(i==24) {
            x+=60;
            y = 190;
        }
        if(i==30) {
            x+=60;
            y = 190;
        }
        y+=45;
        let shape = new Shape(x,y,ctx,jugador);
        arr.push(shape);
    }
}

// AGREGO ENTRADA 
function addEntradas(arr, y, x) {
    for (let i = 0; i < cantEntradas; i++) {
        x+=50;
        let entrada = new Entrada(x, y, 50, 50, 7, 6, ctx);
        arr.push(entrada);
    }
}

// AGREGO TABLERO
function addTablero(cantPosiciones) {
    for (let i = 0; i < entradas.length; i++) {
        let entrada = entradas[i];
        entrada.addPosiciones(cantPosiciones);
    }
}

//fichas jugadas
function shapesJugadas() {
    let suma = 0;
    for (let i = 0; i < shapes.length; i++) {
        if(shapes[i].getUsada()) {
            suma ++;
        }
    }
    return suma;
}

function resetLoop() {
    if(shapesUsadas == shapesJugadas()) {
        resetGame();
    }
    
}

// MOUSE CLICK
function mouseDown(event) {
    let x = event.clientX - 30;
    let y = event.clientY - 128;
    for (let i = 0; i < shapes.length; i++) {
        if(shapes[i].checkSelected(x,y)) { //chequeo si fue seleccionada
            if(!shapes[i].getUsada()) { //chequeo que no se haya usado
                if(checkShapeSeleccionada(i) == 1) {//chequeo si es de jugador 1 o 2
                    if(turno == 1) {
                        shapes[i].setIsSelected(true);
                    }
                    else {
                        shapes[i].setIsSelected(false);
                    }
                }
                else {
                    if(turno == 2) {
                        shapes[i].setIsSelected(true);
                    }
                    else {
                        shapes[i].setIsSelected(false);
                    }
                }
            }
            else {
                shapes[i].setIsSelected(false);
            }
        }
        else {
            shapes[i].setIsSelected(false);
        }
    }
}

// MOUSE MOVIENDOSE
function mouseMove(event) {
    let x = event.clientX -15;
    let y = event.clientY - 118;
    for (let i = 0; i < shapes.length; i++) {
        if(shapes[i].isSelected()) {
            shapes[i].move(x,y);
        }
    }

}

// MOUSE SUELTO CLICK
function mouseUp() {
    for (let i = 0; i < shapes.length; i++) {
        if(!shapes[i].getUsada()) {
            fichaDentroTablero(shapes[i], i);
            shapes[i].setIsSelected(false);
        }
    }
}

//CUANDO INSERTO FICHA EN LA ENTRADA, CAMBIO TURNO
function fichaDentroTablero(shape, numShape) {

    if(entradas[0].checkShapeOn(shape) && !entradas[0].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[0], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[1].checkShapeOn(shape) && !entradas[1].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[1], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[2].checkShapeOn(shape) && !entradas[2].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[2], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[3].checkShapeOn(shape) && !entradas[3].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[3], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[4].checkShapeOn(shape) && !entradas[4].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[4], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[5].checkShapeOn(shape) && !entradas[5].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[5], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else if(entradas[6].checkShapeOn(shape) && !entradas[6].isColumnaCompleta()) {
        checkTurnoAddShape(entradas[6], numShape, shape);
        setTurno();
        shape.setUsada(true);
        shapesUsadas++;
        setTimeout(resetLoop, 180000);
    }
    else {
        shape.backPosicionInicial();
    }

}

// CAMBIO TURNO
function setTurno() {
    if(turno == 1) {
        turno = 2;
    }
    else {
        turno = 1;
    }
}

//CHEQUEO SI EN MI TURNO ESTOY AGARRANDO UNA FICHA MIA, ENTONCES 
function checkTurnoAddShape(entrada, numShape, shape) {
        if(checkShapeSeleccionada(numShape) == 1) {
            if(turno == 1) {
                jugador1.addShape(shape);
                entrada.newShape(shape);
                checkWinner(shape);
            }
            else {
                shape.setIsSelected(false);
            }
        }
        else {
            if(turno == 2) {
                jugador2.addShape(shape);
                entrada.newShape(shape);
                checkWinner(shape);
            }
            else {
                shape.setIsSelected(false);
            }
        }
    
}

// entra ficha en tablero y se chequea 4 en linea
function nuevaFichaEnTablero(entrada, shape) {
    entrada.newShape(shape);
    checkWinner(shape);
}

//RETORNA 1 SI LA FICHA AGARRADA ES DEL JUGADOR UNO Y 2 EN CASO CONTRARIO
function checkShapeSeleccionada(numShape) {
    if(numShape > 0 && numShape < 20) {
        return 1;
    }
    else {
        return 2;
    }
}

function checkWinner(shape) {
    for (let i = 0; i < entradas.length; i++) {
        let entrada = entradas[i];
        for (let j = 0; j < entrada.getPosiciones().length; j++) {
            let posicion = entrada.getPosiciones()[j];
            if(posicion.getShape() == shape) {
                let duenioShape = shape.getDuenio();
                if(checkWinnerHorizontal(i, j, duenioShape)) {
                    console.log("Gano "+ duenioShape.getNombre());
                    showWinner(duenioShape);
                }
                else if(checkWinnerVertical(i, j, duenioShape)) {
                    console.log("Gano "+ duenioShape.getNombre());
                    showWinner(duenioShape);
                }
                else if(checkWinnerDiagonal1(i, j, duenioShape)) {
                    console.log("Gano "+ duenioShape.getNombre());
                    showWinner(duenioShape);
                }
                else if(checkWinnerDiagonal2(i, j, duenioShape)) {
                    console.log("Gano "+ duenioShape.getNombre());
                    showWinner(duenioShape);
                }
                
            }
            
        }
        
    }
}

// chequea 4 en linea horizontal
function checkWinnerHorizontal(numEntrada, numPosicion, duenio) {
    if(sumaHaciaIzq(numEntrada, numPosicion, duenio) + sumaHaciaDer(numEntrada, numPosicion, duenio) == 4) {
        return true;
    }
    else {
        return false;
    }
}

//chequea 4 en linea vertical
function checkWinnerVertical(numEntrada, numPosicion, duenio) {
    if(sumaHaciaArriba(numEntrada, numPosicion, duenio) + sumaHaciaAbj(numEntrada, numPosicion, duenio) == 4) {
        return true;
    }
    else {
        return false;
    }
}

function checkWinnerDiagonal1(numEntrada, numPosicion, duenio) {
    if(sumaDiagonalHaciaArriba1(numEntrada, numPosicion, duenio) + sumaDiagonalHaciaAbj1(numEntrada, numPosicion, duenio) == 4) {
        return true;
    }
    else {
        return false;
    }
}

function checkWinnerDiagonal2(numEntrada, numPosicion, duenio) {
    if(sumaDiagonalHaciaArriba2(numEntrada, numPosicion, duenio) + sumaDiagonalHaciaAbj2(numEntrada, numPosicion, duenio) == 4) {
        return true;
    }
    else {
        return false;
    }
}

function sumaDiagonalHaciaArriba1(numEntrada, numPosicion, duenio) {
    let pos=numPosicion;
    let i = numEntrada;
    let suma=0;
    let seguido=true;
    while ((i > -1)&&(pos<entradas[i].posiciones.length)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.posiciones[pos];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i--;
        pos++;
    }
    return suma-1;
}

function sumaDiagonalHaciaAbj1(numEntrada, numPosicion, duenio) {
    let i = numEntrada;
    let pos = numPosicion;
    let suma=0;
    let seguido=true;
    while ((i < entradas.length)&&(pos>-1)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.posiciones[pos];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i++;
        pos--;
    }
    return suma;
}

function sumaDiagonalHaciaArriba2(numEntrada, numPosicion, duenio) {
    let i = numEntrada;
    let pos = numPosicion;
    let suma=0;
    let seguido=true;
    while ((i < entradas.length)&&(pos<entradas[i].posiciones.length)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.posiciones[pos];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i++;
        pos++;
    }
    return suma-1;
}

function sumaDiagonalHaciaAbj2(numEntrada, numPosicion, duenio) {
    let i = numEntrada;
    let pos=numPosicion;
    let suma=0;
    let seguido=true;
    while ((i > -1)&&(pos>-1)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.posiciones[pos];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i--;
        pos--;
    }
    return suma;
}

function sumaHaciaArriba(numEntrada, numPosicion, duenio) {
    let i = numPosicion;
    let suma=0;
    let seguido=true;
    while ((i < entradas[numEntrada].getPosiciones().length)&&(seguido)) {
        let posicion = entradas[numEntrada].getPosiciones()[i];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i++;
    }
    return suma-1;
}

function sumaHaciaAbj(numEntrada, numPosicion, duenio) {
    let i = numPosicion;
    let suma=0;
    let seguido=true;
    while ((i > -1)&&(seguido)) {
        let posicion = entradas[numEntrada].getPosiciones()[i];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i--;
    }
    return suma;
}

function sumaHaciaIzq(numEntrada, numPosicion, duenio) {
    let i = numEntrada;
    let suma=0;
    let seguido=true;
    while ((i > -1)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.posiciones[numPosicion];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i--;
    }
    return suma-1;
}

function sumaHaciaDer(numEntrada, numPosicion, duenio) {
    let i = numEntrada;
    let suma=0;
    let seguido=true;
    while ((i < entradas.length)&&(seguido)) {
        let entrada = entradas[i];
        let posicion = entrada.getPosiciones()[numPosicion];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == 4) {
                    seguido = false;
                }
            }
            else {
                seguido = false;
            }
        }
        else {
            seguido = false;
        }
        i++;
    }
    return suma;
}

init();


