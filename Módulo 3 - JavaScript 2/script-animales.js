/** Script usado para insertar y borrar animales de una lista a través de dos botones en un html */

var animales = ["Vaca", "Cerdito", "Bola de nieve"];

function insertar() {
    console.log("Clic en agregar");
    var nuevoAnimal = document.getElementById("inputAnimal").value;
    animales.push(nuevoAnimal);
    actualizarLista();
}


function borrar() {
    console.log("Clic en borrar");
    animales.pop();
    actualizarLista();
}


function actualizarLista() {
    // Definir lista HTML
    var listaHtml = "";

    for (var i = 0; i<animales.length ; i++) {
        listaHtml = listaHtml + "<p>" + animales[i] + "</p>";
    }

    document.getElementById("lista").innerHTML = listaHtml;
}