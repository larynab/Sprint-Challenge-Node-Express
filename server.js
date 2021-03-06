// importing a CommonJS module
const express = require('express'); 

const actionRouter = require('./data/helpers/action-router.js');
const projectRouter= require('./data/helpers/project-router.js');

const server = express();
//Middleware
server.use(express.json());
//Routing
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);
// server.use('/api/projects', baseRouter);
//Display Page
server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Sprint API</h2>
      <p>Welcome to the Lambda API</p>
      `);
  });

  module.exports = server;