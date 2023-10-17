import './NewNoteForm.css';

export default function NewNoteForm() {

    async function handleSubmit() {
        alert('clicked');
    }

    return (
        <div className='NewNoteForm'>
            <label htmlFor="text">Enter a Note</label>
            <input id='text' name='text'></input>
            <button onClick={handleSubmit}>Add Note</button>
        </div>
    );
}