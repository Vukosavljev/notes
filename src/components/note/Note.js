import React from 'react';
import './Note.scss';

const Note = ({note}) => {
    const {title, date, content} = note;

    return (
        <div className="note">
            {title}
        </div>
    );
}

export default Note;
