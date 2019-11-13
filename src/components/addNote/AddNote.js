import React from 'react';
import './AddNote.scss';

const AddNote = ({toggleModal}) => {

    return (
        <div className="underlay" >
            <div className="overlay row"  >
            <img onClick={toggleModal} className="icon" alt="closing" src="https://img.icons8.com/ios-filled/50/000000/x.png" />

                <form className="w-100 mt-4" >
                    <div className="form-group">
                        <input className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Note Description" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Author" />
                    </div>
                    <button type="submit" className="btn btn-block btn-info">Save Note</button>
                </form>


            </div>
        </div>
    );
}

export default AddNote;
