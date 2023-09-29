"use client"
import UserContext from '@/components/context/UserContext';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Toaster />
            <UserContext>
                <Navbar />
                {children}
                <Footer />
            </UserContext>
        </div>
    );
};

export default AuthLayout;