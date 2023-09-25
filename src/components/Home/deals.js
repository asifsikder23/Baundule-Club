"use client"
import React, { useState } from 'react';
import '../../styles/deals.css'
import Image from 'next/image';

const Deals = () => {
    const [selectedtab, setSelectedTab] = useState("hot");

    const deals = [
        {
            category: 'hot',
            title: 'Find Your Dream Getaway in Hot Deals',
            description: 'Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket. Our handpicked selection of sizzling travel deals is designed to ignite your wanderlust and leave you with unforgettable memories.',
            banner: 'https://i.ibb.co/Wgdkktv/hotabout.jpg',
            packages: [
                {
                    img: 'https://i.ibb.co/NTJqVLB/maldives.jpg',
                    country: 'Maldives'
                },
                {
                    img: 'https://i.ibb.co/9V9HbK8/thailand.jpg',
                    country: 'Thailand'
                },
                {
                    img: 'https://i.ibb.co/FDjVP2P/india.jpg',
                    country: 'India'
                },
                {
                    img: 'https://i.ibb.co/Kh0Bby9/sajek.jpg',
                    country: 'Bangladesh'
                },
            ]
        },
        {
            category: 'resortpkg',
            title: 'Find Your Dream Getaway in Hot Deals',
            description: 'Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket. Our handpicked selection of sizzling travel deals is designed to ignite your wanderlust and leave you with unforgettable memories.',
            banner: 'https://i.ibb.co/Wgdkktv/hotabout.jpg',
            packages: [
                {
                    img: 'https://i.ibb.co/NTJqVLB/maldives.jpg',
                    country: 'Maldives'
                },
                {
                    img: 'https://i.ibb.co/9V9HbK8/thailand.jpg',
                    country: 'Thailand'
                },
                {
                    img: 'https://i.ibb.co/FDjVP2P/india.jpg',
                    country: 'India'
                },
                {
                    img: 'https://i.ibb.co/Kh0Bby9/sajek.jpg',
                    country: 'Bangladesh'
                },
            ]
        },
        {
            category: 'internationalpkg',
            title: 'Find Your Dream Getaway in Hot Deals',
            description: 'Are you dreaming of palm-fringed beaches, cultural immersion in exotic cities, or thrilling adventures in breathtaking landscapes? Now, those dreams can become a reality without burning a hole in your pocket. Our handpicked selection of sizzling travel deals is designed to ignite your wanderlust and leave you with unforgettable memories.',
            banner: 'https://i.ibb.co/Wgdkktv/hotabout.jpg',
            packages: [
                {
                    img: 'https://i.ibb.co/NTJqVLB/maldives.jpg',
                    country: 'Maldives'
                },
                {
                    img: 'https://i.ibb.co/9V9HbK8/thailand.jpg',
                    country: 'Thailand'
                },
                {
                    img: 'https://i.ibb.co/FDjVP2P/india.jpg',
                    country: 'India'
                },
                {
                    img: 'https://i.ibb.co/Kh0Bby9/sajek.jpg',
                    country: 'Bangladesh'
                },
            ]
        },
    ]
    return (
        <>
            <section className='container mx-auto py-5'>
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-lime-700 uppercase" style={{ letterSpacing: '5px' }}>Deals</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Explore, Save, Discover More!</h1>
                </div>

                <CatBtn selectedtab={selectedtab} setSelectedTab={setSelectedTab} />
                <div >
                    {selectedtab == "hot" && deals.map((p, i) => (
                        p.category === 'hot' && <All p={p} key={i} />
                    ))}
                    {selectedtab == "resort" && deals.map((p, i) => (
                        p.category === 'resortpkg' && <All p={p} key={i} />
                    ))}
                    {selectedtab == "international" && deals.map((p, i) => (
                        p.category === 'internationalpkg' && <All p={p} key={i} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Deals;

const CatBtn = ({ selectedtab, setSelectedTab }) => {
    return (
        <>
            <div id='catBtn'>
                <ul className="tab tab-tabs" role="tablist">
                    <li
                        className="tab-item"
                        onClick={() => {
                            setSelectedTab("hot");
                        }}
                        data-aos='fade-right'
                    >
                        <a
                            className={
                                selectedtab == "hot"
                                    ? "tab-link btn active"
                                    : "tab-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            Hot Deals
                        </a>
                    </li>
                    <li
                        className="tab-item"
                        onClick={() => {
                            setSelectedTab("resort");
                        }}
                        data-aos='fade-up'
                    >
                        <a
                            className={
                                selectedtab == "resort"
                                    ? "tab-link btn active"
                                    : "tab-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            Resort Packages
                        </a>
                    </li>
                    <li
                        className="tab-item"
                        onClick={() => {
                            setSelectedTab("international");
                        }}
                        data-aos='fade-left'
                    >
                        <a
                            className={
                                selectedtab == "international"
                                    ? "tab-link btn active"
                                    : "tab-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            International Tour Pack
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

const All = ({ p, i }) => {
    return (
        <>
            <div class="container mx-auto pt-5" key={i}>
                <div class="md:flex">
                    <div class="lg:w-1/2 hidden lg:block">
                        <Image
                            class="inset-0 w-full h-full object-cover"
                            src={p.banner}
                            alt=''
                            width={500}
                            height={500}
                        />
                    </div>
                    <div class="lg:w-1/2 pt-5 pb-20 md:pb-5">
                        <div class="bg-white p-4 md:p-10 my-5 md:my-0">
                            {
                                p.category === 'hot' ? (
                                    <h6 class="text-primary uppercase" style={{ letterSpacing: '5px' }}>Hot Deals</h6>
                                ) : p.category === 'resortpkg' ? (
                                    <h6 class="text-primary uppercase" style={{ letterSpacing: '5px' }}>Resort Packages</h6>
                                ) : (
                                    <h6 class="text-primary uppercase" style={{ letterSpacing: '5px' }}>International Tour Pack</h6>
                                )
                            }

                            <h1 class="text-3xl font-semibold mb-3">{p.title}</h1>
                            <p class="mb-4">
                                {p.description}
                            </p>
                            <div class="grid grid-cols-2 gap-5 mb-4">
                                {
                                    p?.packages?.map((pkg, i) => {
                                        return (
                                            <>
                                                <div className="destination-item relative overflow-hidden mb-2">
                                                    <Image
                                                        src={pkg.img} alt=""
                                                        className='h-28 md:h-48'
                                                        width={500}
                                                        height={500}
                                                    />

                                                    <a className="destination-overlay text-white text-decoration-none" href="">
                                                        <h5 className="text-white text-xl font-bold">{pkg.country}</h5>
                                                    </a>
                                                </div></>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}