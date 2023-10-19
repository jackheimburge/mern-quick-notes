const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// all paths start with '/api/notes'

//GET /api/notes
router.get('/', notesCtrl.getAll);
// POST /api/notes
router.post('/', notesCtrl.create);
// DELETE /api/notes/:id
router.delete('/:id', notesCtrl.delete)

module.exports = router;
