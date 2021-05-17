// En una lista (array) de 10 número calcular el promedio de esos números

var lista = [2,4,6,8,10,12,70,53,32,71];
var contador = 0;

for (var i=0; i<lista.length; i++) {
    contador = lista[i] + contador;
}
const promedio = contador/lista.length;
console.log("Promedio: " + promedio);
