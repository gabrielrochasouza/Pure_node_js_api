import { randomUUID } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueEmailRequiredMiddleware } from '../../middlewares/uniqueEmailRequired.js';
import { verifyEmail } from '../../middlewares/verifyEmail.js';
import { encryptPassword } from '../../utils/encryptPassword.js';
import { objectPasswordFilter } from '../../utils/mappers.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function createUsers(req, res) {
    const users = await database.select("users")
    if(
        requiredFieldsMiddleware(req, res, ["name", "email", "password"]) ||
        uniqueEmailRequiredMiddleware(req, res, users) ||
        verifyEmail(req, res)
    ) {
        return
    }

    const encryptedPassword = encryptPassword(req.body?.password)

    const newUser = {
        id: randomUUID(),
        name: req.body?.name,
        email: req.body?.email,
        password: encryptedPassword.encryptedData,
        createdAt: new Date(),
        updatedAt: null,
    }

    database.insert('users', newUser)

    return res.writeHead(201, 'User created', commonHeaders).end(JSON.stringify(objectPasswordFilter(newUser) ))
}