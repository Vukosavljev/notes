import React, { useEffect, useState } from 'react';
import Note from '../note/Note';
import AddNote from '../addNote/AddNote';
import AddButton from '../addButton/AddButton';
import Search from '../search/Search';
import './Main.scss';

const Main = () => {
    const [notesState, setNotesState] = useState([]);
    const [displayNotes, setDisplayNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [sort, setSort] = useState('');

    function onToggleModal() {
       setShowModal(!showModal)
    }
    
    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(notesRes => {
                setNotesState(notesRes)
                setDisplayNotes(notesRes)
            })
            .catch(err => console.log('Something went wrong', err))
    }, []);

    function onAddNote(newNote) {
        const allNotes = [...notesState, newNote]; 
        setNotesState(allNotes);
        setDisplayNotes(allNotes);
    }

    function filterNotes(value) {
        if (value === '') {
            setDisplayNotes(notesState);
            return;
        }
        const filNotes = notesState.filter(note => 
             note.title.toLowerCase().startsWith(value.toLowerCase()));
        setDisplayNotes(filNotes);
    }
    
    
    return (
        <main className="main-container">
            <Search onFilter={filterNotes} />

            { displayNotes.map(note =>  <Note key={note.title} note={note} />) }

            <div className="w-50 mx-auto mt-4">
                <AddButton toggleModal={onToggleModal} />
            </div>

            { showModal ? <AddNote toggleModal={onToggleModal} addNote={onAddNote}  /> : null }
        </main>
    );
}

export default Main;
