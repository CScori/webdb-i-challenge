const express = require('express').Router();

const knex = require('../data/dbConfig/js');

const acct = express();

acct.use(express.json());

acct.get('/', (req, res) => {
    knex
    .select('*')
    .from('account')
    .then(posts => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get posts from database' });
    });
})

module.exports = acct;