const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/upload", (req, res) => {
  console.log("aight");
  res.json({ message: "oki doki" });
});

app.listen(3000, () => console.log("Running on localhost:3000"));
