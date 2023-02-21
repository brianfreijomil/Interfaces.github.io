"use strict";

//canvas
let canvas = document.getElementById("Mycanvas");
let ctx = canvas.getContext('2d');

//botones del juego
document.getElementById("btn-play-again").addEventListener('click', resetGame);

//imagenes del juego
let imgFondoCanvas = document.getElementById("fondoCanvas");
let imgP1 = document.getElementById('player1'); 
let imgP2 = document.getElementById('player2');
let turnoPlayer = document.getElementById('turnoPlayer');
let img1 = document.getElementById('messi'); 
let img2 = document.getElementById('bicho');

//timer
let timer = document.getElementById("timer");

//arreglo de fichas y arreglo de entradas al tablero
let shapes = [];
let entradas = [];

//variables juego
let jugador;
let jugador1;
let jugador2;
let turno = 1;
var timeri;
let contador = 60;

//canvas variables
let imagenFondo;
let widthCanvas = 900;
let heigthCanvas = 500;
let drawLoop;
let cantShapes;
let cantLinea;

//INICIO JUEGO 
function init(linea, cantEntradas, cantPosiciones) {
    cantShapes = 42;
    showTurno();
    hiddenMenu();
    cantLinea = linea;
    addElementsGame(cantEntradas, cantPosiciones);
    drawGame();
    clearInterval(timeri);
    contador = 60;
    timeri = setInterval(timerRestart,1000);
    initEvents();
}

// ---------------  ALTA DE ELEMENTOS  --------------------------------------------//

function addElementsGame(cantEntradas, cantPosiciones) {
    removeElements();
    addPlayers("The GOAT", "El Bicho");
    if(cantEntradas == 7) {
        addEntradas(150, 225, cantEntradas);
    }
    else if(cantEntradas == 8){
        addEntradas(100, 200, cantEntradas);
    }
    else {
        addEntradas(50, 175, cantEntradas);
    }
    addTablero(cantPosiciones);
    addShapes(50, 150);
}

// AGREGO JUGADOR
function addPlayers(name1, name2) {
    jugador1 = new Jugador(name1);
    jugador2 = new Jugador(name2);
}

// AGREGO FICHA
function addShapes(x, y) {
    for (let i = 0; i < cantShapes; i++) {
        if(i < 21) {
            jugador = jugador1;
        }
        else {
            jugador = jugador2;
        }
        if(i==7) {
            x += 60;
            y = 150;
        }
        if(i==14) {
            x += 60;
            y = 150;
        }
        if(i==21) {
            x+=550;
            y = 150;
        }
        if(i==28) {
            x+=60;
            y = 150;
        }
        if(i==35) {
            x+=60;
            y = 150;
        }
        y+=45;
        let shape = new Shape(x,y,ctx,jugador);
        shapes.push(shape);
    }
}

// AGREGO ENTRADA 
function addEntradas(y, x, cantEntradas) {
    for (let i = 0; i < cantEntradas; i++) {
        x+=50;
        let entrada = new Entrada(x, y, 50, 50, ctx);
        entradas.push(entrada);
    }
}

// AGREGO TABLERO
function addTablero(cantPosiciones) {
    for (let i = 0; i < entradas.length; i++) {
        let entrada = entradas[i];
        entrada.addPosiciones(cantPosiciones);
    }
}

// ---------------  DIBUJO ELEMENTOS  --------------------------------------------//

// DIBUJO ELEMENTOS DEL JUEGO
function drawGame() {
    clearCanvas();
    drawImg(imgFondoCanvas,0,0,900,500);
    drawImg(imgP1,60,60,100,100);
    drawImg(imgP2,730,60,100,100);
    entradas.forEach(entrada => {
        entrada.draw();
        entrada.drawPosiciones();
    });
    for(let i = 0; i<shapes.length; i++) {
        shapes[i].draw(img1);
        if (i>=cantShapes/2) {
            shapes[i].draw(img2);
        }
    }
}

//dibuja una imagen
function drawImg(img,x,y,w,h) {
    ctx.drawImage(img, x, y, w, h);
    ctx.closePath();
}

//elimina elemntos de js
function removeElements() {
    let cantEntradas = entradas.length;
    for (let i = 0; i < cantShapes; i++) {
        shapes.pop();  
    }
    for (let i = 0; i < cantEntradas; i++) {
        entradas.pop();
    }
    jugador1 = null;
    jugador2 = null;
}

// LIMPIA CANVAS
function clearCanvas() {
    ctx.clearRect(0, 0, 900, 600);
}

//contador de un minuto que al minuto de no jugar resetea el juego
function timerRestart() {
    document.getElementById("cont-timer").innerHTML = "Time to restart: " + contador;
    contador--;
    if(contador==-1) {
        clearInterval(timeri);
        resetGame();
    }
}

// INICIO EVENTOS DEL MOUSE
function initEvents() {
    canvas.onmousedown = mouseDown;
    canvas.onmousemove = mouseMove;
    canvas.onmouseup = mouseUp;
}

//resetea juego
function resetGame() {
    for (let i = 0; i < entradas.length; i++) {
        entradas[i].cleanPosiciones();   
    }
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].backPosicionInicial();
        shapes[i].setUsada(false);   
    }
    turno = 1;
    clearInterval(timeri);
    contador = 60;
    timeri = setInterval(timerRestart,1000);
}

