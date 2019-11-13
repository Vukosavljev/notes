import React, { userState} from 'react';
import Note from '../note/Note';
import './Main.scss';
import AddNote from '../addNote/AddNote';

const Main = () => {
    // const [notes, setNotes] = userState();

    // fetch('http://localhost:3000/notes')
    //     .then(res => res.json())
    //     .then(notesRes => setNotes(notesRes));

    return (
        <main className="main-container">
            {
                // notes.map(note =>  <Note {...note} />)
            }
            <AddNote />
            <button className="btn btn-light btn-block" type="button">
                Add Note
            </button>

  
        </main>
    );
}

export default Main;
