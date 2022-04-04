const axios = require('axios')
const FormData = require('form-data')
const { Router } = require('express')

const recaptchaRoutes = Router()

recaptchaRoutes.post('/recaptcha', async (req, res) => {
  const form = new FormData()

  try {
    const { response } = req.body

    form.append('secret', process.env.VUE_APP_RECAPTCHA_SECRET)
    form.append('response', response)

    const {
      data,
    } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      form,
      { headers: form.getHeaders() }
    )

    // console.log(data)

    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: error.message })
  }
})

module.exports = recaptchaRoutes
