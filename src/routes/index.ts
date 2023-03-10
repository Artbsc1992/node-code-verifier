/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import goodbyeRouter from './GoodbyeRouter';
import { LogInfo } from '../utils/logger';


// Server instance

let server = express();

// Router instance

let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api

rootRouter.get('/', (req:Request, res:Response) => {
  LogInfo('Get: http://localhost:8000/api')
  res.send('Welcome to App Express + TS + Swagger + Mongoose');
});

// Redirections to routers

server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRouter) //http://localhost:8000/api/hello
// Add more routes to the app
rootRouter.use('/goodbye', goodbyeRouter)

export default server;