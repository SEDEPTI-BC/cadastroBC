const express = require("express");

const cors = require("cors");

const uploadFormRouter = require("./routes/uploadForm");

const app = express();

app.use(cors());

app.use(uploadFormRouter);

app.listen(3000, () => console.log("Running on localhost:3000"));
