const path = require("path");
const fs = require("fs");
const router = require("express").Router();
const Notes = require("../db/Notes.js")

router.get(`/notes`, function (req, res) {
  Notes.getNotes().then(notesArray => res.json(notesArray)).catch(err => res.status(500).json(err))
});



router.post("/notes", function (req, res) {

    Notes.addNote(req.body).then(note => res.json(note)).catch(err => res.status(500).json(err))

});



router.delete(`/notes/:id`, function (req, res) {
    Notes.removeNote(req.params.id).then(() => res.json({ ok: true}) ).catch(err => res.status(500).json(err))
});

module.exports = router;