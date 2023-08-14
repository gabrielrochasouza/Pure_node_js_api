import database from '../../database/database.js'

export async function getTasks (req, res) {
    const tasks = await database.select('tasks');
    res.writeHead(200, 'Read', {'Content-type': 'application/json'})
    return res.end(JSON.stringify(tasks))
}
