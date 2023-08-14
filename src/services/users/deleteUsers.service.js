import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function deleteUsers (req, res) {
    const { id } = req.params

    const users = await database.select("users")

    if(
        entityNotFound(req, res, users)
    ) {
        return
    }

    database.delete('users', id)

    return res.writeHead(204, "User deleted", commonHeaders).end()
}