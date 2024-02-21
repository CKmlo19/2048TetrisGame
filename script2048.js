
function pruebaClick(id){
    alert("Click en " + id);

};

// funcion para los eventos del teclado

function eventosTeclado(){
    document.addEventListener('keydown', (evt) => {
        if(evt.key == 'ArrowRight' || evt.key == 'ArrowLeft'){
            console.log("SIp")
        }
    });
}

// Esta funcion crea la pieza
function crearPieza(){
    const nums = [2,4,8];
    let num = Math.floor(Math.random() * 3); // esta funcion asigna un numero aleatorio entero entre 0 y 2 inclusivo
    let elemento = document.createElement("div");
    elemento.textContent = nums[num].toString;
    let ubicacion = document.querySelector(".cell");
    ubicacion.appendChild(elemento)

}

eventosTeclado();
