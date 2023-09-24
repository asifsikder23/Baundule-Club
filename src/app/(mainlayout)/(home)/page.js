import Destination from '@/components/Home/Destination';
import Hero from '@/components/Home/Hero';
import Packages from '@/components/Home/packages';
import Services from '@/components/Home/services';
import React from 'react';

const Home = () => {
    return (
        <>
            <Hero />
            <Destination />
            <Services />
            <Packages />
        </>
    );
};

export default Home;