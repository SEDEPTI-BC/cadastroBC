const { Router } = require('express')
const mailer = require('../email/sendEmail')

const contactRoutes = Router()

contactRoutes.post('/fale-conosco', async (req, res) => {
  const contactForm = req.body

  await mailer('contact', process.env.EMAIL_DESTINATARIO, contactForm, null)

  return res.status(201).json(contactForm)
})

contactRoutes.get('/fale-conosco', (req, res) => {
  return res.status(200).json({ msg: 'fale-conosco route' })
})

module.exports = contactRoutes
