import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

//configuration the .env file
dotenv.config();

// Create Express App

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define the first Route of the app
app.get('/', (req: Request, res: Response) => {
  //Send hello world
  res.send('Welcome to App Express + TS + Swagger + Mongoose');
});

//Define the second Route of the app
app.get('/hello', (req: Request, res: Response) => {
  //Send hello world
  res.send('Hello World');
});

//Execute App and Listen Request port
app.listen(port, () => console.log(`EXPRESS SERVER: Runing at http://localhost:${port}`));