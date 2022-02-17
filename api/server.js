const express = require('express');
const recipiesRouter = require('./recipies/recipies-router');

const server = express();

server.use(express.json());

server.use('/api/recipies', recipiesRouter)

module.exports = server;