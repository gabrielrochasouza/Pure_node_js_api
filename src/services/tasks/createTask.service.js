import { randomUUID } from 'node:crypto'
import database from '../../database/database.js'
import { requiredFieldsMiddleware } from '../../middlewares/requiredFields.js';
import { uniqueFieldRequiredMiddleware } from '../../middlewares/uniqueFieldRequiredMiddleware.js';

export async function createTasks(req, res) {
    const tasks = await database.select('tasks');

    if(
        requiredFieldsMiddleware(req, res, ["title", "description"]) ||
        uniqueFieldRequiredMiddleware(req, res, tasks, "title")
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

    return res.writeHead(201, 'Task created', {'Content-type': 'application/json'}).end(JSON.stringify(newTask))
}