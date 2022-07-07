import express from 'express';
import { program } from 'commander';
import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import { createServer } from 'node:http';

const port = 3001;
const secret = 'topSecret';

function isAuthEnabled() {
  program.option('--auth');
  program.parse();
  const { auth } = program.opts();
  return auth;
}

const app = express();

app.use(express.json());
app.use(cors());

if (isAuthEnabled()) {
  app.post('/login', (req, res, next) => {
    if (req.body.username === 'admin' && req.body.password === 'test') {
      res.send(
        jwt.sign({ user: req.body.username }, secret, { expiresIn: '1800s' })
      );
    }
  });

  app.use('/', (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      jwt.verify(token, secret);
      next();
    } catch (e) {
      res.sendStatus(403);
    }
  });
}

app.use('/', jsonServer.router('data.json'));

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on('connection', function (ws) {
  ws.on('message', () => {});

  // ws.send();

  ws.on('close', function () {});
});

server.listen(port, () =>
  console.log(`server is listening to http://localhost:${port}`)
);
