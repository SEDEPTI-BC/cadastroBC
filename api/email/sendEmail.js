require('dotenv').config()
const fs = require('fs')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const handlebars = require('handlebars')
const rootDir = require('../util/path')
const path = require('path')

const mailer = async function(type, emailAddress, form, files) {
  let htmlToSend = null

  const templates = ['/registration_template.html', '/contact_template.html']
  const subjects = ['Cadastro BC - Novo cadastro', 'Cadastro BC - Fale conosco']

  let templateToUsePath = ''
  let subjectToUse = ''

  if (type === 'registration') {
    templateToUsePath = templates[0]
    subjectToUse = subjects[0]
  } else if (type === 'contact') {
    templateToUsePath = templates[1]
    subjectToUse = subjects[1]
  } else {
    throw new Error('Tipo de email não informado!')
  }

  const readHTMLTemplate = function(path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function(err, html) {
      if (err) {
        throw err
      } else {
        callback(null, html)
      }
    })
  }

  readHTMLTemplate(__dirname + templateToUsePath, function(err, html) {
    const template = handlebars.compile(html)
    htmlToSend = template(form)
  })

  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  })

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token :(')
      }
      resolve(token)
    })
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  })

  // let attachmentsObject = {};

  const attachments = files
    ? files.map(fileName => {
        return {
          filename: fileName,
          path: path.join(rootDir, 'uploads', fileName),
        }
      })
    : null

  // send mail with defined transport object
  transporter.sendMail(
    {
      from: '"SEDEPTI" <sedepti.devs@gmail.com>', // sender address
      to: emailAddress, // list of receivers
      subject: subjectToUse, // Subject line
      // html: '<b>Hello world?</b>', // html body
      attachments: type === 'registration' ? attachments : null,
      html: htmlToSend,
    },
    (err, info) => {
      if (err) {
        console.log(err)
      }

      if (type === 'registration') {
        files.forEach(file => {
          fs.unlink(path.join(rootDir, 'uploads', file), err => {
            if (err) {
              console.error(err)
            }
          })
        })
      }
    }
  )
}

module.exports = mailer
