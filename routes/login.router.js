const express = require('express')

const loginController = require('./login.controller')

const loginRouter = express.Router()

loginRouter.post('/', loginController.loginUser)

module.exports = loginRouter
