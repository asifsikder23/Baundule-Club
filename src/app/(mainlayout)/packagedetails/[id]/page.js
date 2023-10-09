"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';
import '../../../../styles/pkgdetails.css'
import { BsGlobe2 } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { BiSolidTime } from 'react-icons/bi';
import { GiClick } from 'react-icons/gi';
import { AiOutlineForm } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';

const PackagesDetails = () => {
    const params = useParams();
    const id = params.id;

    const { data: details } = useQuery("details", async () => {
        const response = await axios.get(`http://localhost:5000/packages/${id}`);
        return response.data;
    });
    return (
        <>
            <div class="page-header bg-scroll bg-inner division -mt-7">
                <div class="container mx-auto">
                    <div class="flex flex-col items-center justify-center"
                        style={{
                            minHeight: '400px'
                        }}>
                        <h3 class="display-4 text-white uppercase mb-2 text-center">{details?.location}</h3>
                        <div class="flex text-white">
                            <p className='text-2xl text-center' style={{ letterSpacing: '5px' }}>Your Amazing Tour</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-5">
                    <div className="w-2/3 box">
                        <div className='flex items-center gap-2 mb-3'>
                            <BsGlobe2 /> <p className='font-bold text-lg'>Information</p>
                        </div>
                        <p>
                            {details?.desc}
                        </p>
                        <div>
                            <h1 className='font-bold my-3'>
                                For booking this tour, please follow the following steps :
                            </h1>
                            <ul>
                                <li>
                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                            <GiClick/>
                                        </div>
                                        <div class="flex-grow pl-4">
                                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                            <p class="leading-relaxed">Click on the Book Now Button</p>
                                        </div>
                                    </div>
                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                            <AiOutlineForm/>
                                        </div>
                                        <div class="flex-grow pl-4">
                                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                            <p class="leading-relaxed">Then fill up the form and submit.</p>
                                        </div>
                                    </div>
                                    <div class="flex relative pb-12">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                            <RiContactsFill/>
                                        </div>
                                        <div class="flex-grow pl-4">
                                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                            <p class="leading-relaxed">After submitting you contact with admin about Tour and Payment</p>
                                        </div>
                                    </div>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3 box sticky top-20">
                        <div className='flex items-center gap-2 mb-3'>
                            <MdLocationPin className='text-lime-500' />
                            <h1>{details?.location}</h1>
                        </div>
                        <div className='flex items-center gap-2 mb-3'>
                            <RiTeamFill className='text-lime-500' />
                            <h1>From 1 to 48 people</h1>
                        </div>
                        <div className='flex items-center gap-2 mb-3'>
                            <BiSolidTime className='text-lime-500' />
                            <h1>{details?.duration} days</h1>
                        </div>
                        <hr className='my-3' />
                        <div className='flex items-center gap-2 mb-3'>
                            <h1>Free cancellation up to twenty-four (24) hours before the start of the tour.</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default PackagesDetails;
