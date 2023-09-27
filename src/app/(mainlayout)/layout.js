"use client"
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen">
                        < Image
                            src={'/Assets/logo/logo.gif'}
                            alt=""
                            width={500}
                            height={500}
                            className="w-full" />
                    </div >
                    :
                    <>
                        <Navbar />
                        {children}
                        <Footer />
                    </>
            }

        </>
    );
};

export default MainLayout;