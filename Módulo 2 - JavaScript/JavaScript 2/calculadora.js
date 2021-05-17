/**
 * Crear una calculadora con las 4 operaciones básicas (+ - * /). 
 * - Debe permitir operaciones con 3 números (Ej. 3+7+2  300-54-67  5*6*2  (10/5)/2)
 * - Debe usar funciones
 * - Debe usar variables
 * 
 * Creado por: Santiago Antón
 */

// Preguntar operador
var operador = "*";

// Preguntar números
var numeros = [10, 6, 2, 4, 5];
var resultado;

// Identificar operador y ejecutar función correspondiente
if (operador === "+") {
    resultado = sumar(numeros);
} else if (operador === "-"){
    resultado = restar(numeros);
} else if (operador === "*") {
    resultado = multiplicar(numeros);
} else if (operador === "/") {
    resultado = dividir(numeros);
} else {
    console.log("La cagaste en el operador");
    return;
}

// Imprimir resultado
console.log(resultado);


// Funciones de las operaciones
function sumar(nums) {
    var res = nums[0];
    for (i=1; i<nums.length; i++) {
        res = res + nums[i];
    }
    return res;
}

function restar(nums) {
    var res = nums[0];
    for (i=1; i<nums.length; i++) {
        res = res - nums[i];
    }
    return res;
}

function multiplicar(nums) {
    var res = nums[0];
    for (i=1; i<nums.length; i++) {
        res = res * nums[i];
    }
    return res;
}

function dividir(nums) {
    var res = nums[0];
    for (i=1; i<nums.length; i++) {
        res = res / nums[i];
    }
    return res;
}

