export function entityNotFound (req, res, entitys) {
    const { id } = req.params

    const entity = entitys.find(e => e.id === id)
    
    if(!entity) {
        const response = {
            "statusCode": 404,
            "message": "Not found",
        }
        
        res.writeHead(404, "Not found", {'Content-type': 'application/json'})
            .end(JSON.stringify(response))
        return true
    }

    return false
}