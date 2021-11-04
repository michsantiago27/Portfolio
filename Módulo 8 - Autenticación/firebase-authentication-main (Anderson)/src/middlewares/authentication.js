const admin = require("../config/firebase");

async function firebaseValidationToken(token) {
  try {
    if (!token) {
      throw new Error("no hay token");
    } else if (!(token.split(" ")[0] === "Bearer")) {
      // Authorization: Bearer asdfasdf.asdfasdf.assdfs
      throw new Error("token invalido");
    }
    const accessToken = token.split(" ")[1];
    const validation = await admin.auth().verifyIdToken(accessToken);
    if (!validation) {
      throw new Error("token invalido desde firebase");
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function validateSession(req, res, next) {
  try {
    const accessToken = req.headers.authorization;
    await firebaseValidationToken(accessToken);
    next();
  } catch (error) {
    res.status(401).send("no tienes permitido ver este contenido");
  }
}

module.exports = {
  validateSession,
};
