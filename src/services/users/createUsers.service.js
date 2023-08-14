import { randomUUID } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueFieldRequiredMiddleware } from '../../middlewares/uniqueFieldRequiredMiddleware.js';
import { verifyEmail } from '../../middlewares/verifyEmail.js';
import { encryptPassword } from '../../utils/encryptPassword.js';
import { objectPasswordFilter } from '../../utils/mappers.js';

export async function createUsers(req, res) {
    const users = await database.select("users")
    if(
        requiredFieldsMiddleware(req, res, ["name", "email", "password"]) ||
        uniqueFieldRequiredMiddleware(req, res, users, "email") ||
        verifyEmail(req, res)
    ) {
        return
    }

    const encryptedPassword = encryptPassword(req.body?.password)

    const id = randomUUID()

    const newUser = {
        id,
        name: req.body?.name,
        email: req.body?.email,
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: null,
        tokenKey: encryptPassword(id)
    }

    database.insert('users', newUser)

    return res.writeHead(201, 'User created', {'Content-type': 'application/json'}).end(JSON.stringify(objectPasswordFilter(newUser) ))
}