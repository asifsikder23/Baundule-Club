import Image from 'next/image';
import React from 'react';
import '../../styles/destination.css'

const Destination = () => {
    const images = [
        {
            img: 'https://i.ibb.co/hMs62gy/destination-1.jpg',
            country: 'United State',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/vYjqWmN/destination-2.jpg',
            country: 'United Kingdom',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/Z8MTGsH/destination-3.jpg',
            country: 'Australia',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/c3fGx3h/destination-4.jpg',
            country: 'India',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/F7mmTy2/destination-5.jpg',
            country: 'South Africa',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/6DG8NnC/destination-6.jpg',
            country: 'Indonesia',
            cities: '100'
        },
    ]
    return (
        <>
            <div className="container mx-auto py-5">
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
                                        <Image
                                            src={img.img} alt=""
                                            width={500}
                                            height={500}
                                        />

                                        <a className="destination-overlay text-white text-decoration-none" href="">
                                            <h5 className="text-white text-xl font-bold">{img.country}</h5>
                                            <span className='text-lg'>{img.cities} Cities</span>
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