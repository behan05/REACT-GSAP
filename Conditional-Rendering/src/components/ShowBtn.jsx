import React from 'react';
import "./btn.css";

function ShowBtn({ setIsActive }) {
    return (
        <button className='btn' onClick={() => setIsActive(true)}>Show</button>
    )
}

export default ShowBtn;