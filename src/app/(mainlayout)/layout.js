"use client"
import UserContext from '@/components/context/UserContext';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import Cta from '@/shared/cta';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Toaster />
            <UserContext>
                <Navbar />
                {children}
                <Cta/>
                <Footer />
            </UserContext>
        </div>
    );
};

export default MainLayout;