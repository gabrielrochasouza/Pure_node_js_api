import { completeTask } from '../services/tasks/completeTask.service.js';
import { createTasks } from '../services/tasks/createTask.service.js';
import { deleteTask } from '../services/tasks/deleteTask.service.js';
import { getOneTask } from '../services/tasks/getOneTask.service.js';
import { getTasks } from '../services/tasks/getTasks.service.js';
import { updateTask } from '../services/tasks/updateTask.service.js';
import { buildRoutePath } from '../utils/buildRoutePath.js';

export const tasksController = [
    {
        method: 'GET',
        path: '/tasks/:id',
        buildRoutePath: buildRoutePath('/tasks/:id'),
        handler: (req,res) => getOneTask(req, res)
    },
    {
        method: 'GET',
        path: '/tasks',
        buildRoutePath: buildRoutePath('/tasks'),
        handler: (req,res) => getTasks(req, res)
    },
    {
        method: 'POST',
        path: '/tasks',
        buildRoutePath: buildRoutePath('/tasks'),
        handler: (req,res) => createTasks(req,res)
    },
    {
        method: 'DELETE',
        path: '/tasks/:id',
        buildRoutePath: buildRoutePath('/tasks/:id'),
        handler: (req,res) => deleteTask(req, res)
    },
    {
        method: 'PATCH',
        path: '/tasks/:id/complete',
        buildRoutePath: buildRoutePath('/tasks/:id/complete'),
        handler: (req,res) => completeTask(req, res)
    },
    {
        method: 'PUT',
        path: '/tasks/:id',
        buildRoutePath: buildRoutePath('/tasks/:id'),
        handler: (req,res) => updateTask(req, res)
    },
]
