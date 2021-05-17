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
const app = express()
const port = 3000
// app.use(express.json)  // Al agregar esto no jala, pero no tengo idea por qué

 
  app.get('/', (req, res) => {  // Los navegadores cuando cargan una dirección por default usan GET
   res.send('Hello World! ejercicio de coches sí :)')
 })

 app.listen(port, () => {  // Se ejecuta el listen para poner a la API a escuchar peticiones de clientes (como el navegador)
   console.log(`Example app listening at http://localhost:${port}`)
 })