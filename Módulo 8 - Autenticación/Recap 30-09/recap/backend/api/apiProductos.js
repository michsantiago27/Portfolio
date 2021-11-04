const express = require("express")
const router = express.Router();

const { validateSession } = require("../middlewares/authentication")
const { getProductByPrice } = require("../services-models/services-models-configKnex");

router.use(validateSession);

router.get('/', async (req, res) => {
    res.send("Pasaste la autenticación 8)")
})

router.get("/getByPrice/:price", async (req, res) => {  // Consulta postman http://localhost:3000/products/getByPrice/50
    try {
        const price = req.params.price;
        const result = await getProductByPrice({price});
        console.log("API service: " + result);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;