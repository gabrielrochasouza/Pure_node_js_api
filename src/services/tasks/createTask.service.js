import { randomUUID } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';

const commonHeaders = {
    "Content-type": "application/json"
}

export async function createTasks(req, res) {
    if(
        requiredFieldsMiddleware(req, res, ["title", "description"])
    ) {
        return
    }

    const newTask = {
        id: randomUUID(),
        title: req.body?.title,
        description: req.body?.description,
        createdAt: new Date(),
        updatedAt: null,
        completedAt: null,
    }

    database.insert('tasks', newTask)

    return res.writeHead(201, 'Task created', commonHeaders).end(JSON.stringify(newTask))
}