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
 *
 * Importar archivos simulando bases: const variable = require("./archivo.json")
 *
 * Obtener varias variables
 *  Petición postman: http://localhost:3001/session?user=mikeBoo
 *  Endpoint: app.get('/session/', (req, res)...    Uso de variables en endpoint: req.query.id1
 * 
*/

const express = require('express')
var cors = require('cors')  // Es necesario instalar CORS para que las peticiones del cliente las acepte nuestro servidorsito

const app = express()
app.use(cors())

const port = 3001  // El puerto debe ser diferente del que usa React... duuuh

const usersObj = require('./users.json') // Para usar jalar el json de otro archivo usar: const autos = require("./autos.json")

app.get('/', (req, res) => {
   res.send('API del ejercicio de Santiago!')
})
// Endpoint para preguntar si el usuario está en sesión
app.get('/session/', (req, res) => { 
   setTimeout(function () {  // Detiene la respuesta 2 segundos para que parezca que carga algo bien mamalon
      const userIndex = usersObj.users.findIndex(v => v.username == req.query.user);
      if (userIndex >= 0) {
         res.send(usersObj.users[userIndex])
      } else {
         res.send({username:-1, session:false})
      }
   }, 2000);
})
// Enpoint para login
app.get('/login/', (req, res) => {
      const userIndex = usersObj.users.findIndex(v => v.username == req.query.user);
      if (userIndex >= 0 && usersObj.users[userIndex].password == req.query.pass) {
         res.send(usersObj.users[userIndex])
      } else {
         res.send({username:-1, session:false})
      }
})

app.listen(port, () => {  // Se ejecuta el listen para poner a la API a escuchar peticiones de clientes (como el navegador)
   console.log(`API del ejercicio de autos-pokemon escuchando en http://localhost:${port}`)
})