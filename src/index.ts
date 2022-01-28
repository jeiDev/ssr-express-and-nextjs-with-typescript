import express from 'express'
import routes from './routes'
import next from "next"

const server = express()
const app = next({dev: true})
const port = 8000;

app.prepare().then(() => {
    routes(server, app);

    server.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });

}).catch(error => {
    console.log("error prepare ssr next", {error})
})

