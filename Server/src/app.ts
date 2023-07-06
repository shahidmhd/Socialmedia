
import express from 'express'
import http from 'http'
import serverConfig from './frameworks/webserver/server';
import expressConfig from './frameworks/webserver/express';
import connectDB from './frameworks/database/Mongodb/Connection/connection';


const app = express();
const server = http.createServer(app);
expressConfig(app)

//connecting mongoDb
connectDB();


serverConfig(server).startServer()