const express = require('express')

require('./_utils/mongoose')

const router = require('./_routes/user')

const app = express()
app.use(router)

module.exports = app