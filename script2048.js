var gameBoard = [ [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]]



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
    }else if (randomNumber < 90) {
        console.log("Número generado: 4");
    } else if (randomNumber <= 100) {
        console.log("Número generado: 8");
    }else{
        console.log("Error al crear el número aleatorio");
    }
};
// funcion para los eventos del teclado

function eventosTeclado(){
    document.addEventListener('keydown', (evt) => {
        if(evt.key == 'ArrowRight' || evt.key == 'ArrowLeft'){
            console.log("SIp")
        }
    });
};

eventosTeclado();
