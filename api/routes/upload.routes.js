const express = require('express')

const uploadRoutes = express.Router()

const multer = require('multer')

const mailer = require('../email/sendEmail')

const rootDir = require('../util/path')

const path = require('path')

let filenames = []

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
    let filenameArray = file.originalname.split('.')

    let extension = filenameArray.pop()
    let filename = filenameArray.join()

    let newFileName = filename + '-' + Date.now() + '.' + extension

    cb(null, newFileName)
  },
})

const upload = multer({
  storage: storage,
  fileFilter,
})

uploadRoutes.use(
  express.urlencoded({
    extended: true,
  })
)

uploadRoutes.use(express.json())

uploadRoutes.get('/upload', (req, res, next) => {
  res.send('Upload get route working!')
})

uploadRoutes.post('/upload', upload.array('files', 4), (req, res) => {
  const files = req.files

  const form = req.body

  files.forEach(element => {
    filenames.push(element.filename)
  })

  mailer('upload', process.env.EMAIL_DESTINATARIO, form, filenames)

  filenames = []

  res.send({ form })
})

uploadRoutes.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_TYPES') {
    res.status(422).json({ error: 'File type not allowed' })
    return
  }
})

module.exports = uploadRoutes
