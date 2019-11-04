const express = require('express');
const AccountRouter = require('./Routes/accounts.js')


const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter)

server.get('/', (req, res) => {
    res.send('Entering the account table')
})


module.exports = server;