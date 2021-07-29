// simular base de datos
let productos = [{ name: "papitas" }, { name: "agua" }];
let proveedores = [
  {
    nombre: "provedor1",
    contacto: {
      area: "ventas",
      telefono: "123",
    },
    direccion: {
      calle: "calle 1",
      ciudad: "ciudad1",
      cp: "8000",
      colonia: "colonia1",
    },
  },
];
let carrito = [
  {
    id: 1,
    productos: ['papitas']
  },
  {
    id: 2,
    productos: ['papitas', 'agua']
  }
]

//1 importamos el paquete
const express = require("express");

// 2 generamos la aplicacion de express
const app = express();

// 2.1 configuracion para comunicacion con archivos json
app.use(express.json());

// 3 configuracion del puerto
const port = 3000;

//4  definir la ruta, (metodo, URI, funcion) CRUD

app.get("/productos", (req, res) => {
  res.send(productos);
});

app.post("/productos", (req, res) => {
  console.log(req.body);
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.send(nuevoProducto);
});

app.delete("/productos", (req, res) => {
  console.log(req.body);
  const nombreProducto = req.body.name;
  productos = productos.filter((producto) => producto.name !== nombreProducto);
  res.send(productos);
});

app.put("/productos/:name", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const actualizacion = req.body;
  const nombreDeProducto = req.params.name;
  const posicionProducto = productos.findIndex(
    (producto) => producto.name === nombreDeProducto
  );
  productos[posicionProducto] = actualizacion;
  res.send(productos[posicionProducto]);
});

// CRUD de proveedores
app.get("/proveedores", (req, res) => {
  res.send(proveedores);
});

app.post("/proveedores", (req, res) => {
  console.log(req.body)
  const proveedor = req.body;
  proveedores.push(proveedor)
  res.send(proveedores);
});

app.put("/proveedores/:nombre", (req, res) => {
  const proveedorNuevo = req.body;
  const proveedorViejo = req.params.nombre;
  const indexProveedorViejo = proveedores.findIndex(
    (proveedor) => proveedor.nombre === proveedorViejo
  );
  proveedores[indexProveedorViejo] = proveedorNuevo;
  res.send(proveedores[indexProveedorViejo]);
});

app.delete("/proveedores", (req, res) => {
  console.log(req.body)
  const proveedorBorrar = req.body.nombre;
  proveedores = proveedores.filter((proveedor) => proveedor.nombre !== proveedorBorrar)
  res.send(proveedores)
})

// CRUD carrito
app.get('/carrito', (req, res) => {
  res.send(carrito);
})

app.post('/carrito', (req, res) => {
  const pedidoNuevo = req.body;
  carrito.push(pedidoNuevo);
  res.send(carrito);
})

app.put('/carrito/', (req, res) => {
  const pedidoNuevo = req.body;
  const indexPedidoViejo = carrito.findIndex((pedido) => pedido.id === req.body.id)
  carrito[indexPedidoViejo] = pedidoNuevo;
  res.send(carrito)
})

app.delete('/carrito', (req, res) => {
  const pedidoBorrar = req.body.id;
  carrito = carrito.filter((pedido) => pedido.id !== pedidoBorrar)
  res.send(carrito)
})

// 5 corre la applicacion de express
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
