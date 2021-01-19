const path = require("path");
const fs = require("fs");

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

app.get(`*`, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get(`/api/notes`, function (req, res) {

})

app.post(`/api/notes`, function (req, res) {

})

app.delete(`/api/notes/:id`, function (req, res) {

})