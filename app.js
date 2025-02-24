let listaAmigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo"); //ingresa nombre en la casilla blanca
    let amigo = nuevoAmigo.value;
    if(amigo.length > 0){     //si el nombre ingresado es mayor a 0
        nuevoAmigo.value = ''; 
    listaAmigos.push(amigo); // se agrega el nombre a la lista de amigos
    console.log(listaAmigos); // se muestra en consola
        }else{
        alert("Ingrese un nombre válido"); // si no se ingresa un nombre se muestra un alert
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
  if(listaAmigos.length === 0){ //si la lista de amigos esta vacia
    alert("No hay amigos para elegir"); //se muestra un alert
    return;
    }
    let amigoElegido = Math.floor(Math.random() * listaAmigos.length) //elige un amigo al azar
    console.log(listaAmigos[amigoElegido]) //muestra en consola el amigo elegido
    return listaAmigos[amigoElegido] //retorna el amigo elegido
}
function mostrarAmigoElegido() {
    let amigoElegidoElemento = document.getElementById("elegido"); //selecciona el id amigoElegido en el html
    let amigo=elegirAmigo(); //se guarda el amigo elegido en una variable
    if(amigo) {
    amigoElegidoElemento.innerHTML = `<p>El amigo elegido es ${amigo}</p>`; //muestra el amigo elegido en la pagina
}else{
    alert("No hay amigos para elegir"); //si no hay amigos se muestra un alert
    }
}
//mostrarAmigoElegido();//
//function limpiarBox//
