import React, { useState } from 'react';

const Sort = ({ sortNotes }) => {
    const [select, setSelect] = useState('');
    const setDropDown = e => {
        setSelect(e.target.value);
        sortNotes(e.target.value);
    }

    return (
        <form className="form-group">
            <label className="d-flex" >
                <p>Sort by date:</p>
                <select 
                    onChange={setDropDown}
                    className="form-control" 
                    value={select} >
                    <option value="default" >Default</option>
                    <option value="ascending" >Ascending</option>
                    <option value="descending" >Descending</option>
                </select>
            </label>
        </form>
    );
}

export default Sort;
