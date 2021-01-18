const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.static('public'))






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  