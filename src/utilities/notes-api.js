import sendRequest from './send-request';
const BASE_URL = '/api/notes'

export function addNote(newNoteData) {
    return sendRequest(BASE_URL, 'POST', newNoteData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}