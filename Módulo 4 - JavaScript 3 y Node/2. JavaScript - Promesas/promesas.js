// Ando bien perdido no sé qué pitos hace. Ahí va este pedo

var miPromesa = new Promise ((resolve, reject) => {
    resolve("Éxito :D");
})

miPromesa.then( resultado => {console.log(resultado); console.log("Hola"); })



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