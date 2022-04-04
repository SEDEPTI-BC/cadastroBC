const { Router } = require('express')
const contactRoutes = require('./contact.routes')
const recaptchaRoutes = require('./recaptcha.routes')
const uploadRoutes = require('./upload.routes')

const routes = Router()

routes.use(uploadRoutes)

routes.use(contactRoutes)

routes.use(recaptchaRoutes)

module.exports = routes
