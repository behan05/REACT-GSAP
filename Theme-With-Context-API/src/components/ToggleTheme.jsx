import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/ThemeContext';
import "../styles/toggleContainer.css";


function ToggleTheme() {

    const theme = useContext(ThemeContext);

    const clickHandler = () => {
        if (theme.theme === "light-theme") {
            theme.setTheme("dark-theme");
            console.log(theme.theme);
            
        } else {
            theme.setTheme("light-theme");
            console.log(theme.theme);

        }
    }

    return (
        <div className={theme.theme}>
            <h4>Current Theme Mode is : {theme.theme}</h4>
            <button onClick={clickHandler} className='btn'>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme;