import { buildRoutePath } from './utils/buildRoutePath.js';
import { usersController } from './controllers/users.controller.js';

export const routes = [
    {
        method: 'GET',
        path: '/',
        buildRoutePath: buildRoutePath('/'),
        handler: (req,res) => res.end('App is running 🎉')
    },
    ...usersController,
]