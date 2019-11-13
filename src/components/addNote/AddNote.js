import React, { useState } from 'react';
import './AddNote.scss';

const AddNote = ({toggleModal, addNote}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    function changeFormValue(e) {
        switch(e.target.name) {
            case 'title':
                setTitle(e.target.value);
                return;
            case 'content':
                setContent(e.target.value);
                return;
            case 'author':
                setAuthor(e.target.value);
                return;
            default: return;
        }
    }

    function submitNote(e) {
        e.preventDefault();
    }

    return (
        <div className="underlay" >
            <div className="overlay row"  >
            <img 
                onClick={toggleModal} 
                className="icon" 
                src="https://img.icons8.com/ios-filled/50/000000/x.png" 
                alt="closing" />

                <form className="w-100 mt-4" >
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            onChange={changeFormValue} 
                            name="title"
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            onChange={changeFormValue} 
                            name="content" 
                            placeholder="Note Description" />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            onChange={changeFormValue} 
                            name="author"
                            placeholder="Author" />
                    </div>
                    <button 
                        type="submit"
                        onClick={submitNote} 
                        className="btn btn-block btn-info">
                        Save Note
                    </button>
                </form>


            </div>
        </div>
    );
}

export default AddNote;
