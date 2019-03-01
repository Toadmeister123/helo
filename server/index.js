require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')

const app = express()

app.use(bodyParser.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen( SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
// app.get('/api/getpost/:id', ctrl.getAllPosts)

