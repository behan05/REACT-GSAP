import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';

function Dashboard() {

    useEffect(() => {
        document.title = "Dashboard-section"
    });

    return (
        <>
            <div>Welcome to Dashboard page</div>
            <Outlet />
        </>
    )
}

export default Dashboard;