// variable global de tablero
// forma interna para representar el tablero
// 0 = vacio, otro numero es el numero dentro de dicha celda
let tablero = [
    [0,0,0,0],
    [0,2,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

const pieza = {
    positionx: 1,
    positiony: 1

}

function pruebaClick(id){
    alert("Click en " + id);

};

// function actualizarTablero(fila, col){
//     if(tablero[fila][col])

// }

// funcion para los eventos del teclado

function eventosTeclado(){
    document.addEventListener('keypress', (evt) => {
        console.log("Se ha presionado una tecla");
        console.log(evt.key);
        if(evt.key === 'd'){
            console.log("Entra?");

            if(tablero[pieza.positionx][pieza.positiony + 1] < tablero[0].length); // verificar que no se salga
                tablero[pieza.positionx][pieza.positiony + 1] = tablero[pieza.positionx][pieza.positiony];
                tablero[pieza.positionx][pieza.positiony] = 0;
                pieza.positiony++;
        }
        if(evt.key === 'a'){
            if(tablero[pieza.positionx][pieza.positiony - 1] > 0); // verificar que no se salga
                tablero[pieza.positionx][pieza.positiony - 1] = tablero[pieza.positionx][pieza.positiony];
                tablero[pieza.positionx][pieza.positiony] = 0;
                pieza.positiony--;
        }
    });
}

function calcularIndice(i,j){
    let indice = (i*tablero[0].length) + j;
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
    console.log(tablero);
    setInterval(() => {
        //dibujar();
        console.log(tablero);
        eventosTeclado();
    }, 1000);

}

function dibujar(){
    for(let i = 0; i < tablero.length; i++){
        for(let j = 0; j < tablero[0].length; j++){
            if(tablero[i][j] != 0){

                        }
        }
    }
}

function pausarIntervalo(id){

}

game();
