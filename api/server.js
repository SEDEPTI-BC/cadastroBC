const express = require("express");
const cors = require("cors");
const multer = require("multer");

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

const upload = multer({
  dest: "./uploads",
  fileFilter,
});

app.post("/upload", upload.array("files"), (req, res) => {
  console.log("aight");
  res.json({ file: req.file });
});

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "File type not allowed" });
    return;
  }
});

app.listen(3000, () => console.log("Running on localhost:3000"));
