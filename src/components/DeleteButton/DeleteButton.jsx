import * as notesAPI from '../../utilities/notes-api';

export default function DeleteButton({ note, setNotes, notes }) {
    async function handleDeleteNote() {
        await notesAPI.deleteNote(note);
        setNotes(notes.filter(n => n._id !== note._id));
    }
    return (
        <button onClick={handleDeleteNote}>Delete</button>
    );
}