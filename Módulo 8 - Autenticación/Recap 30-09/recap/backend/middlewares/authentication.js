const admin = require("../config/firebase");

async function firebaseValidationToken(token) {
    try {

        console.log(token)

        if(!token) {
            throw new Error("no hay token");
        } else if (!(token.split(" ")[0] === "Bearer")) {
            throw new Error("Token inválido")
        }

        const accessToken = token.split(" ")[1]
        const validation = await admin.auth().verifyIdToken(accessToken)

        console.log(validation)

        if (!validation) {
            throw new Error("Token inválido desde Firebase")
        }
    } catch (error) {
        console.log("Error en firebaseValidationToken")
        throw new Error(error)
    }
}

async function validateSession (req, res, next) {
    try {
        const accessToken = req.headers.authorization
        console.log(accessToken)
        await firebaseValidationToken(accessToken)
        next()
    } catch (error) {
        res.status(401).send("No tienes permitido ver este contenido - " + error)
    }
}

module.exports = {
    validateSession,
}