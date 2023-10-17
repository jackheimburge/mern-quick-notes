import { useState } from "react";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";


export default function NotesIndex() {
    const [notes, setNotes] = useState(null);
    return (
        <>
            <NewNoteForm />
            <h1>{notes ? notes : 'No Notes Yet!'}</h1>
        </>
    );
}