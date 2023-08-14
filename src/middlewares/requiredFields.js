export function requiredFieldsMiddleware (req, res, fieldsRequired) {
    const arrayOfFields = Object.entries(req.body)
        .filter(obj => fieldsRequired.includes(obj[0]))

    const bodyRequestKeys = Object.keys(req.body)

    const missingFields = fieldsRequired.filter(field => !bodyRequestKeys.includes(field));

    const fieldsInBlanck = arrayOfFields.filter(obj => !obj[1]).map(obj => obj[0])
    
    if(fieldsInBlanck.length || missingFields.length) {
        const response = {
            "statusCode": 400,
            "message": "Missing Required Fields",
            "missingFields": missingFields,
            "fieldsInBlanck": fieldsInBlanck
        }
        res.writeHead(400, 'Fields required', {'Content-type': 'application/json'})
            .end(JSON.stringify(response))
        return true
    }
    return false
}