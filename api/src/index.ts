// Load the package
import {
  // main APIs
  Client,
  // config
  ClientConfig,
} from '@line/bot-sdk';
import express from 'express';
require('dotenv').config();

// Read the ports from the process.env file
const PORT = process.env.PORT || 3000;

// Load the access token and channel secret from the .env file
const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || '',
};

// Instantiate
const app: express.Express = express();
const client = new Client(config);

// Do routing
// Testing Routing
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello World');
});

// Start the server
app.listen(PORT, (): void => {
  console.log('http://localhost:3000');
});
