import React, { useEffect, useState } from 'react';
import Note from '../note/Note';
import AddNote from '../addNote/AddNote';
import AddButton from '../addButton/AddButton';
import './Main.scss';
import Search from '../search/Search';

const Main = () => {
    const [notesState, setNotes] = useState({ notes: []});
    const [displayNotes, setDisplayNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    function onToggleModal() {
       setShowModal(!showModal)
    }
    
    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(notesRes => {
                setNotes({notes: notesRes})
                setDisplayNotes(notesRes)
            })
            .catch(err => console.log('Something went wrong', err))
    }, []);

    function onAddNote() {
        console.log('add')     
    }

    function filterNotes(value) {
        if (value === '') {
            setDisplayNotes(notesState.notes);
            return;
        }
        const filNotes = notesState.notes.filter(note => 
             note.title.toLowerCase().startsWith(value.toLowerCase()));
        setDisplayNotes(filNotes);
    }
    
    
    return (
        <main className="main-container">
            <Search onFilter={filterNotes} />

            { displayNotes.map(note =>  <Note key={note.date} note={note} />) }

            <div className="w-50 mx-auto mt-4">
                <AddButton toggleModal={onToggleModal} />
            </div>

            { showModal ? <AddNote toggleModal={onToggleModal} addNote={onAddNote}  /> : null }
        </main>
    );
}

export default Main;
