import React from 'react';

const Search = ({ onFilter }) => {
    function onSearch(e) {
        onFilter(e.target.value)
    }

    return (
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                onChange={onSearch}
                placeholder="Start typing to search for notes" />
        </div>
    );
}

export default Search;
