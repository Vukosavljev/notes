import React, { userState} from 'react';
import Note from '../note/Note';

const Main = () => {
    const [notes, setNotes] = userState();

    fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(notesRes => setNotes(notesRes));

    return (
        <main>
            {
                notes.map(note =>  <Note {...note} />)
            }
        </main>
    );
}

export default Main;
