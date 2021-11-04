// Hacer require del paquete
const mongoose = require("mongoose");

// Schema egresado
const Schema = mongoose.Schema;

const graduateSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  school: String,
  profileImage: String,
  company: {
    name: String,
    charge: String,
  },
});

// Graduate Model (El primer parámetro de la siguiente función define el nombre de la collection. Todos los archivos se agregan con el mismo nombre de la collection)
const graduateModel = mongoose.model("graduate", graduateSchema);

async function createGraduateOnBD({ graduateData }) {
  return graduateModel.create( graduateData );
}

module.exports = {
  createGraduateOnBD,
};
