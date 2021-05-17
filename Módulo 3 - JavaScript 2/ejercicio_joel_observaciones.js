
// EJERCICIO 2
// del siguiente  arreglo imprimir únicamente los colores Azul, Verde y Amarillo
var colores = ["Azul", "rosa", "rojo", "Amarillo", "Negro", "Naranja", "Verde"];
for (i=0; i<colores.length; i++) {
    if (colores[i] === "Azul" || colores[i] === "Verde" || colores[i] === "Amarillo") {
        console.log(colores[i]);
    }
}


//Bien , o bieb pudiste solo hacer esto : 
// colores [0]
// colores [ 6]
// colores [3]
// SAA: Cierto, no sé por qué di por hecho que querías que usáramos el for :P



// EJERCICIO 3
// Del siguiente arreglo imprime de DOS en DOS hasta el final del arreglo 
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (var i=0; i<(arrayNumeros.length); i=i+2) {
    console.log(arrayNumeros.slice(i,i+2));  
}
// Aqui no era necesario un slice, bastaba con imprimir arrayNumeros[i] el indice i , ya sabe que va de dos en dos. osea tenia que imprimir 1,3,5,7,9,.. 19
// Otra obeservacion es que tu  indice i no esta declarada como variable, le falta la palabra var , seguramente te funciona, o hace algo extraño pero hay que tener cuidado , siempre deben estar declaradas las variables.


// EJERCICIO 4
// IDENTIFICA EL ERROR 
// DEBE Imprimir del 1 al 20 
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
for (var i = 0 ; i < arrayNumeros.length ; i++) {
    console.log(arrayNumeros[i]);
}
// Mismo Caso , tu i no tiene la palabra  var lo de mas esta bien :D 


// EJERCICIO 5
//crea un arreglo con el listaddo de empleados, e imprimelos
const empleados = ['Mike Wasowski', 'James Sullivan', 'Randal Port', 'Señor Waternooze'];
for (var i=0; i<empleados.length; i++){
    console.log(empleados[i]);
}
// Mismo Caso , tu i no tiene la palabra  var lo de mas esta bien :D 
 

// EJERCICIO 6 
// del siguiente arreglo imprime unicamente del 11 al 20
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const indice11 = arrayNumeros.findIndex((element) => element === 11);

for (i=indice11; i<arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
}
/** Genial! 
Una formas mas sencilla, jugar con el indice del for : 
for ( var i = 11 ; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
}
*/

// EJERCICIO 7
// imprime de la sigueinte forma los dos arreglos:   ** Asi debe verse en consola : 
// 1 joel
// 2 Anderson
// 3 IRIS
// 4 Pamela
// 5 Emilio
// 6 Jose
// 7 Naye
// 8 Emma 

var nombres = ["Joel","Anderson","Iris","Pamela","Emilio","Jose","Naye","Emma"];
var numeros = [1,2,3,4,5,6,7,8];

if (nombres.length != numeros.length) {
    console.error('No coinciden las longitudes de los arreglos');
} else {
    for (var i=0; i<nombres.length; i++) {
        console.log(numeros[i] + ' ' + nombres[i]);
    }
}
/**** GENIAL! ; MEGUSTO COMO LO HICISTE!! **** 


 EL sort es muy util para ordenamiento de las Consas, como Nota esta funcion lo que hace es ordenar alfabeticamente los numeros, pero con la forma que hiciste en tu ejemplo es como se hace para numeros, 
 si tu quisieras ordenar numeros como 1, 54, 4, 300 1000
 te los ordenara asi :: 1, 10000, 300, 4 ,54 , porque solo tomara el primer digito, y alfabeticamente es correcto, pero numericamente no, solo  funciona como con tu ejemplo  :D 


console.log(arreglo1.sort());
console.log(arreglo1.sort(comparacionManual)); // Dependiendo de lo que regrese la función, se tomará la comparación como mayor o menor

function comparacionManual(a, b) {
    return a - b;
}
*/