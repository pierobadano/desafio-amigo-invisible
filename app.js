// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo"); 
    if (nombreAmigo.value === ""){
        alert ("Porfavor, Ingrese un nombre válido.");
        return;
    }
    amigos.push(nombreAmigo.value);
    nombreAmigo.value= "";
    actualizarLista()
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
    