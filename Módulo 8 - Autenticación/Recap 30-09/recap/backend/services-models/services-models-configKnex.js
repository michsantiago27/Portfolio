/*********** CONFIG KNEX ***********/
const knex = require('knex'); 

const config = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        database: 'Tienda'
    }
};

const knexClient = knex(config);

// Aquí iría el export de knexClient

/*********** MODEL ***********/
selectProductsByPrice = async ({price}) => {
    try {
        return await knexClient("Productos").where("precio", "<", price);
    } catch(error) {
        throw new Error(error);
    }
};

// Aquí iría el export de selectProductsByPrice

/*********** SERVICE ***********/
const  getProductByPrice = async ({price}) => {
    try {
        const result = await selectProductsByPrice({ price });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getProductByPrice,
}