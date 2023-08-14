import database from '../../database/database.js'

const commonHeaders = {
    "Content-type": "application/json"
}

export async function getTasks (req, res) {
    const tasks = await database.select('tasks');
    res.writeHead(200, 'Read', commonHeaders)
    return res.end(JSON.stringify(tasks))
}
