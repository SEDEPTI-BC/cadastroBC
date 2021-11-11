require('dotenv').config()

const express = require('express')

const router = express.Router()

const multer = require('multer')

const mailer = require('../email/sendEmail')

const rootDir = require('../util/path')

const path = require('path')

// const bodyParser = require("body-parser");

const fileFilter = function(req, file, cb) {
  const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf']

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Wrong file type')
    error.code = 'LIMIT_FILE_TYPES'

    return cb(error, false)
  }

  cb(null, true)
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(rootDir, 'uploads'))
  },
  filename: function(req, file, cb) {
    let extension = ''
    console.log(file)
    switch (file.mimetype) {
      case 'image/jpeg':
        extension = '.jpeg'
        break
      case 'application/pdf':
        extension = '.pdf'
        break
      case 'image/png':
        extension = '.png'
        break
    }

    let newFileName = file.filename + '-' + Date.now() + extension
    console.log(newFileName)
    cb(null, newFileName)
  },
})

const upload = multer({
  storage: storage,
  fileFilter,
})

router.use(
  express.urlencoded({
    extended: true,
  })
)

router.use(express.json())

router.get('/upload', (req, res, next) => {
  res.send('Upload get route working!')
})

router.post('/upload', upload.array('files', 4), (req, res) => {
  console.log('Aight! finding form files...')
  const files = req.files
  let filenames = []

  const form = req.body

  files.forEach(element => {
    filenames.push(element.originalname)
  })
  console.log('files found: ' + filenames.length)

  mailer(process.env.EMAIL_DESTINATARIO, form, filenames)

  res.send({ form })
})

router.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_TYPES') {
    res.status(422).json({ error: 'File type not allowed' })
    return
  }
})

module.exports = router
