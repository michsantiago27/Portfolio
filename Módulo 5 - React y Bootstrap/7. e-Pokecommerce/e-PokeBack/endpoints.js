/**
 * Todo el proceso para arrancar API
 * 
 * Línea comandos (en la carpeta del proyecto)
 * - npm init
 * - npm install express --save
 * - npm install --save-dev nodemon  (En el package.json debe aparecer "devDependencies": {"nodemon":"version"} )
 * - npm install cors
 * 
 * En el archivo 'package.json' agregar un elemento en "scripts" que se llame "dev" : "nodemon [nombre del archivo con los endpoints]]"
 *  
 * Con react hay un 'start' y 'test' predefinidos que no me atreví a cambiar en el 'package.json'
 * 
 * Usar 'npm run dev' para autocargar el servidorsito con los endpoints
 */

 const express = require('express')
 var cors = require('cors')  // Es necesario instalar CORS para que las peticiones del cliente las acepte nuestro servidorsito
 
 const app = express()
 app.use(cors())
 
 const port = 3001

 app.get('/', (req, res) => {
    res.send({holaMundo : 'Hola mundo de mierda! No harán alta endpoints porque todo lo consumiré de la PokeAPI. Pero estuvo chido el ejercicio para recordar conceptos y actualizar notitas aquí.'})
 })

app.listen(port, () => {  // Se ejecuta el listen para poner a la API a escuchar peticiones de clientes (como el navegador)
   console.log(`API del ejercicio de autos-pokemon escuchando en http://localhost:${port}`)
})