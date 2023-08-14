import Database from '../../database/database.js'
import { userNotFound } from '../../middlewares/userNotFound.js';

const database = new Database();

const commonHeaders = {
    "Content-type": "application/json"
}

export async function deleteUsers (req, res) {
    const { id } = req.params

    const users = await database.select("users")

    if(
        userNotFound(req, res, users)
    ) {
        return
    }

    database.delete('users', id)

    return res.writeHead(204, "User deleted", commonHeaders).end()
}