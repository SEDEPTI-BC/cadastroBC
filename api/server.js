require('dotenv').config()

const express = require('express')

const cors = require('cors')

// const uploadFormRouter = require('./routes/uploadForm')

const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(routes)

const apiPort = process.env.VUE_APP_API_PORT

app.listen(apiPort, () =>
  console.log(`Cadastro-BC API running on localhost:${apiPort}`)
)
