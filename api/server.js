const express = require("express");

const cors = require("cors");

const uploadFormRouter = require("./routes/uploadForm");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(uploadFormRouter);

const apiPort = 8080;

app.listen(apiPort, () =>
  console.log(`Cadastro-BC API running on localhost:${apiPort}`)
);
