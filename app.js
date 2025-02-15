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
}
