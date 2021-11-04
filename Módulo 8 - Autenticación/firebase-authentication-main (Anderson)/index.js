const express = require("express");
const app = express();
const port = 3000;

const employeeRouter = require("./src/api/employee");

app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
