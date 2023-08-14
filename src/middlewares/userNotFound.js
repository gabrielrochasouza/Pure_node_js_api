const commonHeaders = {
    "Content-type": "application/json"
}

export function userNotFound (req, res, users) {
    const { id } = req.params

    const user = users.find(user => user.id === id)
    
    if(!user) {
        const response = {
            "statusCode": 404,
            "message": "User not found",
        }
        
        res.writeHead(404, "User not found", commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    return false
}