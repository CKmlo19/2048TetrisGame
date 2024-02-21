
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

eventosTeclado();
