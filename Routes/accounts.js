const express = require('express')
const acct = require('express').Router();

const knex = require('../data/dbConfig.js');


acct.use(express.json());

acct.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then()
    .catch()
})

module.exports = acct;