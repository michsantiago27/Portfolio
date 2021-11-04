/**
Command line
- npx create-react-app recap
- npm install firebase
- npm install --save react-firebase-hooks
- npm install express --save
- npm install --save-dev nodemon  (En el package.json debe aparecer "devDependencies": {"nodemon":"version"} )
- npm install cors
- npm install knex --save
- npm install pg --save
 */

const express = require("express");
const cors = require("cors");

const productRoutes = require("./api/apiProductos");

const app = express();
const port = 3000;

app.use(cors());
app.use("/products", productRoutes);  // La consulta postman deberá ser http://localhost:3000/products/getByPrice/50

app.listen(port, () => {
    console.log(`Ejercicio de recap escuchando en http://localhost:${port}`);
})