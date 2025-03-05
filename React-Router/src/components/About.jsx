import React, { useEffect } from 'react'

function About() {

    useEffect(() => {
        document.title = "About-section"
    });
    
    return (
        <div>Welcome to About page</div>
    )
}

export default About;