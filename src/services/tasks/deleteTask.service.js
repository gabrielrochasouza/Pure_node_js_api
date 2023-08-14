import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function deleteTask (req, res) {
    const { id } = req.params

    const tasks = await database.select("tasks")

    if(
        entityNotFound(req, res, tasks)
    ) {
        return
    }

    database.delete('tasks', id)

    return res.writeHead(204, "Task deleted", commonHeaders).end()
}