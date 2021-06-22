/*
1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
                    https://pokeapi.co/
2.- Hacer una funcion que haga una petición 
    (Ejemplo: peticionLibro("i robot");
    Buscar un libro y traer el o los autores del primer libro
    http://openlibrary.org/search.json?q=i+robot) 
3.- Hacer una petición por autor y devolver la lista de 
    sus libros
        http://openlibrary.org/search.json?author=asimov
4.- Hacer una petición y devolver el género de la banda deseada
    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
5.- Hacer una petición a la swapi a un personaje y obtener 
    sus películas.
                    https://swapi.co/
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta el día de ayer.
                    https://api.nasa.gov/
7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
    y peso.
                      https://pokeapi.co/
*/


// 1) Hay que instalar el paquete con 'npm install node-fetch' (para cada proyecto)
const fetch = require("node-fetch");  // 2) Hay que importar fetch

/********************* ( 1 ) *********************/
var pokemon = 'raichu';

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
  .then(response => response.json()) 
  .then(data => console.log('1. Tipo de \'' + pokemon + '\': ' + data.types[0].type.name));
// El primer then cacha la respuesta en tipo json y se lo pasa como input al segundo then. Ver: https://developer.mozilla.org/en-US/docs/Web/API/Body/json


/********************* ( 2 ) *********************/ /*
// Ayuda de cómo consultar la API: https://openlibrary.org/dev/docs/api/search
var titulo = "The Lord of the Rings";
buscarAutoresPorTitulo(titulo);

function buscarAutoresPorTitulo(titulo) {
    fetch('http://openlibrary.org/search.json?title=' + titulo)
    .then(response => response.json()) 
    .then(data => console.log('2. Autor(es) de \'' + titulo + '\': ' + data.docs[0].author_name));  
}
*/

/********************* ( 3 ) *********************/ /*
var autor = "Asimov";
buscarLibrosPorAutor(autor);

function buscarLibrosPorAutor(autor) { 
    fetch('http://openlibrary.org/search.json?author=' + autor)
    .then(response => response.json()) 
    .then(data => {
        console.log('3. Libro(s) de \'' + autor + '\':' );
        for (var i=0; i<data.docs.length; i++) {
            console.log('\t- ' + data.docs[i].title)
        }    
    });  
}
*/

/********************* ( 4 ) *********************/ /*
// http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
fetch('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse')
.then(response => response.json())
.then(data => console.log('4. Género de Muse: ' + data.artists[0].strGenre))
*/

/********************* ( 5 ) *********************/
// Creo que no existe la API. Intentar con otras. 


/********************* ( 6 ) *********************/
/*
Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta el día de ayer.
https://api.nasa.gov/

Account Email: michsantiago27@hotmail.com
Account ID: 2e981dc2-2db1-400e-abe7-18a8e83b2ce1

GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
*/
const nasaKey = 'ekv9m1DinYlbO5Dh0hB05nYdNGCNCoMo2n50LiWh';
var fInicio = '2021-04-21';
var fFin = '2021-04-28'; // No pedir más de 7 días o no jala chido

fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + fInicio + '&end_date=' + fFin + '&api_key=' + nasaKey)
.then(response => response.json())
.then((data) => console.log('5. Asteroides peligrosos en la semana pasada: ' + data.near_earth_objects['2021-04-21'][0].name))

/* Leer objetos usando variables

You can access object properties by dot notation or by bracket notation.

var x = {'test': 'hi'};
alert(x.test); // alerts hi
alert(x['test']); // alerts hi

When you have a dynamic value, you have to use the latter:

var property = 'test';
alert(x.property); // looks for x.property, undefined if it doesn't exist
alert(x[property]); // looks for x['test'], alerts hi

*/

/********************* ( 7 ) *********************/