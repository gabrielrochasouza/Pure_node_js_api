import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';


export async function getOneProduct (req, res) {
    const { id } = req.params
    const products = await database.select('products');
    if(
        entityNotFound(req, res, tasks)
    ) {
        return
    }
    const product = products.find(t => t.id === id)

    res.writeHead(200, 'Read One', {'Content-type': 'application/json'});
    return res.end(JSON.stringify(product));
}
