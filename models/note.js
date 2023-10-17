const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: { type: String, required: true },
    user: { type: isObjectIdOrHexString, required: true }
}, {
    timestamps: true
});