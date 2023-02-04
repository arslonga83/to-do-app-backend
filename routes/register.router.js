const express = require('express')

const registerController = require('./register.controller')

const registerRouter = express.Router()

registerRouter.post('/', registerController.registerUser)

module.exports = registerRouter
