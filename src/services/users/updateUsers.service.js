import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueEmailRequiredMiddleware } from '../../middlewares/uniqueEmailRequired.js';
import { userNotFound } from '../../middlewares/userNotFound.js';
import { verifyEmail } from '../../middlewares/verifyEmail.js';
import { objectPasswordFilter } from '../../utils/mappers.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function updateUsers (req, res) {
    const { id } = req.params

    const { name, email } = req.body

    const users = await database.select("users")
    
    if(
        requiredFieldsMiddleware(req, res, ["name", "email", "password"]) ||
        uniqueEmailRequiredMiddleware(req, res, users) ||
        verifyEmail(req, res) ||
        userNotFound(req, res, users)
    ) {
        return
    }
    const user = users.find(user => user.id === id )

    await database.update('users', id, {
        name,
        email,
        updatedAt: new Date(),
    })
    const updatedUser = { 
        ...user,
        ...req.body,
        updatedAt: new Date(),
    }

    return res.writeHead(200, "Update User", commonHeaders).end(JSON.stringify(objectPasswordFilter(updatedUser)))
}