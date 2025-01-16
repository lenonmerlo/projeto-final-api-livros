require('dotenv').config()
const express = require('express')
const apiRouter = require('./routes/api')
const authRouter = require('./routes/auth')
const errorMiddleware = require('./middlewares/error.middleware')
const app = express()

app.use(express.json())

app.use('/auth', authRouter)
app.use('/api', apiRouter)

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))
