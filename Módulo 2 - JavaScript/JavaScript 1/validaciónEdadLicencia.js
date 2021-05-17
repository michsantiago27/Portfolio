/* 
Programa que le pregunta al usuario su edad y valida si tiene edad suficiente para sacar su licencia de manejo

Creador: Santiago Antón
*/

const edadMinima = 18;
const mensajeSuccess = "Felicidades! Podrás sacar tu licencia";
const mensajeFailure = "Lo sentimos, no cumples con la edad mínima para sacar tu licencia";
const mensajeError = "Algo salió mal :(";

// Preguntar por la variable fNacimiento
// prompt("Ingresa el año en que naciste: ");
// var fNacimiento = require(); // No se pueden pedir inputs con require(); readline(); prompt();

// Declaración de variables en duro dado que no sabemos pedir inputs :(
var anioActual = 2021;
var anioNacimiento = 1993;

var edadUser = anioActual - anioNacimiento;

if (edadUser >= edadMinima) {
    console.log(mensajeSuccess);
} else if (edadUser < edadMinima) {
    console.log(mensajeFailure);
} else {
    console.error(mensajeError);
}

