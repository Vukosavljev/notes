import React, { useEffect, useState } from 'react';
import Note from '../note/Note';
import AddNote from '../addNote/AddNote';
import AddButton from '../addButton/AddButton';
import './Main.scss';

const Main = () => {
    const [notesState, setNotes] = useState({ notes: []});
    const [showModal, setShowModal] = useState(false);

    function onToggleModal() {
       setShowModal(!showModal)
    }
    
    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(notesRes => setNotes({notes: notesRes}))
            .catch(err => console.log('Something went wrong', err))
    }, []);

    function onAddNote() {
        console.log('add')     
    }

    const displayNotes =  notesState.notes.map(note =>  <Note key={note.date} note={note} />)

    return (
        <main className="main-container">
            { displayNotes  }
            <div className="w-50 mx-auto mt-4">
                <AddButton toggleModal={onToggleModal} />
            </div>

            { showModal ? <AddNote toggleModal={onToggleModal} addNote={onAddNote}  /> : null }
        </main>
    );
}

export default Main;
