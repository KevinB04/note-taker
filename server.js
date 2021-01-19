const path = require("path");
const fs = require("fs");
var express = require("express");

const render = require("./public/assets/index.html");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'))






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  