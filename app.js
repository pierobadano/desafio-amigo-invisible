// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function limpiarTexto(){
    document.getElementById("amigo").value = "";
}
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo"); 
    if (nombreAmigo.value === ""){
        alert ("Porfavor, Ingrese un nombre válido.");
        return;
    }
    amigos.push(nombreAmigo.value);
    limpiarTexto();
    actualizarLista();
    return;
}
function actualizarLista(){ 
    let elementoHTML = document.querySelector("ul");
    elementoHTML.innerHTML = "";
    for (let i=0; i < amigos.length; i++){      
        elementoLista= document.createElement("li");
        elementoLista.innerHTML = amigos[i];
        elementoHTML.appendChild(elementoLista);
    }
}
function sortearAmigo(){
    if (amigos.length === 0){               //verificacion si la lista contiene elementos
        alert("La lista de amigos esta vacía")
        return;
    }
    indiceRandom = Math.floor(Math.random()*amigos.length); //obtengo un indice random entre 0 y el largo del array (cantidad de amigos)
    nombreSorteado = amigos[indiceRandom]; //almaceno el nombre en base al indice sorteado
    let sortearNombre = document.getElementById("resultado");  //Lo muestro en pantalla en el espacio asignado para el resultado
    sortearNombre.innerHTML = nombreSorteado;
}