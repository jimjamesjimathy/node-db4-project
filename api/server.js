const express = require('express')
const recipesRouter = require('./recipes/recipes-router')

const server = express()
const recRouter = require('./recipes/recipes-router');
server.use(express.json())

server.use('/api/recipes', recRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up'})
})

module.exports = server;