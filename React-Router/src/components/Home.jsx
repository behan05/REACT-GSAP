import React, { useEffect } from 'react'

function Home() {

    useEffect(() => {
        document.title = "Welcome Home";
    });

    return (
        <div>Welcome to Home page</div>
    )
}

export default Home;