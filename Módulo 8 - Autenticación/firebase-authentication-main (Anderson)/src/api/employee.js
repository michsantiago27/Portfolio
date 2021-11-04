const express = require("express");
const employeeRouter = express.Router();

const { validateSession } = require("../middlewares/authentication");

employeeRouter.use(validateSession);

employeeRouter.get("/report", (req, res) => {
  res.send({ date: "01/01/2021" });
});

module.exports = employeeRouter;
