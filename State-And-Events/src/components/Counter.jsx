import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(() => {
        return 0;
    });

    function handler() {
        setCount(count + 1)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handler}>Increase</button>
        </>
    )
}

export default Counter;