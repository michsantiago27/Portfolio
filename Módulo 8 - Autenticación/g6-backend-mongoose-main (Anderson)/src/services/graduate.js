const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const { storage } = require("../config/firebase");

const { createGraduateOnBD } = require("../models/graduate");

async function createGraduate({ graduateData, image }) {
  try {
    // Creamos la referencia de dónde se va a guardar y con qué nombre
    const storageRef = ref(storage, image.originalname);
    // Sube el archivo a Google Cloud Storage
    const snapshot = await uploadBytes(storageRef, image.buffer);
    // Obtenemos la nueva URL del archivo
    const downloadURL = await getDownloadURL(snapshot.ref);
    const newGraduate = { ...graduateData, profileImage: downloadURL};
    await createGraduateOnBD({ graduateData: newGraduate });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createGraduate,
};
