
// variable global de tablero
// forma interna para representar el tablero
// 0 = vacio, otro numero es el numero dentro de dicha celda

let movesCounter = 0;	// contador de movimientos
let piecesCounter = 1;	// contador de piezas
let inicioTiempo; // Variable para almacenar el momento de inicio del juego
let intervaloCronometro; // Variable para almacenar el intervalo del cronómetro

const pieza = {
    num: 2,
    positionx: 0,
    positiony: Math.floor(Math.random() * 4)
};

var gameBoard = [ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];

// Intento de función para mover el bloque (solo caida)
function dropBlock() {
    countPieces();
    const fallingBlock = document.getElementById('fallingBlock');
    fallingBlock.innerText = generateRandomNumber();
};

// Función para iniciar el juego
function startGame() {
    setInterval(dropBlock, 1000); // Llamada a la función dropBlock cada segundo
    
};

function actualizarCronometro() {
    const tiempoActual = new Date();
    const tiempoTranscurrido = tiempoActual - inicioTiempo;

    // Calcula minutos y segundos
    const minutos = Math.floor(tiempoTranscurrido / (1000 * 60));
    const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);

    // Actualiza el contenido del elemento HTML con el cronómetro
    document.getElementById('scoreTime').textContent = `${minutos}m ${segundos}s`;
};

// Función para incrementar el contador de movimientos
function incrementarMovimientos() {
    movesCounter++;
    document.getElementById('scoreMoves').textContent = movesCounter;
};

// Función que recorre la matriz y cuenta la cantidad de piezas en el tablero
function countPieces() {
    let counter = 1;
    for (let row = 0; row < gameBoard.length; row++) {
        for (let col = 0; col < gameBoard[row].length; col++) {
            if (gameBoard[row][col] !== 0) {
                piecesCounter = counter++;
            }
        }
    }
    document.getElementById('scorePieces').textContent = piecesCounter;
};

// Función funciones de botones de play y pause
function ClickActive(action){
    game();
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
            incrementarMovimientos();
            if(pieza.positiony + 1 < gameBoard[0].length){ // verificar que no se salga
                if(gameBoard[pieza.positionx][pieza.positiony + 1] == pieza.num || 
                    gameBoard[pieza.positionx][pieza.positiony + 1] == 0) // verifica que sea el mismo numero o que este vacia
                    {
                        gameBoard[pieza.positionx][pieza.positiony + 1] += pieza.num;
                        gameBoard[pieza.positionx][pieza.positiony] = 0;
                        pieza.positiony++;
                        pieza.num = gameBoard[pieza.positionx][pieza.positiony]
                        console.log(gameBoard);
                    }
            }
            updateGUI();
        }
        if(evt.key === 'a'){
            incrementarMovimientos();
            if(pieza.positiony - 1 >= 0){ // verificar que no se salga
                if(gameBoard[pieza.positionx][pieza.positiony - 1] == pieza.num || 
                    gameBoard[pieza.positionx][pieza.positiony - 1] == 0) // verifica que sea el mismo numero o que este vacia
                    {
                        gameBoard[pieza.positionx][pieza.positiony - 1] += pieza.num;
                        gameBoard[pieza.positionx][pieza.positiony] = 0;
                        pieza.positiony--;
                        pieza.num = gameBoard[pieza.positionx][pieza.positiony]

                        console.log(gameBoard);
                    }

            }
            updateGUI();
        }
        if(evt.key === 's'){
            incrementarMovimientos();
            if(pieza.positionx + 1 < gameBoard.length){ // verificar que no se salga
                if(gameBoard[pieza.positionx + 1][pieza.positiony] == pieza.num || 
                    gameBoard[pieza.positionx + 1][pieza.positiony] == 0) // verifica que sea el mismo numero o que este vacia
                    {
                        gameBoard[pieza.positionx + 1][pieza.positiony] += pieza.num;
                        gameBoard[pieza.positionx][pieza.positiony] = 0;
                        pieza.positionx++;
                        pieza.num = gameBoard[pieza.positionx][pieza.positiony];

                        console.log(gameBoard);
                    }

            }
            updateGUI();
        }
});
};

