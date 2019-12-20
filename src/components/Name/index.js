import React from 'react';

export default ({ name, handleChange }) => {
    return (
        <div>
            <input type="text" value={name} onChange={(event) => handleChange(event.target.value)}/>
        </div>
    )
}