let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Evitar nombres repetidos (insensible a mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado sin emojis
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoLista.appendChild(li);

    // Eliminar de la lista para que no pueda volver a salir
    amigos.splice(indiceAleatorio, 1);
    mostrarLista();

    // Mostrar en consola los nombres que aún quedan
    console.log("Nombres restantes:", amigos);
}