// Función para mostrar la ventana modal
function openModalGanador() {
    const finTiempo = new Date(); // Guarda el momento de finalización del juego

    // Calcula la diferencia de tiempo en milisegundos
    const tiempoTranscurrido = finTiempo - inicioTiempo;

    // Calcula minutos y segundos
    const minutos = Math.floor(tiempoTranscurrido / (1000 * 60));
    const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);

    const tiepoDeJuego = document.getElementById('F-Tiempo');
    tiepoDeJuego.textContent = `Tiempo: ${minutos}m ${segundos}s`;

    const movimientosDeJuego = document.getElementById('F-Movimientos');
    movimientosDeJuego.textContent = `Movimientos: ${movesCounter}`;

    const piezasDeJuego = document.getElementById('F-Piezas');
    piezasDeJuego.textContent = `Piezas: ${piecesCounter}`;

    const modal = document.getElementById('modal');
    modal.style.display = 'block';
};

// Función para cerrar la ventana modal
function closeModalGanador() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
};

function openModalPerdedor() {
    const finTiempo = new Date(); // Guarda el momento de finalización del juego

    // Calcula la diferencia de tiempo en milisegundos
    const tiempoTranscurrido = finTiempo - inicioTiempo;

    // Calcula minutos y segundos
    const minutos = Math.floor(tiempoTranscurrido / (1000 * 60));
    const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);

    const tiepoDeJuego = document.getElementById('F-Tiempo');
    tiepoDeJuego.textContent = `Tiempo: ${minutos}m ${segundos}s`;

    const movimientosDeJuego = document.getElementById('F-Movimientos');
    movimientosDeJuego.textContent = `Movimientos: ${movesCounter}`;

    const piezasDeJuego = document.getElementById('F-Piezas');
    piezasDeJuego.textContent = `Piezas: ${piecesCounter}`;

    const modal2 = document.getElementById('modal2');
    modal2.style.display = 'block';
};

// Función para cerrar la ventana modal
function closeModalPerdedor() {
    const modal2 = document.getElementById('modal2');
    modal2.style.display = 'none';
};


// game loop
function game(){
    eventosTeclado(); // lo primero es asignarle un eventListener al teclado
    
    console.log(gameBoard);
    inicioTiempo = new Date(); // Guarda el momento de inicio del juego
    
    intervaloCronometro = setInterval(actualizarCronometro, 1000);

    document.getElementById('scorePieces').textContent = piecesCounter;

    const intervalo = setInterval(() => {
        
        console.log(gameBoard);
        caerAutomaticamente(intervalo);
        verificarGanador(intervalo);

    }, 1000);
};

