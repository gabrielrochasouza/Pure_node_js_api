import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';

export async function deleteProduct (req, res) {
    const { id } = req.params

    const products = await database.select("products")

    if(
        entityNotFound(req, res, products)
    ) {
        return
    }

    database.delete('products', id)

    return res.writeHead(204, "Product deleted", {'Content-type': 'application/json'}).end()
}