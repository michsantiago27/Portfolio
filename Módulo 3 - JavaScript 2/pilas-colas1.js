/**
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’], 4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]
 
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2) Este ejemplo lo hace de atrás para adelante
Salida: [3,2,3,4,6,8,1,7]
 
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 
4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
 
5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
 
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
 
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];

*/
var ejercicio = 2; // Seleccionar el ejercicio que se quiera ejecutar


/********************* MENU EJERCICIOS *************************/
// Variables globales ejercicio 1
const pila1 = ['Papaya', 'Naranja', 'Piña', 'Sandía', 'Guanábana', 'Toronja', 'Manzana', 'Plátano', 'Uva'];
const num = 4;

// Variables globales ejercicio 1
const pila2 = [3,2,3,4,6,8,1,2,5,5];
const viejo = 2;
const nuevo = 7;

switch (ejercicio) {
    case 1:
        ejercicio1(pila1, num);
    case 2:
        ejercicio2(pila2, viejo, nuevo);
    case 3:
        ejercicio3();
    case 4:
        ejercicio4();
}


/********************* EJERCICIO 1 *************************/
function ejercicio1 (pila, num) {
    for (i=0; i<num; i++) {
        console.log (pila[i]);
    }
    console.log('Hola');
}


/********************* EJERCICIO 2 *************************/
function ejercicio2(pila, viejo, nuevo) {
    var bandera = false;
    const largoPila = pila.length;
    console.log('Entrada: ' + pila + ' Viejo: ' + viejo + ' Nuevo: ' + nuevo);
    // De inicio a fin 
    /*
    for (i=0; i<largoPila; i++) {
        if (bandera) {
            pila.pop();
        }
        else if (!bandera && pila[i] === viejo) {
            pila[i] = nuevo;
            bandera = !bandera;
        }
    }
    */

    // De fin a inicio 
    for (i=(largoPila-1); i>=0; i--) {
        if (pila[i] === viejo) {
            pila[i] = nuevo;
            break;
        }
        else {
            pila.pop();
        }    
    }

    // Impresión
    console.log('Salida: ' + pila);
}


/********************* EJERCICIO 3 *************************/
function ejercicio3() {
    
}


/********************* EJERCICIO 4 *************************/
function ejercicio4() {
    
}