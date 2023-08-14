import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function updateTask (req, res) {
    const { id } = req.params

    const tasks = await database.select("tasks")
    
    if(
        entityNotFound(req, res, tasks) ||
        requiredFieldsMiddleware(req, res, ['title', 'description'])
    ) {
        return
    }
    const task = tasks.find(t => t.id === id )

    const updatedTask = { 
        ...task,
        ...req.body,
        updatedAt: new Date(),
    }
    await database.update('tasks', id, updatedTask)

    return res.writeHead(200, "Task updated", commonHeaders).end(JSON.stringify(updatedTask))
}