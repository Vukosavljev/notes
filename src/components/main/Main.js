import React, { useEffect, useState } from 'react';
import Note from '../note/Note';

import './Main.scss';
import AddNote from '../addNote/AddNote';

const Main = () => {
    // const [notesState, setNotes] = useState({ notes: []});
    const [showModal, setShowModal] = useState(false);

    function onToggleModal() {
       setShowModal(!showModal)
    }
    
    // useEffect(() => {
    //     fetch('http://localhost:3000/notes')
    //         .then(res => res.json())
    //         .then(notesRes => {
    //             console.log(notesState)
    //             // setNotes(notesRes)
    //             console.log(notesRes)
    //         })
    //         .catch(err => console.log('Something went wrong', err))
    // });

    return (
        <main className="main-container">
            {
                // notesState.notes.map(note =>  <Note />)
                
            }
            <button className="btn btn-light btn-block" type="button" onClick={onToggleModal}>
                Add Note
            </button>

            {
                showModal ? <AddNote toggleModal={onToggleModal} /> : null
            }
        </main>
    );
}

export default Main;
