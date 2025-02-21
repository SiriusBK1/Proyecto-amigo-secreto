// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
// En este caso, el valor de amigo es un string, pero en el futuro podría ser un

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo");
    let amigo = nuevoAmigo.value;
    if(amigo.length > 0){
        nuevoAmigo.value = '';
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    mostrarAmigos();
        }else{
        alert("Ingrese un nombre válido");
    }
}

function mostrarAmigos() {
    let amigos = document.getElementById("listaAmigos");
    amigos.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        amigos.innerHTML += `<li>${amigo}</li>`;
    });
};

function elegirAmigo() {
    let amigoElegido = Math.floor(Math.random() * listaAmigos.length)
    console.log(listaAmigos[amigoElegido])
    return listaAmigos[amigoElegido]
}

//function limpiarBox//