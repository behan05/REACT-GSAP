import React from 'react';
const UserContext = React.createContext();


function UserProvider({ children }) {

    const usersData = {
        userName: "Behan Kumar",
        email: "behan@google.com"
    }

    return (
        <UserContext.Provider value={usersData}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };