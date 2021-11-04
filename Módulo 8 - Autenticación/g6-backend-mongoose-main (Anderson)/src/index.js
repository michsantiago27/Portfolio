const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

const graduateRoute = require("./api/graduate");

const uri =
  "mongodb+srv://root:root@cluster0.sdphn.mongodb.net/databaseSantiago?retryWrites=true&w=majority";

mongoose.connect(uri);
const database = mongoose.connection;

database.once("open", () => {
  console.log("base de datos conectada!!");
});

database.on("error", console.error.bind(console, "no conexion!"));

app.use(cors());
app.use("/graduate", graduateRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
