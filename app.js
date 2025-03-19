let listaAmigos = [];
let amigosDisponibles = [];

function condicionesIniciales() {
    // Limpiar las listas de amigos
    listaAmigos = [];
    amigosDisponibles = [];

    // Limpiar la lista de amigos mostrada en el HTML
    mostrarAmigos();

    // Limpiar el mensaje del amigo elegido
    document.getElementById("elegido").innerHTML = "";

    // Limpiar el campo de entrada de nombre
    document.getElementById("amigo").value = "";

    // Deshabilitar el botón "Sorteo" al inicio o después de reiniciar
    document.getElementById("sorteo").disabled = true; 

    // Opcional: Puedes reiniciar el focus en el campo de texto para facilitar la entrada
    document.getElementById("amigo").focus();
}

// Función para agregar un nuevo amigo
function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo");
    let amigo = nuevoAmigo.value.trim();

    if (amigo.length === 0) {
        alert("El campo de nombre está vacío. Por favor, ingrese un nombre.");
    } else if (amigo.length > 20) {
        alert("El nombre no debe tener más de 20 caracteres.");
    } else if (!listaAmigos.includes(amigo)) {
        nuevoAmigo.value = ''; // Limpiar el campo después de añadir el nombre
        listaAmigos.push(amigo);
        amigosDisponibles = [...listaAmigos];
        console.log(listaAmigos);

        mostrarAmigos();
        verificarBotonSorteo();
    } else {
        alert("Este nombre ya ha sido añadido.");
    }
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarAmigos() {
    let amigos = document.getElementById("listaAmigos");
    amigos.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        amigos.innerHTML += `<li><span class="resaltado1">${amigo}</li>`;
    });
}

// Función para verificar si el botón "Sorteo" debe estar habilitado o no
function verificarBotonSorteo() {
    let botonSorteo = document.getElementById('sorteo');
    if (listaAmigos.length > 0) {
        botonSorteo.disabled = false;
    } else {
        botonSorteo.disabled = true;
    }
}

// Función para elegir un amigo al azar
function elegirAmigo() {
    if (amigosDisponibles.length === 0) {
        alert("Todos los amigos han sido sorteados. Se reiniciará el sorteo.");
        amigosDisponibles = [...listaAmigos];
        limpiarLista();
        return null;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
        let amigoElegido = amigosDisponibles.splice(indiceAleatorio, 1)[0];
        console.log(amigoElegido);
        return amigoElegido;
    }
}

// Función para mostrar el amigo elegido
function mostrarAmigoElegido() {
    let amigoElegidoElemento = document.getElementById("elegido");
    let amigo = elegirAmigo();
    if (amigo) {
        amigoElegidoElemento.innerHTML = `<p> El amigo elegido es <em><strong><span class="resaltado">${amigo}</em></strong></p>`;
    }
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    listaAmigos = [];
    amigosDisponibles = [];
    mostrarAmigos();
    document.getElementById("elegido").innerHTML = "";
    verificarBotonSorteo();
}

// Llamada inicial para establecer el estado de la página
condicionesIniciales();