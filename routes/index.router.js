const express = require('express')

const indexController = require('./index.controller')
    
const indexRouter = express.Router()
    
indexRouter.get('/', indexController.authenticateToken, indexController.getHome)
    
module.exports = indexRouter