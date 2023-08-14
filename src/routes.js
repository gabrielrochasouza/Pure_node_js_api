import { buildRoutePath } from './utils/buildRoutePath.js';
import { usersController } from './controllers/users.controller.js';
import { homePageMessage } from './consts/homePageMessage.js';
import { tasksController } from './controllers/tasks.controller.js';

export const routes = [
    {
        method: 'GET',
        path: '/',
        buildRoutePath: buildRoutePath('/'),
        handler: (req,res) => res.end(homePageMessage)
    },
    ...usersController,
    ...tasksController,
]