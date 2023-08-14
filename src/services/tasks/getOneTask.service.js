import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';
import { objectPasswordFilter } from '../../utils/mappers.js';


export async function getOneTask (req, res) {
    const { id } = req.params
    const tasks = await database.select('tasks');
    if(
        entityNotFound(req, res, tasks)
    ) {
        return
    }
    const task = tasks.find(t => t.id === id)

    res.writeHead(200, 'Read One', {'Content-type': 'application/json'})
    return res.end(JSON.stringify(objectPasswordFilter(task)))
}
