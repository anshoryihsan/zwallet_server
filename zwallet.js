#!/usr/bin/env node

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const indexRoutes = require("./src/routes/index");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/", indexRoutes);
app.get("/", function (req, res) {
  res.send("/api/v1");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
