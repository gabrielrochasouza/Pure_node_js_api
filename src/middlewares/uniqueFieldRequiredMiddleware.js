export function uniqueFieldRequiredMiddleware (req, res, entityTable, field) {

    const entityRowWithSameField = entityTable.find(entity => entity[field] === req.body[field])

    if(entityRowWithSameField) {
        const response = {
            "statusCode": 400,
            "message": `Unique ${field} is required`,
        }
        
        res.writeHead(400, `Unique ${field} is required`, {'Content-type': 'application/json'})
            .end(JSON.stringify(response))
        return true
    }

    return false
}