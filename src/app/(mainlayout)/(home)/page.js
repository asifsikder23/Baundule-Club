import Destination from '@/components/Home/Destination';
import Hero from '@/components/Home/Hero';
import Deals from '@/components/Home/deals';
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
            <Deals/>
        </>
    );
};

export default Home;