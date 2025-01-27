import { randomUUID } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueFieldRequiredMiddleware } from '../../middlewares/uniqueFieldRequiredMiddleware.js';

export async function createProducts(req, res) {
    const products = await database.select('products');

    if(
        requiredFieldsMiddleware(req, res, ["name", "description", "category", "img_url", "price"]) ||
        uniqueFieldRequiredMiddleware(req, res, products, "name")
    ) {
        return
    }

    const newProduct = {
        id: randomUUID(),
        name: req.body?.name,
        description: req.body?.description,
        category: req.body?.category,
        img_url: req.body?.img_url,
        price: req.body?.price,
        createdAt: new Date(),
        updatedAt: null,
    }

    database.insert('products', newProduct)

    return res.writeHead(201, 'Product created', {'Content-type': 'application/json'}).end(JSON.stringify(newProduct))
}