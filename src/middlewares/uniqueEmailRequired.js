const commonHeaders = {
    "Content-type": "application/json"
}

export function uniqueEmailRequiredMiddleware (req, res, users) {
    const { email } = req.body

    const userWithSameEmail = users.find(user => user.email === email)

    if(userWithSameEmail) {
        const response = {
            "statusCode": 400,
            "message": "Unique email is required ",
        }
        
        res.writeHead(400, 'Unique email required', commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    return false
}