const { Router } = require('express')
const logger = require('../config/winston')
const mailer = require('../email/sendEmail')

const contactRoutes = Router()

contactRoutes.post('/fale-conosco', async (req, res) => {
  const contactForm = req.body

  try {
    await mailer('contact', process.env.EMAIL_DESTINATARIO, contactForm, null)

    logger.info("Uma nova mensagem do 'Fale conosco' foi enviada.")
    return res.status(201).json(contactForm)
  } catch (error) {
    logger.log('error', error.message)

    return res.status(500).json({ error: 'Não foi possível enviar mensagem' })
  }
})

contactRoutes.get('/fale-conosco', (req, res) => {
  return res.status(200).json({ msg: 'fale-conosco route' })
})

module.exports = contactRoutes
