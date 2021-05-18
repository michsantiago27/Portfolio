/*
Seguir este ejemplo. Sino te acuerdas regresar al Hello World! (el ejercicio Hello World está en la carpeta 'miApp')
https://expressjs.com/es/starter/basic-routing.html
*/

const express = require('express')
const app = express()
app.use(express.json)
const port = 3000


app.listen(port, () => {
    console.log(`apiEjemplo2.js escuchando en http://localhost:${port}`)
})


// Crear pokemones (Simulando una base de datos)
const pokemonArray = [
    {
        nombre: 'Pikachu',
        tipo: 'Electricidad',
        color: 'Amarillo'
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta',
        color: 'Verde'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
        color: 'Naranja'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua',
        color: 'Azul'
    }
]

/***************************** GET ******************************/
// Obtener todos los pokemon
app.get('/pokemon', (req, res) => {
    res.send(pokemonArray)
})

// Obtener el pokemon que recibamos
app.get('/pokemon/:id', (req, res) => {
    console.log('El ID que se recibió fue: ' + req.params.id) // Imprimir en consola el ID recibido desde Postman
    res.send(pokemonArray[req.params.id]) // Regresar a Postman el pokemon según su ID
})

// Obtener varios pokemones. La petición debe ser: http://localhost:3000/auto?id1=2&id2=4&id3=0
app.get('/pokemon/variosParams/' , (req, res) => {
    console.log(req.query.id1)
    console.log(req.query.id2)
    console.log(req.query.id3)
})

/***************************** DELETE *****************************/
// Borrar último pokemon
app.delete('/pokemon', (req, res) => {
    const pokeBorrado = pokemonArray.pop()
    res.send('Se borró el último pokemon: ' + pokeBorrado.nombre)
})

// Borrar el pokemon que recibamos
app.delete('/pokemon/:id', (req, res) => {
    const pokeBorrado = pokemonArray.splice(req.params.id,1)[0]
    res.send('Se borró el pokemon: ' + pokeBorrado.nombre)
})
