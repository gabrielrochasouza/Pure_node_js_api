import database from '../../database/database.js'
import { arrayObjectPasswordFilter } from '../../utils/mappers.js';


export async function getUsers (req, res) {
    const users = await database.select('users');
    res.writeHead(200, 'Read', {'Content-type': 'application/json'})
    return res.end(JSON.stringify(arrayObjectPasswordFilter(users) ))
}
