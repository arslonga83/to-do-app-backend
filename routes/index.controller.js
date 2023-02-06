const bcrypt = require('bcrypt')
const users = require('../model/users')
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config()


function authenticateToken(req, res, next) {
  console.log('authenticating')
  const authHeader = req.headers['authorization'] 
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  // const token = req.body.token
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403)
    req.username = user
    next()
  })
}

function getHome(req, res) {
  console.log('sending page')
  res.json('authorized')
}

module.exports = {
  getHome,
  authenticateToken
}
