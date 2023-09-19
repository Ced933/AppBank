import React from 'react';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const BaseLayout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default BaseLayout;