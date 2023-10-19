import sendRequest from './send-request';
const BASE_URL = '/api/notes'

export function addNote(newNoteData) {
    return sendRequest(BASE_URL, 'POST', newNoteData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteNote(note) {
    return sendRequest(`${BASE_URL}/${note._id}`, 'DELETE', note);
}