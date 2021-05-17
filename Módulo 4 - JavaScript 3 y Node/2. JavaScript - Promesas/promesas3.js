var promesa = new Promise( (resolve,reject) => {
    console.log("Pintar el HTML en el navegador.");
    setTimeout(function() {
        // resolve("Ir a consultar la BD y traer la información.");
        reject("Error en la conexión :(")
    }, 2000)
    console.log("Esta acción no debe ir aquí. Se adelanta ya que 1) No es parte del resolve y 2) No es parte de los then.");
})

promesa.then( x => {   // Trucha, solo el primer then puede cachar al resolve
    console.log(x)
}).then (() => {
    console.log("Pinta en la tabla la información.")
}, reason => {
    console.log(reason)
})

/**
var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// These two assignments are equivalent:

// Old-school:
var a2 = a.map(function(s){ return s.length });

// ECMAscript 6 using arrow functions
var a3 = a.map( s => s.length );

// both a2 and a3 will be equal
 */