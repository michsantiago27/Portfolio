const express = require("express");
const app = express();
const port = 3000;

const saludo = express.Router();
const despedida = express.Router();

// Middlewares. Solo aplican para el endpoint que se llame igual. En este caso para "saludo" solamente, por lo que no pasará por "despedida"
// Los MW's se ejecutan en el orden en el que se declaran y solo pasan al siguiente si tienen el "next()"
saludo.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

saludo.use(function (req, res, next) {
  console.log("Time 2:", Date.now());
  next();
});

// Endpoints "saludo" y "despedida"
saludo.get("/", (req, res) => {
  res.send({ saludo: "hola" });
});

saludo.get("/2", (req, res) => {
  res.send({ saludo: "hola2" });
});

despedida.get("/", (req, res) => {
  res.send({ despedida: "despedida" });
});

app.use("/saludo", saludo);
app.use("/despedida", despedida);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});