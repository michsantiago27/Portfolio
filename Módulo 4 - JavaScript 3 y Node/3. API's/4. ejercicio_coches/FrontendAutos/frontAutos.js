// Al cargar el html, ejecutar este fetch de Hola Munda
fetch('http://localhost:3000/')
.then( res => res.json())
.then(data => console.log(data))

pintarListado()         // Función global para ejecutarse al cargar el sitio. Dentro de esa función metí el fetch para poder recarga

function pintarListado() {
    // Traer los autos del back y pintarlos en el front
    fetch('http://localhost:3000/listado')
    .then( res => res.json())
    .then(x => pintarLista(x))    // 0 es home, 1 es carrito. Para saber qué id usar al consultar la base
}

function mostrarAuto(elementId) {
    // Agregar información del auto
    var peticionEndpoint = 'http://localhost:3000/auto?idAuto=' + elementId
    fetch(peticionEndpoint)
    .then(res => res.json())
    .then(data => {                // Data es el objeto ya utilizable para Javascript
        // Mostrar un "modal"
        var divListado = document.getElementById('contenedorListado')
        var x = document.createElement('DIV')
        var att = document.createAttribute('class')
        att.value = 'detalleAuto'
        x.setAttributeNode(att)
        // Asignar un id al modal para poder borrarlo al dar clic en tache
        att = document.createAttribute('id')
        att.value = 'modalAuto'
        x.setAttributeNode(att)
        // Crear el tachecito para cerrar
        var tache = document.createElement('DIV')
        var t = document.createTextNode('X')
        tache.appendChild(t)
        att = document.createAttribute('class')
        att.value = 'cerrarModal'
        tache.setAttributeNode(att)
        att = document.createAttribute('onclick') // Asignarle la función para cerrar al hacer clic
        att.value = 'cerrarAuto()'
        tache.setAttributeNode(att)
        x.appendChild(tache)        // Agregar el tache al modal

        // Pintar info del coche
        // Marca
        var divMarca = document.createElement('DIV')
        divMarca.appendChild(document.createTextNode(data.marca))
        att = document.createAttribute('class')
        att.value = 'detalleAutoMarca'
        divMarca.setAttributeNode(att)
        x.appendChild(divMarca)
        // Modelo
        var divModelo = document.createElement('DIV')
        divModelo.appendChild(document.createTextNode(data.modelo))
        att = document.createAttribute('class')
        att.value = 'detalleAutoModelo'
        divModelo.setAttributeNode(att)
        x.appendChild(divModelo)
        // Descripción
        var divDescripcion = document.createElement('DIV')
        divDescripcion.appendChild(document.createTextNode(data.descripcion))
        att = document.createAttribute('class')
        att.value = 'detalleAutoDescripcion'
        divDescripcion.setAttributeNode(att)
        x.appendChild(divDescripcion)
        // Imagen
        var divImagen = document.createElement('IMG')
        att = document.createAttribute('class')
        att.value = 'detalleAutoImagen'
        divImagen.setAttributeNode(att)
        att = document.createAttribute('src')
        att.value = data.imagen
        divImagen.setAttributeNode(att)
        x.appendChild(divImagen)
        // Precio
        var divPrecio = document.createElement('DIV')
        divPrecio.appendChild(document.createTextNode(data.precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })))
        att = document.createAttribute('class')
        att.value = 'detalleAutoPrecio'
        divPrecio.setAttributeNode(att)
        x.appendChild(divPrecio)
       
        // Pintar botón de reservar
        var botonReservar = document.createElement('BUTTON')
        botonReservar.appendChild(document.createTextNode('Reservar'))
        att = document.createAttribute('id')
        att.value = elementId
        botonReservar.setAttributeNode(att)
        att = document.createAttribute('class')
        att.value = 'botonReservar'
        botonReservar.setAttributeNode(att)
        att = document.createAttribute('onclick')
        att.value = 'reservar(this.id)'
        botonReservar.setAttributeNode(att)
        x.appendChild(botonReservar)

        // Agregar el modal al div contenedor
        divListado.appendChild(x)   
    })
    .catch(reject => console.log('No la armé chido :( ' + reject))
}

