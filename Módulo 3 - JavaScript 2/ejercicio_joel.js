// INSTRUCCIONES:
// DE LOS SIGUIENTES EJERCICIOS RESOLVER LO QUE SE TE PIDE, ES NECESARIO COMENTAR LOS EJERCICIOS QUE  NO ESTES RESOLVIENDO
// YA QUE SE TE PIDE QUE ARREGLES EL CODIGO EN ALGUNOS. 
// EJEMPLO: SI RESUELVES EL EJERCICIO 1 . COMENTA LOS DEMAS EJERCICIOS PARA QUE NO TENGAS ERRORES 
 // SI RESUELVES EL SEGUNDO EJERCICIO, COMENTA EL PRIMERO Y LOS DEMAS EJERCICIOS PARA QUE NO TE GENEREN ERRORES DE MAS. 

// EJERCICIO 1
// Identificar el error y solucionarlo 
/*
const arrayMes = ["Enero","Febrero", "Marzo", "Abril", "Mayo"];
for ( i = 0 ; i < arrayMes.length ; i++) {
    console.log(arrayMes[i])
}



// EJERCICIO 2
// del siguiente  arreglo imprimir únicamente los colores Azul, Verde y Amarillo
var colores = ["Azul", "rosa", "rojo", "Amarillo", "Negro", "Naranja", "Verde"];
for (i=0; i<colores.length; i++) {
    if (colores[i] === "Azul" || colores[i] === "Verde" || colores[i] === "Amarillo") {
        console.log(colores[i]);
    }
}



// EJERCICIO 3
// Del siguiente arreglo imprime de DOS en DOS hasta el final del arreglo 
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (i=0; i<(arrayNumeros.length); i=i+2) {
    console.log(arrayNumeros.slice(i,i+2));
}


// EJERCICIO 4
// IDENTIFICA EL ERROR 
// DEBE Imprimir del 1 al 20 
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
for ( i = 0 ; i < arrayNumeros.length ; i++) {
    console.log(arrayNumeros[i]);
}


// EJERCICIO 5
//crea un arreglo con el listaddo de empleados, e imprimelos
const empleados = ['Mike Wasowski', 'James Sullivan', 'Randal Port', 'Señor Waternooze'];
for (i=0; i<empleados.length; i++){
    console.log(empleados[i]);
}


// EJERCICIO 6 
// del siguiente arreglo imprime unicamente del 11 al 20
var arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const indice11 = arrayNumeros.findIndex((element) => element === 11);

for (i=indice11; i<arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
}


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
    for (i=0; i<nombres.length; i++) {
        console.log(numeros[i] + ' ' + nombres[i]);
    }
}


// EJERCICIO 8 
// Agrega los meses del año que faltan e imprímelos en consola
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

for (i=arrayMeses.length; i<12; i++) {
    switch (i) {
        case 0: 
            arrayMeses.push('Enero');
            break;
        case 1: 
            arrayMeses.push('Febrero');
            break;
        case 2: 
            arrayMeses.push('Marzo');
            break;
        case 3: 
            arrayMeses.push('Abril');
            break;
        case 4: 
            arrayMeses.push('Mayo');
            break;
        case 5: 
            arrayMeses.push('Junio');
            break;
        case 6: 
            arrayMeses.push('Julio');
            break;
        case 7: 
            arrayMeses.push('Agosto');
            break;
        case 8: 
            arrayMeses.push('Septiembre');
            break;
        case 9: 
            arrayMeses.push('Octubre');
            break;
        case 10: 
            arrayMeses.push('Noviembre');
            break;
        case 11: 
            arrayMeses.push('Diciembre');
            break;
    }
}

for (i=0; i<arrayMeses.length; i++) {
    console.log(arrayMeses[i]);
}


// EJERCICIO 9
// Elimina los meses del año que restan e imprímelos en consola. Deben quedar únicamente Enero y Febrero
// Resolverlo mediante un for
var arrayMeses = ["Enero", "Febrero", "marzo", "abril", "mayo"];

for (i=arrayMeses.length; i>2; i--) {
    arrayMeses.pop();
}

for (i=0; i<arrayMeses.length; i++) {
    console.log(arrayMeses[i]);
}

// EJERCICIO 10 
// Investigar para qué sirve la funcuion indexOf  y poner dos ejemplos 
// R: El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no está presente.
// Ejemplo 1: Para extraer el índice de un elemento específico en un array (o en su defecto un -1 si no se encontró). Solo extrae una vez
const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','a','b','c','a','a'];
console.log(letras.indexOf('a'));

// Ejemplo 2: Extraer los índices de todas las posiciones donde se encuentra el elemento usando el segundo parámetro de indexOf como offset
var indices = [];
var ultimoIndice = letras.indexOf('a');
while (ultimoIndice != -1) {
    indices.push(ultimoIndice);
    ultimoIndice = letras.indexOf('a', ultimoIndice+1);
}
console.log(indices);

*/
// EJERCICIO 11
// Investigar 5 funciones útiles que contiene  un arreglo. 
// Poner tres ejemplos, por cada función (no copiar ni pegar), agregar una breve explicación del ejemplo.
// Función 1 array.concat()
const arreglo1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','a','a', 'Mike', 'Wosowski'];
const arreglo2 = ['a','b','c','a','a'];
const arreglo3 = [];

console.log(arreglo3.concat(arreglo1,arreglo2)); // Concatenar arreglos que ya existían entre sí mismos

// Función 2 array.filter()
var arreglo4 = arreglo1.filter(element => element == 'a'); // Filtrar datos de un arreglo
console.log(arreglo4);
arreglo4 = arreglo1.filter(loquesea => loquesea.length > 2);
console.log(arreglo4);

// Función 3 forEach()
var i = 0;
arreglo1.forEach(element => console.log(i++)); // Ejecutar una función por cada elemento del arreglo. Pueden ser funciones predefinidas o personales

arreglo1.forEach(funcionEjemplo);
function funcionEjemplo(elementoDelArreglo, indiceDelElemento) {
    console.log('Imprimiendo desde la función. Elemento: ' + elementoDelArreglo + ' Índice: ' + indiceDelElemento)
}

// Función 4 includes()
console.log(arreglo1.includes('ñ')); // El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

// Función 5 join()
console.log(arreglo1.join()); // join() devuelve todo el arreglo como una cadena, concatenando los valores con el/los caracteres que se especifiquen
console.log(arreglo1.join(''));
console.log(arreglo1.join('-'));

// Función 6 Array.of()
console.log(Array.of('1','2','3','5','8','13','21')); // Array.of() crea un arreglo con los valores enviados. (Importante la mayúscula). No confundir con la función Array() 

// Función 7 sort()
console.log(arreglo1.sort());
console.log(arreglo1.sort(comparacionManual)); // Dependiendo de lo que regrese la función, se tomará la comparación como mayor o menor

function comparacionManual(a, b) {
    return a - b;
}