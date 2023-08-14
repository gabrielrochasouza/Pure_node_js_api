import http from 'node:http'
import json from './middlewares/buffer.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res)=> {
    
    const { method, url } = req
    await json(req)
    
    const route = routes.find(route => {
        if (!route.path.includes(':')) {
            const pathRoute = route.path.endsWith('/') ? route.path.slice(0,-1) : route.path
            const pathUrl = url.endsWith('/') ? url.slice(0,-1) : url
            return route.method === method && pathRoute === pathUrl
        }
        return route.method === method && route.buildRoutePath.test(url)
    } )
    if(route) {
        const routeParams = req.url.match(route.buildRoutePath)
        req.params = { ...routeParams.groups }
        await route.handler(req,res)
    }
    
    return res.writeHead(404, "Not found").end()
})

server.listen(3000);
