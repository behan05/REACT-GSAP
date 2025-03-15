import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {

    const user = useContext(UserContext)
    console.log(user);
    
    return (
        <div>
            <h1>{user.userName}</h1>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profile;