import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {

    const [count, setcount] = useState(0);
    const [theme, setTheme] = useState("light-theme");

    return (
        <ThemeContext.Provider value={{ count, setcount, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };