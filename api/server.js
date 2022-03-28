require('dotenv').config()

const express = require('express')

const cors = require('cors')

const logger = require('./config/winston')

const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(routes)

const apiPort = process.env.VUE_APP_API_PORT

app.listen(apiPort, () =>
  logger.info(`Cadastro-BC API rodando em localhost:${apiPort}`)
)
