const Note = require('../../models/note');

module.exports = {
    create
}

async function create(req, res) {
    req.body.user = req.user._id;
    await Note.create(req.body);
    const allNotes = await Note.find({ user: req.body.user });
    res.json(allNotes);
}