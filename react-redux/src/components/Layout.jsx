import React from 'react';
import "../styles/layout.css";
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='container'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout