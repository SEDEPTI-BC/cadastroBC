const { Router } = require('express')
const contactRoutes = require('./contact.routes')
const uploadRoutes = require('./upload.routes')

const routes = Router()

routes.use(uploadRoutes)

routes.use(contactRoutes)

module.exports = routes
