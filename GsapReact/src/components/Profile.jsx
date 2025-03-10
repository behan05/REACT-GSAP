import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Profile() {

    useEffect(() => {
        document.title = "Profile"
    });

    return (
        <div>
            <h3>Welcome to profile</h3>
            <Outlet />
        </div>
    )
}

export default Profile;