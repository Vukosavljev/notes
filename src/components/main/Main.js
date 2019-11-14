import React, { useEffect, useState } from 'react';
import Note from '../note/Note';
import AddNote from '../addNote/AddNote';
import AddButton from '../addButton/AddButton';
import Search from '../search/Search';
import Sort from '../sort/Sort';
import sorter from '../../utils/sorter';
import './Main.scss';

const Main = () => {
    const [notesState, setNotesState] = useState([]);
    const [displayNotes, setDisplayNotes] = useState([]);
    const [sort, setSort] = useState('default');
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => setShowModal(!showModal);
    const setSortHook = order => setSort(order);
    
    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(notesRes => {
                setNotesState(notesRes)
                setDisplayNotes(notesRes)
            })
            .catch(err => console.log('Something went wrong', err))
    }, []);

    useEffect(() => {
        const newSortedNotes = sorter(displayNotes, sort, notesState);
        console.log(newSortedNotes)
        setDisplayNotes(newSortedNotes);
    }, [sort, displayNotes, notesState]);

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
        const filNotes = notesState.filter(note => note.title.toLowerCase().startsWith(value.toLowerCase()));
        setDisplayNotes(filNotes);
    }
    
    
    return (
        <main className="main-container">
            <div className="d-flex justify-content-between">
                <Search onFilter={filterNotes} />
                <Sort sortNotes={setSortHook} />
            </div>

            { displayNotes.map(note =>  <Note key={note.title} note={note} />) }

            <div className="w-50 mx-auto mt-4">
                <AddButton toggleModal={onToggleModal} />
            </div>

            { showModal ? <AddNote toggleModal={onToggleModal} addNote={onAddNote}  /> : null }
        </main>
    );
}

export default Main;
