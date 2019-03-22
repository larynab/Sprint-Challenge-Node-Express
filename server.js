const express = require('express'); // importing a CommonJS module

const baseRouter = require('./data/helpers/base-router.js');

const server = express();

server.use(express.json());

server.use('/api/actions', baseRouter);
server.use('/api/projects', baseRouter);

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Sprint API</h2>
      <p>Welcome to the Lambda API</p>
      `);
  });

  module.exports = server;