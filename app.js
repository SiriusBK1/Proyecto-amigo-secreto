let listaAmigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo"); //ingresa nombre en la casilla blanca
    let amigo = nuevoAmigo.value;

    if(amigo.length > 0 && !listaAmigos.includes(amigo)){  //si el nombre ingresado es mayor a 0
        nuevoAmigo.value = ''; 
    listaAmigos.push(amigo); // se agrega el nombre a la lista de amigos
    amigosDisponibles=[...listaAmigos]; //se copia la lista de amigos
    console.log(listaAmigos); // se muestra en consola
        }else{
        alert("Ingrese un nombre válido o que no esté repetido"); // si no se ingresa un nombre se muestra un alert
    }
    mostrarAmigos(); //muestra los amigos en la lista
}

function mostrarAmigos() { //funcion para mostrar los amigos en la lista
    let amigos = document.getElementById("listaAmigos"); //selecciona el id listaAmigos en el html
    amigos.innerHTML = ""; 
    listaAmigos.forEach((amigo) => {
        amigos.innerHTML += `<li>${amigo}</li>`; //muestra los amigos en una lista visible en la pagina
    });
};

function elegirAmigo() {
  if(amigosDisponibles.length === 0){ //si la lista de amigos esta vacia
    alert("Todos los amigos han sido sorteados. Se reiniciará el sorteo.");
        amigosDisponibles = [...listaAmigos]; // Restablecer lista de sorteos
        limpiarLista(); //limpia la lista de amigos
        return null; //retorna null
    }else{
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length); //elige un amigo al azar
    let amigoElegido = amigosDisponibles.splice(indiceAleatorio, 1)[0]; //elimina el amigo elegido de la lista de amigos
    console.log(listaAmigos[amigoElegido]) //muestra en consola el amigo elegido
    return amigoElegido //retorna el amigo elegi   do
    }
}
function mostrarAmigoElegido() {
    let amigoElegidoElemento = document.getElementById("elegido"); //selecciona el id amigoElegido en el html
    let amigo=elegirAmigo(); //se guarda el amigo elegido en una variable
    if(amigo) {
    amigoElegidoElemento.innerHTML = `<p> El amigo elegido es <em><strong><span class="resaltado">${amigo}</em></strong></p>`; //muestra el amigo elegido en la pagina
    }
}
function limpiarLista(){
    listaAmigos = [];
    amigosDisponibles = [];
    mostrarAmigos();
    document.getElementById("elegido").innerHTML = "";
}
//mostrarAmigoElegido();//
//function limpiarBox//
