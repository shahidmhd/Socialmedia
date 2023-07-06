
import express from 'express'
import http from 'http'
import serverConfig from './frameworks/webserver/server';
import expressConfig from './frameworks/webserver/express';
import connectDB from './frameworks/database/Mongodb/Connection/connection';
import routes from './frameworks/webserver/routes';
import cors from 'cors'

const app = express();
const server = http.createServer(app);
expressConfig(app)


app.use(cors())

//connecting mongoDb
connectDB();
routes(app)

serverConfig(server).startServer()