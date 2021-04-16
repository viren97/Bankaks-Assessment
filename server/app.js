const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

module.exports = app;
