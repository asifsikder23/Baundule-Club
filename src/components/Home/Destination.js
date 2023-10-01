"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../../styles/destination.css'

const Destination = () => {
    const images = [
        {
            img: 'https://i.ibb.co/N9PmFJn/tanguar.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Ftanguar.mp4?alt=media&token=a7005ee8-c261-4775-becf-4c145a5cd53d',
            country: 'Tanguar Haor',
        },
        {
            img: 'https://i.ibb.co/kcd0wtm/bandarban.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Fbandorban.mp4?alt=media&token=9b2fb42b-d8ee-4072-8f86-12f2b1ebf4e6',
            country: 'Bandarban',
        },
        {
            img: 'https://i.ibb.co/XV7V6QT/cox.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Fcox.mp4?alt=media&token=e2c8c8c6-4e0f-4527-a85e-1572c3b285ee',
            country: 'Coxs Bazar',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/wYZdQmY/shree.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Fshreemangal.mp4?alt=media&token=b12252ed-ea51-46f1-9e84-f25ecc9c44f9',
            country: 'Shreemangal',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/7R1SJtw/rajshahi.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Frajshahi.mp4?alt=media&token=4d6e2b08-650e-4565-9fd6-af54eb3b43c9',
            country: 'Rajshahi',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/Sd8xxgj/dhaka.png',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo%2Fdhaka.mp4?alt=media&token=54424d1b-cf83-44ad-a4be-277270bcad5f',
            country: 'Dhaka',
            cities: '100'
        },
    ]
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className="container mx-auto my-14">
                <div className="text-center my-5 pb-3">
                    <h6 className=" uppercase text-lime-700" style={{ letterSpacing: '5px' }}>Destination</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Explore Top Destination</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
                    {
                        images.map((img, i) => {
                            return (
                                <>
                                    <div className="destination-item relative overflow-hidden mb-2" key={i}>

                                        {showVideo ? (
                                            <video width="640" height="360" muted autoPlay loop>
                                                <source src={img.vdo} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <div className='h-[220px]'>
                                                <Image
                                                    src={img.img}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        )}

                                        <a className="destination-overlay text-white text-decoration-none" href="">
                                            <h5 className="text-white text-xl font-bold uppercase">{img.country}</h5>
                                        </a>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Destination;