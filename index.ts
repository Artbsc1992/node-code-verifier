import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//configuration the .env file
dotenv.config();

// Create Express App

const port: string | number = process.env.PORT || 8000;

// * Execute server
server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
});

// * control Server Error

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
});