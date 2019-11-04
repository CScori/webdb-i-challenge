const express = require('express')
const acct = require('express').Router();

const knex = require('../data/dbConfig.js');


acct.use(express.json());

acct.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get accounts: ${error}` })
    })
})
acct.post('/', (req, res) => {
    knex
    .insert(req.body, id)
    .into('accounts')
    .then(insert => {
        res.status(201).json(insert)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not add accounts: ${error}` })
    })
})
acct.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .where('id', '='. req.params.id)
    .first()
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get account: ${error}` })
    })
})

acct.put('/:id', (req, res) => {
    const changes = req.body
    knex('accounts')
    .where({id: req.params.id })
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not editaccounts: ${error}` })
    })
})

acct.delete('/:id', (req, res) => {
    const id = req.params.id
    knex('accounts')
    .where(id)
    .del()
    .then(remvd => {
        res.status(201).json(remvd)
    })
    .catch(err => {
        res.status(500).json({ error: `Server error could not get accounts: ${error}` })
    })
})
module.exports = acct;