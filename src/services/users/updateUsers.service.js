import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueFieldRequiredMiddleware } from '../../middlewares/uniqueFieldRequiredMiddleware.js';
import { entityNotFound } from '../../middlewares/entityNotFound.js';
import { verifyEmail } from '../../middlewares/verifyEmail.js';
import { objectPasswordFilter } from '../../utils/mappers.js';


export async function updateUsers (req, res) {
    const { id } = req.params

    const { name, email } = req.body

    const users = await database.select("users")
    
    if(
        requiredFieldsMiddleware(req, res, ["name", "email", "password"]) ||
        entityNotFound(req, res, users) ||
        uniqueFieldRequiredMiddleware(req, res, users, "email") ||
        verifyEmail(req, res)
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

    return res.writeHead(200, "Update User", {'Content-type': 'application/json'}).end(JSON.stringify(objectPasswordFilter(updatedUser)))
}