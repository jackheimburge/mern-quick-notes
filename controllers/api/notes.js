const Note = require('../../models/note');

module.exports = {
    create,
    getAll,
    delete: deleteNote
}

async function create(req, res) {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note);
}

async function getAll(req, res) {
    const allNotes = await Note.find({ user: req.user._id });
    res.json(allNotes);
}

async function deleteNote(req, res) {
    const deletedNote = await Note.deleteOne(req.body);
    res.json(deletedNote);
}