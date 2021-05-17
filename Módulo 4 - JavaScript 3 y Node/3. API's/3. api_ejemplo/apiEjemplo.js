/*
Seguir este ejemplo. Sino te acuerdas regresar al Hello World! (el ejercicio Hello World está en la carpeta 'miApp')
https://expressjs.com/es/starter/basic-routing.html
*/

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/', (req, res) => {
  res.send('Recibí un GET a /')
})

app.put('/', (req, res) => {
    res.send('Recibí un PUT a /')
  })
  
app.post('/', (req, res) => {
    res.send('Recibí un POST a /')
  })

app.delete('/', (req, res) => {
    res.send('Recibí un DELETE a /')
  })