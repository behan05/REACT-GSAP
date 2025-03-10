import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Setting() {

    const { id } = useParams();

    useEffect(() => {
        document.title = "setting";
    });

    return (
        <div>Setting: {id}</div>
    )
}

export default Setting;