function buttomRestart1(){
    closeModalGanador();
    gameBoard = [ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
    updateGUI();
    clearInterval(intervaloCronometro); // Detén el cronómetro
    document.getElementById('scoreTime').textContent = '0m 0s'; // Reinicia el cronómetro
    movesCounter = 0;
    document.getElementById('scoreMoves').textContent = movesCounter;
    piecesCounter = 0;
    document.getElementById('scorePieces').textContent = piecesCounter;
};

function buttomRestart2(){
    closeModalPerdedor();
    gameBoard = [ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
    updateGUI();
    clearInterval(intervaloCronometro); // Detén el cronómetro
    document.getElementById('scoreTime').textContent = '0m 0s'; // Reinicia el cronómetro
    movesCounter = 0;
    document.getElementById('scoreMoves').textContent = movesCounter;
    piecesCounter = 0;
    document.getElementById('scorePieces').textContent = piecesCounter;
};


// Esta funcion hace que la pieza caiga automaticamente de manera vertical
function caerAutomaticamente(intervalo){

    if(pieza.positionx + 1 >= gameBoard.length){
        crearNewPieza();
    }
    else if(gameBoard[pieza.positionx + 1][pieza.positiony] == 0 || 
        gameBoard[pieza.positionx + 1][pieza.positiony] == pieza.num)
        {
        pieza.num += gameBoard[pieza.positionx + 1][pieza.positiony];
        gameBoard[pieza.positionx + 1][pieza.positiony] = pieza.num;
        gameBoard[pieza.positionx][pieza.positiony] = 0;
        pieza.positionx++;
        
    }
    // si abajo no es 0 y la pieza no es la misma suceden dos cosas
    else if(gameBoard[pieza.positionx + 1][pieza.positiony] != 0 && gameBoard[pieza.positionx + 1][pieza.positiony] != pieza.num){
        // si es en el puro inicio, el jugador pierde
        if(pieza.positionx == 0){
            console.log("Haz perdido");
            clearInterval(intervalo);
            openModalPerdedor();
        }
        // sino crea otra pieza
        else{ 
            crearNewPieza();
        }
    }
    updateGUI();
    //verificarBajar()
};


// esta funcion crea una nueva pieza
function crearNewPieza(){
    countPieces();
    generateRandomNumber();
    pieza.positionx = 0;
    pieza.positiony = Math.floor(Math.random() * 4);;
    gameBoard[pieza.positionx][pieza.positiony] = pieza.num;
};

function verificarGanador(intervalo){
    for(let i = 0; i < gameBoard.length; i++){
        for(let j = 0; j < gameBoard[0].length; j++){
            if(gameBoard[i][j] >= 2048){ // Si llego al 2048
                openModalGanador();
                clearInterval(intervalo);
                break;
            }
        }
    }
};

function pausarIntervalo(id){

};

function updateGUI(){
    countPieces();
    for (let row = 0; row < gameBoard.length; row++) {
        for (let col = 0; col < gameBoard[row].length; col++) {
            const cellId = `celda_${row}_${col}`;
            const cellElement = document.getElementById(cellId);

            // Actualiza la clase de la celda segun el valor en la matriz de juego
            if (gameBoard[row][col] === 0) {
                if (row === 0){
                    cellElement.className = 'firstCell';
                    cellElement.textContent = '';
                } else {
                    cellElement.className = 'cell';
                    cellElement.textContent = '';
                }
            } else if (gameBoard[row][col] === 2) {
                cellElement.className = 'cell2';
                cellElement.textContent = '2';
            } else if (gameBoard[row][col] === 4) {
                cellElement.className = 'cell4';
                cellElement.textContent = '4';
            } else if (gameBoard[row][col] === 8) {
                cellElement.className = 'cell8';
                cellElement.textContent = '8';
            } else if (gameBoard[row][col] === 16) {
                cellElement.className = 'cell16';
                cellElement.textContent = '16';
            } else if (gameBoard[row][col] === 32) {
                cellElement.className = 'cell32';
                cellElement.textContent = '32';
            } else if (gameBoard[row][col] === 64) {
                cellElement.className = 'cell64';
                cellElement.textContent = '64';
            } else if (gameBoard[row][col] === 128) {
                cellElement.className = 'cell128';
                cellElement.textContent = '128';
            } else if (gameBoard[row][col] === 256) {
                cellElement.className = 'cell256';
                cellElement.textContent = '256';
            } else if (gameBoard[row][col] === 512) {
                cellElement.className = 'cell512';
                cellElement.textContent = '512';
            } else if (gameBoard[row][col] === 1024) {
                cellElement.className = 'cell1024';
                cellElement.textContent = '1024';
            } else if (gameBoard[row][col] === 2048) {
                cellElement.className = 'cell2048';
                cellElement.textContent = '2048';
            } else{
                console.log("Error al actualizar la interfaz");
            }
        }
    }
};

// Funcion que recorre toda la matriz y verifica si hay algun bloque que tenga que bajar
function verificarBajar(){
    for(let i = gameBoard.length - 1; i >= 0; i--){
        for(let j = 0; j < gameBoard[0].length; j++){
            if(gameBoard[i][j] !== 0){
                if(i + 1 < gameBoard.length){
                    if(gameBoard[i + 1][j] === 0){
                        gameBoard[i + 1][j] = gameBoard[i][j];
                        gameBoard[i][j] = 0;
                        updateGUI();
                    }
                }
            }
        }
    }
}
