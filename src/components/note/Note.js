import React from 'react';
import './Note.scss';

const Note = ({note}) => {
    const {title, date} = note;

    return (
        <div className="note">
            <div>{title}</div>
            <div>{date}</div>
        </div>
    );
}

export default Note;
