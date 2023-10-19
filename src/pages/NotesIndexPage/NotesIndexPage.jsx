import { useState, useEffect } from "react";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import * as notesAPI from '../../utilities/notes-api';


export default function NotesIndexPage() {
    const [notes, setNotes] = useState([]);

    useEffect(function () {
        async function getNotes() {
            const allNotes = await notesAPI.getAll();
            setNotes([...allNotes])
        }
        getNotes();
    }, [])

    async function handleAddNote(newNoteData) {
        const note = await notesAPI.addNote(newNoteData);
        setNotes([...notes, note]);
    }
    return (
        <>
            <NewNoteForm handleAddNote={handleAddNote} />
            <div>{notes.length > 0 ? notes.map((note, idx) => <p key={idx}>{note.text} <br /> <span>Created: {new Date(note.createdAt).toLocaleDateString()}</span></p>) : 'No Notes Yet!'}</div>
        </>
    );
}