function cerrarAuto() {
    var modal = document.getElementById('modalAuto')
    modal.remove()
}

function reservar(elementId) { // Podría solo enviar el id y agregar el coche solo en el back, pero voy a enviar toda la info para futuras dudas
    // Mostrar un mensaje de "Reserva exitosa" y regresar a la pantalla principal
    console.log('Clic en reservar. Auto: ' + elementId)
    var peticionEndpoint = 'http://localhost:3000/reservar?idAuto=' + elementId
    fetch(peticionEndpoint, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(x => console.log(x))
    .catch(() => {
        console.log('No jaló chido :(')
        var x = document.createElement('DIV')
        x.appendChild(document.createTextNode('Algo salió mal :('))
        att = document.createAttribute('class')
        att.value = 'error'
        x.setAttributeNode(att)
        document.getElementById('contenedorListado').appendChild(x)
    })
}

function verCarrito() {
    var peticionEndpoint = 'http://localhost:3000/carrito'
    fetch(peticionEndpoint)
    .then(x => x.json())
    .then(x => pintarLista(x))    // 0 es home, 1 es carrito. Para saber qué id usar al consultar la base
    .catch(rej => mensajeError())
}

function pintarLista(listado) {
    document.getElementById('contenedorListado').remove()   // Borrar listado anterior
    var divListado = document.createElement('DIV')          // Crear nuevo listado (carrito) y asignarle sus estilos   id='contenedorListado' class="contenedorListado"
    var att = document.createAttribute('id')                // Asignar id
    att.value = 'contenedorListado'
    divListado.setAttributeNode(att)
    att = document.createAttribute('class')                 // Asignar clase
    att.value = 'contenedorListado'
    divListado.setAttributeNode(att)                        // Agregar todo al contenedor del listado
    document.body.appendChild(divListado)                   // Agregar el contenedor al body

    // Pintar coches en el carrito
    for (var i = 0; i < listado.length; i++) {
        // MANERA ORDENADA
        // 1. Crear elementos con JS
        let divElemento = document.createElement('div')
        let divMarca = document.createElement('div')
        let divModelo = document.createElement('div')
        let imgImagen = document.createElement('img')

        // 2. Crear contenido para los elementos
        let conMarca = document.createTextNode(listado[i].marca)
        let conModelo = document.createTextNode(listado[i].modelo)

        // 3. Vincular contenido con los elementos
        divMarca.appendChild(conMarca)
        divModelo.appendChild(conModelo)

        // 4. Asignar clases a los elementos
        divElemento.classList.add('elementoListado')
        divMarca.classList.add('marcaListado')
        divModelo.classList.add('modeloListado')
        imgImagen.classList.add('imagenListado')
        
        // 5. Crear atributos de los elementos
        attElementoId = document.createAttribute('id')
        attElementoOnclick = document.createAttribute('onclick')
        attImagenSrc = document.createAttribute('src')
        
        // 6. Asignar un valor a los atributos
        attElementoId.value = listado[i].id
        attElementoOnclick.value = 'mostrarAuto(this.id)'
        attImagenSrc.value = listado[i].imagen

        // 7. Asignar atributos a los elementos
        divElemento.setAttributeNode(attElementoId)
        divElemento.setAttributeNode(attElementoOnclick)
        imgImagen.setAttributeNode(attImagenSrc)

        // 8. Agregar nuevos elementos al contenedor
        divElemento.appendChild(divMarca)
        divElemento.appendChild(divModelo)
        divElemento.appendChild(imgImagen)
        divListado.appendChild(divElemento)
    }
}

function mensajeError() {
    console.log('No jaló chido :(')
    var x = document.createElement('DIV')
    x.appendChild(document.createTextNode('Algo salió mal :('))
    att = document.createAttribute('class')
    att.value = 'error'
    x.setAttributeNode(att)
    document.getElementById('contenedorListado').appendChild(x)  
}

/* Falta el ID en el elemento diferenciando el coche
att = document.createAttribute('onclick')
att.value = 'mostrarAuto(this.id)'                          // Agregar la función para enviar el ID del elemento que sea clickeado
x.setAttributeNode(att)
*/

// Revisar en Keep en la nota de JavaScript la estructura que usa Anderson para crear elementos. Se ve más ordenado