const express = require('express')
const bcrypt = require('bcrypt')

const loginRouter = require('./routes/login.router')
const registerRouter = require('./routes/register.router')

const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json())

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
})