//muestro menu de opciones
function showMenu() {
    hiddenWinner();
    document.getElementById("cont-menu-game").classList.remove("cont-menu-game");
    document.getElementById("cont-menu-game").classList.add("cont-menu-game-show");
}

//oculto menu de opciones
function hiddenMenu() {
    document.getElementById("cont-menu-game").classList.remove("cont-menu-game-show");
    document.getElementById("cont-menu-game").classList.add("cont-menu-game");
}


//muestra quien gano
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
//oculta cartel de ganador
function hiddenWinner() {
    document.getElementById("winner").classList.remove("winner-show");
    document.getElementById("winner").classList.add("winner");
    resetGame();
}

//muestra de quien es el turno
function showTurno() {
    if(turno == 1) {
        turnoPlayer.innerHTML = 'Turno Player 1';
    }
    else {
        turnoPlayer.innerHTML = 'Turno Player 2';
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
            drawLoop = setInterval(drawGame,20);
        }
    }

}

// MOUSE SUELTO CLICK
function mouseUp() {
    clearInterval(drawLoop);
    for (let i = 0; i < shapes.length; i++) {
        if(!shapes[i].getUsada()) {
            fichaDentroTablero(shapes[i], i);
            shapes[i].setIsSelected(false);
        }
    }
}

function fichaDentroTablero(shape, numShape) {
    let entradasVacias = 0;
    for (let i = 0; i < entradas.length; i++) {
        if(entradas[i].checkShapeOn(shape) && !entradas[i].isColumnaCompleta()) {
            checkTurnoAddShape(entradas[i], numShape, shape);
            setTurno();
            showTurno();
            shape.setUsada(true);
            clearInterval(timeri);
            contador = 60;
            timeri = setInterval(timerRestart,1000);
            i = entradas.length;
        }
        else {
            entradasVacias++;
        }
    }
    if(entradasVacias == entradas.length) {
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
                entrada.newShape(shape);
                checkWinner(shape);
            }
            else {
                shape.setIsSelected(false);
            }
        }
        else {
            if(turno == 2) {
                entrada.newShape(shape);
                checkWinner(shape);
            }
            else {
                shape.setIsSelected(false);
            }
        }
    
}

//RETORNA true SI LA FICHA AGARRADA ES DEL JUGADOR UNO Y false EN CASO CONTRARIO
function checkShapeSeleccionada(numShape) {
    return numShape > -1 && numShape < 21;
}

//checkea si se hizo 4 en linea vertical horizontal o diagonalmente
function checkWinner(shape) {
    for (let i = 0; i < entradas.length; i++) {
        let entrada = entradas[i];
        for (let j = 0; j < entrada.getPosiciones().length; j++) {
            let posicion = entrada.getPosiciones()[j];
            if(posicion.getShape() == shape) {
                let duenioShape = shape.getDuenio();
                if(checkWinnerHorizontal(i, j, duenioShape)) {
                    showWinner(duenioShape);
                    clearInterval(timeri);
                }
                else if(checkWinnerVertical(i, j, duenioShape)) {
                    showWinner(duenioShape);
                    clearInterval(timeri);
                }
                else if(checkWinnerDiagonal1(i, j, duenioShape)) {
                    showWinner(duenioShape);
                    clearInterval(timeri);
                }
                else if(checkWinnerDiagonal2(i, j, duenioShape)) {
                    showWinner(duenioShape);
                    clearInterval(timeri);
                }
                
            }
            
        }
        
    }
}

// chequea 4 en linea horizontal
function checkWinnerHorizontal(numEntrada, numPosicion, duenio) {
    return sumaHaciaIzq(numEntrada, numPosicion, duenio) + sumaHaciaDer(numEntrada, numPosicion, duenio) >= cantLinea;
}

//chequea 4 en linea vertical
function checkWinnerVertical(numEntrada, numPosicion, duenio) {
    return sumaHaciaArriba(numEntrada, numPosicion, duenio) + sumaHaciaAbj(numEntrada, numPosicion, duenio) >= cantLinea;
}

//chequea 4 en linea diagonal 1
function checkWinnerDiagonal1(numEntrada, numPosicion, duenio) {
    return sumaDiagonalHaciaArriba1(numEntrada, numPosicion, duenio) + sumaDiagonalHaciaAbj1(numEntrada, numPosicion, duenio) >= cantLinea;
}
//chequea 4 en linea diagonal 2
function checkWinnerDiagonal2(numEntrada, numPosicion, duenio) {
    return sumaDiagonalHaciaArriba2(numEntrada, numPosicion, duenio) + sumaDiagonalHaciaAbj2(numEntrada, numPosicion, duenio) >= cantLinea;
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
                if(suma == cantLinea) {
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
                if(suma == cantLinea) {
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
                if(suma == cantLinea) {
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
                if(suma == cantLinea) {
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
        let posicion = entradas[numEntrada].posiciones[i];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == cantLinea) {
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
        let posicion = entradas[numEntrada].posiciones[i];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == cantLinea) {
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
                if(suma == cantLinea) {
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
        let posicion = entrada.posiciones[numPosicion];
        if(posicion.getShape() !== null) {
            if(posicion.getShape().getDuenio() == duenio) {
                suma+=1;
                if(suma == cantLinea) {
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