import { decryptPassword } from '../utils/decryptPassword.js'

const commonHeaders = {
    "Content-type": "application/json"
}

export function validateLoginMiddleware (req, res, users) {
    const { email } = req.body

    const response = {
        "statusCode": 400,
        "message": "Credenciais inválidas",
    }

    const user = users.find(user => user.email === email)
    
    if(!user) { 
        res.writeHead(400, "Credenciais inválidas", commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    const passwordFound = decryptPassword(user.password)

    if(passwordFound !== req.body?.password) {
        res.writeHead(400, "Credenciais inválidas", commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    return false
}