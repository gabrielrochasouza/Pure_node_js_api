import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';
import { objectPasswordFilter } from '../../utils/mappers.js';


const commonHeaders = {
    "Content-type": "application/json"
}

export async function getOneUsers (req, res) {
    const { id } = req.params
    const users = await database.select('users');
    const user = users.find(user => user.id === id)

    if(
        entityNotFound(req, res, users)
    ) {
        return
    }
    res.writeHead(200, 'Read One', commonHeaders)
    return res.end(JSON.stringify(objectPasswordFilter(user)))
}
