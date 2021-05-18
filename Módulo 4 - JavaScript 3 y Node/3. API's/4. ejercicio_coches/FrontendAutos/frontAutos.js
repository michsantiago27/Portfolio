// Al cargar el html, ejecutar este fetch de Hola Munda
fetch('http://localhost:3000/')
.then( res => res.json())
.then(data => console.log(data))

// Traer los autos del back y pintarlos en el front
fetch('http://localhost:3000/listado')
.then( res => res.json())
.then(data => { 
    console.log(data)
    pintarListado(data)
})

function pintarListado(listado) {
    var divListado = document.getElementById('contenedorListado')
    // divListado.innerHTML = listado[0].descripcion
    for (var i = 0; i < listado.length; i++) {
        var x = document.createElement('P')
        var t = document.createTextNode(listado[i].descripcion)
        x.appendChild(t)
        divListado.appendChild(x)
    }
    
}
