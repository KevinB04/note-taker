const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// uuidv4();
const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)
class Notes{
    read(){
        return readAsync("db/db.json", "utf-8")
    }
    write(note){
        return writeAsync("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then(notes => {
        var notesArr;
            try {
                notesArr = [].concat(JSON.parse(notes))
            } catch (error) {
                notesArr = []
            }
            return notesArr;
        });
    };

    addNote(note){
        const { title, text } = note;

        const newNote = {
            title,
            text,
            id: uuidv4()
        }

        return this.getNotes().then(notesArray => [...notesArray, newNote]).then(newNotes => this.write(newNotes)).then(() => newNote)

    };

    removeNote(id){
        return this.getNotes().then(notesArray => notesArray.filter((note) => note.id !== id)).then(notes => this.write(notes))
    }
};

module.exports = new Notes();

