import React from 'react';

const AddButton = ({toggleModal}) => {
    return (
        <button className="btn btn-light btn-block" type="button" onClick={toggleModal}>
            Add Note
        </button>
    );
}

export default AddButton;
