const commonHeaders = {
    "Content-type": "application/json"
}

export function verifyEmail (req, res) {
    const { email } = req.body

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
        const response = {
            "statusCode": 400,
            "message": "Invalid email",
        }

        res.writeHead(400, 'Invalid Email', commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    return false
}