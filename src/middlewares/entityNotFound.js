const commonHeaders = {
    "Content-type": "application/json"
}

export function entityNotFound (req, res, entitys) {
    const { id } = req.params

    const entity = entitys.find(e => e.id === id)
    
    if(!entity) {
        const response = {
            "statusCode": 404,
            "message": "Not found",
        }
        
        res.writeHead(404, "Not found", commonHeaders)
            .end(JSON.stringify(response))
        return true
    }

    return false
}