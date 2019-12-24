import React from 'react';

import './style'

export default ({ name, handleChange }) => {
    return (
        <div>
            <input className="app__input" type="text" value={name} onChange={(event) => handleChange(event.target.value)}/>
        </div>
    )
}