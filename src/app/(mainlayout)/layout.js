import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;