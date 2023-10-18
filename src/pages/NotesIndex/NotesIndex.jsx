import { useState } from "react";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import * as notesAPI from '../../utilities/notes-api';


export default function NotesIndex() {
    const [notes, setNotes] = useState([]);

    async function handleAddNote(newNoteData) {
        const allUserNotes = await notesAPI.addNote(newNoteData);
        console.log(allUserNotes);
        setNotes([...allUserNotes]);
    }
    return (
        <>
            <NewNoteForm handleAddNote={handleAddNote} />
            <div>{notes.length > 0 ? notes.map((note, idx) => <p key={idx}>{note.text} <br /> <span>Created: {new Date(note.createdAt).toLocaleDateString()}</span></p>) : 'No Notes Yet!'}</div>
        </>
    );
}