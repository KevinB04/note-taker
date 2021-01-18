const path = require("path");
const fs = require("fs");

var app = express();
var PORT = 8000;

app.use(express.static('public'))