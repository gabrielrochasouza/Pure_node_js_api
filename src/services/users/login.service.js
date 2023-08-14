import { randomBytes } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { verifyEmail } from '../../middlewares/verifyEmail.js';
import { validateLoginMiddleware } from '../../middlewares/validateLogin.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function login(req, res) {
    const users = await database.select("users")
    if(
        requiredFieldsMiddleware(req, res, ["email", "password"]) ||
        verifyEmail(req, res) ||
        validateLoginMiddleware(req, res, users)
    ) {
        return
    }
    const user = users.find(user => user.email === req.body.email)
    const response = {
        message: "Login bem sucedido",
        token: user.tokenKey,
    }
    return res.writeHead(200, 'Login feito', commonHeaders).end(JSON.stringify(response))
}