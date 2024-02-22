
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
    
    elemento.classList.add("cellInterior"); //clase nueva y dentro
    elemento.textContent = nums[num];
    let ubicacion = document.querySelector(".cell0");
    let ubicacion2 = document.querySelectorAll(".cell0");
    console.log(ubicacion2);

    ubicacion.appendChild(elemento)
}


// game loop

function game(){
    

}


crearPieza();
eventosTeclado();
