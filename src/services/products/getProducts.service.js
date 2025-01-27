import database from '../../database/database.js'

export async function getProducts (req, res) {
    const products = await database.select('products');
    res.writeHead(200, 'Read', {'Content-type': 'application/json'})
    return res.end(JSON.stringify(products))
}
