// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

// Función para validar el nombre
function esNombreValido(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre);
}

// Función para agregar un amigo
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    
    if (!esNombreValido(nombre)) {
        alert("Nombre inválido. Solo se permiten letras y espacios.");
        inputNombre.value = "";
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreGanador = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 ¡El amigo secreto es: <span class="ganador">${nombreGanador}</span>! 🎈`;
}
