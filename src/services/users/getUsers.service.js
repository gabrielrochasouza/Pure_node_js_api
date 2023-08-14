import database from '../../database/database.js'
import { arrayObjectPasswordFilter } from '../../utils/mappers.js';


const commonHeaders = {
    "Content-type": "application/json"
}

export async function getUsers (req, res) {
    const users = await database.select('users');
    res.writeHead(200, 'Read', commonHeaders)
    return res.end(JSON.stringify(arrayObjectPasswordFilter(users) ))
}
