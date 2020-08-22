import http from 'http';
import express, { Application } from 'express';

const app: Application = express();

app.get('/'); // http://localhost:3000

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.write('Hola mundo');
    response.end();
  }
);

server.listen(3000, () => {
  console.log('Server is running');
});
