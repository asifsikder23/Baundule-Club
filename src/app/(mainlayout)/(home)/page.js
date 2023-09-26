import Destination from '@/components/Home/Destination';
import Hero from '@/components/Home/Hero';
import Blog from '@/components/Home/blog';
import Deals from '@/components/Home/deals';
import Packages from '@/components/Home/packages';
import Services from '@/components/Home/services';
import React from 'react';

const Home = () => {
    return (
        <section className='container mx-auto'>
            <Hero />
            <Destination />
            <Services />
            <Packages />
            <Deals/>
            <Blog/>
        </section>
    );
};

export default Home;