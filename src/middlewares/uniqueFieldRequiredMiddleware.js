export function uniqueFieldRequiredMiddleware (req, res, entityTable, field) {
    const pathId = req.params?.id;

    const response = {
        "statusCode": 400,
        "message": `Unique ${field} is required`,
    }
    let entityRowWithSameField

    if (pathId) {
        entityRowWithSameField = entityTable.some(entity => entity[field] === req.body[field] && entity.id !== pathId)
    } else {
        entityRowWithSameField = entityTable.some(entity => entity[field] === req.body[field])
    }

    if(entityRowWithSameField) {
        res.writeHead(400, `Unique ${field} is required`, {'Content-type': 'application/json'})
            .end(JSON.stringify(response))
        return true
    }
    
    return false
}