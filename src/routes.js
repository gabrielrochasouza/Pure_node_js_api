import { buildRoutePath } from './utils/buildRoutePath.js';
import { getUsers } from './services/users/getUsers.service.js';
import { createUsers } from './services/users/createUsers.service.js';
import { deleteUsers } from './services/users/deleteUsers.service.js';
import { updateUsers } from './services/users/updateUsers.service.js';
import { getOneUsers } from './services/users/getOneUser.service.js';
import { login } from './services/users/login.service.js';

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/'),
        handler: (req,res) => res.end('App is running 🎉')
    },
    {
        method: 'GET',
        path: buildRoutePath('/users/:id'),
        handler: (req,res) => getOneUsers(req, res)
    },
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req,res) => getUsers(req, res)
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req,res) => createUsers(req,res)
    },
    {
        method: 'POST',
        path: buildRoutePath('/login'),
        handler: (req,res) => login(req,res)
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req,res) => deleteUsers(req, res)
    },
    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'),
        handler: (req,res) => updateUsers(req, res)
    },
]