const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')



const loginRouter = require('./routes/login.router')
const registerRouter = require('./routes/register.router')
const indexRouter = require('./routes/index.router')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use('/', indexRouter)

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
})