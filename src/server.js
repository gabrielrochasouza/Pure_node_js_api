import http from 'node:http'
import json from './middlewares/buffer.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res)=> {
    
    const { method, url } = req
    await json(req)
    
    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    } )
    if(route) {
        const routeParams = req.url.match(route.path)
        req.params = { ...routeParams.groups }
        await route.handler(req,res)
    }
    
    return res.writeHead(404, "Not found").end()
})

server.listen(3000);