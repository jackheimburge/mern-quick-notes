import { useState } from 'react';
import './NewNoteForm.css';

export default function NewNoteForm({ handleAddNote }) {
    const [newNote, setNewNote] = useState({
        text: '',
        createdAt: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        handleAddNote(newNote);
    }

    return (
        <form onSubmit={handleSubmit} className='NewNoteForm'>
            <label htmlFor="text">Enter a Note</label>
            <textarea id='text' name='text' cols="50" rows="4" onChange={(e) => setNewNote({ [e.target.name]: e.target.value, createdAt: null })}></textarea>
            <button>Add Note</button>
        </form >
    );
}