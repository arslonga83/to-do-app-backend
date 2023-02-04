const bcrypt = require('bcrypt')
const users = require('../model/users')

async function registerUser (req, res) {
  const username = req.body.username
  const hash = await bcrypt.hash(req.body.password, 10)
  users.push({
    username,
    password: hash
  })
  console.log(users)
  res.status(200).json('ok')
}

module.exports = {
  registerUser
}