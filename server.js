
var express = require("express");
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
app.use(express.static('public'))






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  