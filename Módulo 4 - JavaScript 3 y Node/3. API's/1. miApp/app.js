// Para ver todo el proceso entrar a:
// https://expressjs.com/es/starter/installing.html
// https://expressjs.com/es/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {  // Los navegadores cuando cargan una dirección por default usan GET
  res.send('Hello World! App de Santiago escuchando :)')
})

app.listen(port, () => {  // Se ejecuta el listen para poner a la API a escuchar peticiones de clientes (como el navegador)
  console.log(`Example app listening at http://localhost:${port}`)
})