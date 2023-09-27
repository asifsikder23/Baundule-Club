"use client"
import Destination from '@/components/Home/Destination';
import Hero from '@/components/Home/Hero';
import Blog from '@/components/Home/blog';
import Deals from '@/components/Home/deals';
import Packages from '@/components/Home/packages';
import Services from '@/components/Home/services';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import React from 'react';
import Category from '@/components/Home/recommend';

const Home = () => {
    return (
        <section className='container mx-auto'>
            <Hero />
            <Category/>
            <Destination />
            <Services />
            <Packages />
            <Deals />
            <Blog />
            <FloatingWhatsApp
                phoneNumber="+8801872400423"
                accountName="Baundule Club"
                avatar='/Assets/logo/logo.png'
                statusMessage='Online'
                allowEsc
                notification
                notificationSound
            />
        </section>
    );
};

export default Home;