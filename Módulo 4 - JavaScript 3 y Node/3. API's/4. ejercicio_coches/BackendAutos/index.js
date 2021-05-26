/**
 * Todo el proceso para arrancar API
 * 
 * Línea comandos (en la carpeta del proyecto)
 * - npm init
 * - npm install express --save
 * - npm install --save-dev nodemon  (Debe aparecer "devDependencies": {"nodemon":"version"} )
 * 
 * En el archivo 'package.json' agregar un elemento en "scripts" que se llame “dev” : “nodemon index.js”
 *  "scripts": {
 *      "test": "echo \"Error: no test specified\" && exit 1",
 *      "dev" : "nodemon index.js"
 *  }
 */



const express = require('express')
var cors = require('cors')  // Es necesario instalar CORS para que las peticiones del cliente las acepte nuestro servidorsito

const app = express()
app.use(cors())

const port = 3000
// app.use(express.json)  // Al agregar esto no jala, pero no tengo idea por qué

 
/** Definición de los autos */
// Para usar jalar el json de otro archivo usar: const autos = require("./autos.json")
var autos = [
  {
    id : 0,
    marca : 'KIA',
    modelo : 'RIO',
    descripcion : 'El batimovil regresa',
    precio : 300000,
    imagen : 'https://www.grupomax.mx/wp-content/uploads/2020/05/kia-rio-hb-20-aurora-black-pearl.png'  
  },
  {
    id : 1,
    marca : 'VOLKSWAGEN',
    modelo : 'JETTA',
    descripcion : 'Un coche confiable para hacer el super y viajar con la fam',
    precio : 380000,
    imagen : 'http://www.automotores-rev.com/wp-content/uploads/2020/07/mantiene-vw-jetta-liderazgo-en-ventas-enero%E2%80%93junio-2020-revista%E2%80%93auto%E2%80%93motores.jpg' 
  },
  {
    id : 2,
    marca : 'MAZDA',
    modelo : '2',
    descripcion : 'Auto pa echar las cold ones con los boys',
    precio : 310000,
    imagen : 'https://img.motoryracing.com/noticias/portada/23000/23404-n.jpg'
  },
  {
    id : 3,
    marca : 'MCLAREN',
    modelo : 'ARTURA',
    descripcion : 'Carrazo pa llegar a Acapulco en hora y media',
    precio : 1500000,
    imagen : 'https://soymotor.com/sites/default/files/imagenes/noticia/mclaren-artura-frontal-2-soymotor_0.jpg'
  },
  {
    id : 4,
    marca : 'TESLA',
    modelo : 'CYBERTRUCK',
    descripcion : 'LEGO con llantas',
    precio : 800000,
    imagen : 'https://img.automexico.com/2019/11/23/mQ3iMQdN/teslacybertruck202101-b9d8.jpg'
}]

var carrito = []

app.get('/', (req, res) => {
   res.send({holaMundo : 'Hello World! ejercicio de coches sí :) a hacer el primer sitio'})
})

app.get('/listado', (req, res) => {
  res.send(autos)
})

app.get('/auto', (req, res) => {
  res.send(autos[req.query.idAuto])
})

app.get('/carrito', (req, res) => {
  res.send(carrito)
})

app.post('/reservar', (req, res) => {
  carrito.push(autos[req.query.idAuto])
  res.send({respuesta: 'Todo chido'})
})

app.listen(port, () => {  // Se ejecuta el listen para poner a la API a escuchar peticiones de clientes (como el navegador)
   console.log(`API del ejercicio de autos escuchando en http://localhost:${port}`)
})