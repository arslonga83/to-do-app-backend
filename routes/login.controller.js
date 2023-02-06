const bcrypt = require('bcrypt')
const users = require('../model/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function loginUser (req, res) {
  const user = users.find(user => user.username === req.body.username)
  if (!user) {
    res.status(400).json('username not found')
    return
  }
  const isValid = await bcrypt.compare(req.body.password, user.password)
  if (!isValid) {
    res.status(400).json('wrong password')
    return
  }
  const token = jwt.sign({
    name: user.username
  }, 'secret', { expiresIn: '1h' })
  res.status(200).json({ token })
}

module.exports = {
  loginUser
}
