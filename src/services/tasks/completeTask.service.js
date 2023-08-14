import database from '../../database/database.js'
import { entityNotFound } from '../../middlewares/entityNotFound.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function completeTask (req, res) {
    const { id } = req.params

    const tasks = await database.select("tasks")
    
    if(
        entityNotFound(req, res, tasks)
    ) {
        return
    }
    const task = tasks.find(t => t.id === id )

    const updatedTask = { 
        ...task,
        updatedAt: new Date(),
        completedAt: new Date(),
    }
    await database.update('tasks', id, updatedTask)

    return res.writeHead(200, "Task completed", commonHeaders).end(JSON.stringify(updatedTask))
}