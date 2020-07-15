const express = require('express')
require('./db/mongoose') // By using this cmd, we make sure we're connecting with mongodb before running the following code.
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app