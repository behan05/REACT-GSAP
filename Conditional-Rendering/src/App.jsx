import React, { useState } from 'react'
import Logout from './components/Logout';
import Login from './components/Login';
import About from './components/About';

// there are three way to render conditionally.
// if else
// && 
// Ternary operator

function App() {
    const [loggedIn, setLoggedIn] = useState(true);

    // Varient One.

    // if (loggedIn) {
    //     return (
    //         <>
    //             <h2>Hey there you are LoggedIn</h2>
    //             <Logout />
    //         </>
    //     )
    // } else {
    //     return <>
    //         <h2>Hey there you are LoggedOut</h2>
    //         <Login />
    //     </>
    // }

    // Varient Two.

    // return (
    //     loggedIn ? (<>
    //         <h2>Hey there you are LoggedIn</h2>
    //          <Logout />
    //     </>) : (
    //         <>
    //             <h2>Hey there you are LoggedOut</h2>
    //             <Login />
    //         </>
    //     )
    // )

    // Varient Third.

    // return (
    //     loggedIn && (<><h2>Hey there you are LoggedIn</h2> <Logout /></>)
    // )


    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <About title="About">
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </About>

            <About title="Desc">
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </About>
        </>
    )

}

export default App;