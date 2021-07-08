const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());

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
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); //Appending extension
  },
});

const upload = multer({
  storage: storage,
  fileFilter,
});

app.post("/upload", upload.array("files"), (req, res) => {
  console.log("aight");
  res.json({ files: req.files });
});

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "File type not allowed" });
    return;
  }
});

app.listen(3000, () => console.log("Running on localhost:3000"));
