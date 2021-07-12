require("dotenv").config();

const express = require("express");

const router = express.Router();

const multer = require("multer");

const mailer = require("../email/sendEmail");

const rootDir = require("../util/path");

const path = require("path");

const fileFilter = function(req, file, cb) {
  const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type");
    error.code = "LIMIT_FILE_TYPES";

    return cb(error, false);
  }

  cb(null, true);
};

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(rootDir, "uploads"));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter,
});

router.post("/upload", upload.array("files"), (req, res) => {
  console.log("Aight! finding form...");
  const files = req.files;
  let filenames = [];

  const form = req.body;

  files.forEach((element) => {
    filenames.push(element.originalname);
  });
  console.log("names found: " + filenames.length);
  console.log(filenames);

  mailer(process.env.EMAIL_DESTINATARIO, form, filenames);

  res.json({ form: form.name });
});

router.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "File type not allowed" });
    return;
  }
});

module.exports = router;
