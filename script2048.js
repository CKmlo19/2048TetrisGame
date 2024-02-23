
// variable global de tablero
// forma interna para representar el tablero
// 0 = vacio, otro numero es el numero dentro de dicha celda

const pieza = {
    num: 0,
    positionx: 1,
    positiony: 1

}



var gameBoard = [ [0,0,0,0],
                  [0,2,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];

var elet = document.getElementById("arreglo");
elet.textContent = gameBoard;

// Intento de función para mover el bloque (solo caida)
function dropBlock() {
    const fallingBlock = document.getElementById('fallingBlock');
    fallingBlock.innerText = generateRandomNumber();
};

// Función para iniciar el juego
function startGame() {
    setInterval(dropBlock, 1000); // Llamada a la función dropBlock cada segundo
};

// Función funciones de botones de play y pause
function ClickActive(action){
    if (action == 'play'){
        generateRandomNumber();
    } else if (action == 'pause'){
        console.log("Juego Pausado");
    }
};

//Funcion para generar un numero aleatorio con probabilidad truncada
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 70) {
        console.log("Número generado: 2");
        pieza.num = 2;
    }else if (randomNumber < 90) {
        console.log("Número generado: 4");
        pieza.num = 4;
    } else if (randomNumber <= 100) {
        pieza.num = 8;
        console.log("Número generado: 8");
    }else{
        console.log("Error al crear el número aleatorio");
    }
};

// funcion para los eventos del teclado

function eventosTeclado(){
    document.addEventListener('keypress', (evt) => {

        if(evt.key === 'd'){
            if(pieza.positiony + 1 < gameBoard[0].length); // verificar que no se salga
            console.log(pieza.positiony);
            console.log(gameBoard[0].length);
                gameBoard[pieza.positionx][pieza.positiony + 1] = gameBoard[pieza.positionx][pieza.positiony];
                gameBoard[pieza.positionx][pieza.positiony] = 0;
                pieza.positiony++;
        }
        if(evt.key === 'a'){
            if(pieza.positiony - 1 >= 0); // verificar que no se salga
                gameBoard[pieza.positionx][pieza.positiony - 1] = gameBoard[pieza.positionx][pieza.positiony];
                gameBoard[pieza.positionx][pieza.positiony] = 0;
                pieza.positiony--;
        }
    });
};

function calcularIndice(i,j){
    let indice = (i*gameBoard[0].length) + j;
    return indice;

}

// Esta funcion crea la pieza
function crearPieza(valor, fila, col){
    // const nums = [2,4,8];
    // let num = Math.floor(Math.random() * 3); // esta funcion asigna un numero aleatorio entero entre 0 y 2 inclusivo
    let elemento = document.createElement("div");
    
    elemento.classList.add("cellInterior"); //clase nueva y dentro
    //elemento.textContent = nums[num];
    elemento.textContent = valor;
    // let ubicacion = document.querySelector(".cell");
    let ubicacion2 = document.querySelectorAll(".cell");

    const indice = calcularIndice(fila, col);
    ubicacion2[indice].appendChild(elemento);

    // ubicacion.appendChild(elemento)
}

//esta funcion calcula el indice para colocarlo dentro de la celda, es que es un flexbox


// game loop

function game(){
    // dibujar();
    //crearPieza(2, 2,2);
    setInterval(() => {
        //dibujar();
        console.log(gameBoard);
    }, 1000);

}

function dibujar(){
    for(let i = 0; i < gameBoard.length; i++){
        for(let j = 0; j < gameBoard[0].length; j++){
            if(gameBoard[i][j] != 0){

                        }
        }
    }
}

document.addEventListener('keypress', (evt) => {

    if(evt.key === 'd'){
        if(pieza.positiony + 1 < gameBoard[0].length){ // verificar que no se salga
        console.log(pieza.positiony);
        console.log(gameBoard[0].length);
            gameBoard[pieza.positionx][pieza.positiony + 1] = gameBoard[pieza.positionx][pieza.positiony];
            gameBoard[pieza.positionx][pieza.positiony] = 0;
            pieza.positiony++;
        }
    }
    if(evt.key === 'a'){
        if(pieza.positiony - 1 >= 0){ // verificar que no se salga
            gameBoard[pieza.positionx][pieza.positiony - 1] = gameBoard[pieza.positionx][pieza.positiony];
            gameBoard[pieza.positionx][pieza.positiony] = 0;
            pieza.positiony--;
        }
    }
});

function pausarIntervalo(id){

}

game();
