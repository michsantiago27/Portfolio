/**
* Proyecto 2: Cajero Automático

* Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
* Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
* var cuentas = [
*   { nombre: "Mali", saldo: 200, password: 'helloworld' }
*   { nombre: "Gera", saldo: 290, password: 'l33t' }
*   { nombre: "Maui", saldo: 67, password: '123' }
* ];
* Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
* Consultar saldo
* Ingresar monto
* Retirar monto
* Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
* Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
* Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
* Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
* Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.
* RETO EXTRA PLUS:
* Si ya posees conocimientos de desarrollo web con html, css y javascript. Haciendo uso del DOM crea una interfaz con html y css que maneje toda la interacción descrita arriba
* 
*/

// Declarar usuarios ( Base de datos )
var cuentas = [
    { nombre: "Marili", saldo: 200, username: "mali", password: 'helloworld' },
    { nombre: "Gerardo", saldo: 290, username: "gera", password: 'l33t' },
    { nombre: "Mauricio", saldo: 67, username: "maui", password: '123' }
];

// Variables globales (Solo aplican después del login)
var username;
var opcionHome;

/******************Inputs que tendrá que meter el usuario desde el HTML ****************/

// Monto a ingresar o retirar
const montoOperacion = 50;

/***************************************************************************************/


// Función para autenticar al usuario que se está loggeando
function autentication() {
    const username = document.getElementById("usr").value;
    const password = document.getElementById("pss").value;
    const user = cuentas.find(cuenta => cuenta.username === username); // find busca en en todos los objetos del arreglo. 'cuenta' toma el valor de cada objeto en cada iteración
    const validPassword = user && user.password; // El && no solo es comparación, también asigna. En este caso si 'user' no existe porque no se encontró el objeto buscado, lo deja en FALSE
    const esLoginValido = validPassword === password; // Comparación + asignación

    if(!esLoginValido) {
        console.log("Autenticación incorrecta :(");
        document.getElementById("mensajeRetro").style.display = "flex";
    } else {
        console.log("Autenticación correcta");
        window.location.href = './home.html' + '#' + username; // Pasar variables por la URL
    }
}

// Función que lee la opción que se ingresó en el home
function obtenerOpcion() {
    opcionHome = document.getElementById("opcionHome").value;
    username = window.location.hash.substring(1);
    console.log("Opción inresada: " + opcionHome + "\nUsuario: " + username);
    // Funciones según la opción seleccionada
    if (opcionHome === "1") {
        consultarSaldo();
    } else if (opcionHome === "2" || opcionHome === "3") {
        document.getElementById("vistaHome").style.display = "none";
        document.getElementById("vistaTransaccion").style.display = "flex";
        document.getElementById("mensaje").innerHTML = "";
    } else {
        console.log("Opción inválida");
    }

    document.getElementById("opcionHome").value = "";
}


/*****  Funciones de cada opción del cajero *****/
/*
1.  Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta */
function consultarSaldo() {
    const user = cuentas.find(cuenta => cuenta.username === username);
    const respuesta = document.getElementById("mensaje");
    respuesta.innerHTML = "<p> Saldo actual: $" + user.saldo + "</p>";
}

/* 
2. Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
3. Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total. */
function ingresarRetirarMonto() {
    const user = cuentas.find(cuenta => cuenta.username === username);
    const saldoAnterior = user.saldo;
    const respuesta = document.getElementById("mensaje");
    
    if (document.getElementById("monto").value.length == 0) { // Validar campo vacíos
        respuesta.innerHTML = "<p>Sin dato</p>";
        return;
    }
    
    const montoOperacion = parseFloat(document.getElementById("monto").value); // Hay que convertir el value a float con 'parseFloat()'

    if (montoOperacion <= 0) {  // Validación de inputs negativos
        respuesta.innerHTML = "<p>El monto debe ser mayor a $0</p>";
        return;
    }

    if(opcionHome === "2") { // Validamos si se ingresó 2 ó 3 para ver si sumamos o restamos
        if ((user.saldo + montoOperacion) > 990) {
            respuesta.innerHTML = "<p>No se puede superar el monto de $990</p><p>Saldo actual: $" + user.saldo + "</p>";
        } else {
            user.saldo += montoOperacion;
            respuesta.innerHTML = "<p> Saldo anterior a la operación: $" + saldoAnterior + "</p><p> Instrucción: Depositar $" + montoOperacion + "</p><p>Nuevo saldo: $" + user.saldo + "</p>";
        }
    } else if (opcionHome === "3") {
        if ((user.saldo - montoOperacion) < 10) {
            respuesta.innerHTML = "<p>No puedes tener menos de $10</p><p>Saldo actual: $" + user.saldo + "</p>";
        } else {
            user.saldo -= montoOperacion;
            respuesta.innerHTML = "<p> Saldo anterior a la operación: $" + saldoAnterior + "</p><p> Instrucción: Retirar $" + montoOperacion + "</p><p>Nuevo saldo: $" + user.saldo + "</p>";
        }
 }

    document.getElementById("monto").value = "";
}

// Función para cancelar una transacción y regresar al home
function cancelarTransaccion() {
    document.getElementById("vistaHome").style.display = "flex";
    document.getElementById("vistaTransaccion").style.display = "none";
    document.getElementById("mensaje").innerHTML = "";
}

// Función para cerrar sesión
function cerrarSesion() {
    location.href = "./index.html";
}
