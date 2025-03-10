import React, { useEffect } from 'react'

function About() {

  useEffect(() => {
    document.title = "About";
  })

  return (
    <div className="conatiner">
      welcome to About page.
    </div>
  )
}

export default About;