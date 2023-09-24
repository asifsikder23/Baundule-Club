import Image from 'next/image';
import React from 'react';
import { BsCalendarDate, BsFillStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

import '../../styles/packages.css'


const Packages = () => {
    const pkg = [
        {
            img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            location: 'London',
            duration: '3 Days',
            person: '1',
            rating: [
                {
                    rate: 4.5
                },
                {
                    rate: 4.0
                },
                {
                    rate: 5
                },
                {
                    rate: 4.5
                },
                {
                    rate: 4.5
                },
            ],
            amount: '350',
        },
        {
            img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            location: 'London',
            duration: '3 Days',
            person: '1',
            rating: [
                {
                    rate: 4.5
                },
                {
                    rate: 4.0
                },
                {
                    rate: 5
                },
                {
                    rate: 4.5
                },
                {
                    rate: 4.5
                },
            ],
            amount: '350'
        },
        {
            img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            location: 'London',
            duration: '3 Days',
            person: '1',
            rating: [
                {
                    rate: 4.5
                },
                {
                    rate: 4.0
                },
                {
                    rate: 5
                },
                {
                    rate: 4.5
                },
                {
                    rate: 4.5
                },
            ],
            amount: '350'
        },
    ]
    return (
        <>
            <div className="container mx-auto py-5">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-lime-700 uppercase" style={{ letterSpacing: '5px' }}>Packages</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Perfect Tour Packages</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10">
                    {
                        pkg.map((packages, i) => {
                            return (
                                <>
                                    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg" key={i}>
                                        <Image
                                            alt="Office"
                                            src={packages.img}
                                            class="h-56 w-full object-cover"
                                            width={500}
                                            height={500}
                                        />

                                        <div class="bg-white p-4 sm:p-6">
                                            <div className='flex justify-between items-center'>
                                                <div className='flex gap-1 items-center'>
                                                    <MdLocationPin className='text-lime-500' />
                                                    <h1>{packages.location}</h1>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <BsCalendarDate className='text-lime-500' />
                                                    <h1>{packages.duration}</h1>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <FaUserAlt className='text-lime-500' />
                                                    <h1>{packages.person} Person</h1>
                                                </div>
                                            </div>

                                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                                Molestias explicabo corporis voluptatem?
                                            </p>
                                            <div class="border-t mt-4 pt-4 flex justify-between">
                                                <div class="flex items-center">
                                                    <BsFillStarFill class="mr-2 text-lime-500" />
                                                    <h6 class="m-0 text-lg font-semibold">
                                                        4.5 <small>(250)</small></h6>
                                                </div>
                                                <h5 class="m-0 text-lg font-semibold">$350</h5>
                                            </div>
                                        </div>
                                    </article>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Packages;