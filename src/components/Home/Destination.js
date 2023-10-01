import Image from 'next/image';
import React from 'react';
import '../../styles/destination.css'

const Destination = () => {
    const images = [
        {
            img: 'https://i.ibb.co/hMs62gy/destination-1.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/vdo.mp4?alt=media&token=5f2fe225-4adc-4e31-ae55-8d8c0260b05a',
            country: 'Tanguar Haor',
        },
        {
            img: 'https://i.ibb.co/vYjqWmN/destination-2.jpg',
            vdo: 'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/bandorban.mp4?alt=media&token=e7d72224-7774-4f44-8e46-6b9c09ac6e77',
            country: 'Bandarban',
        },
        {
            img: 'https://i.ibb.co/Z8MTGsH/destination-3.jpg',
            vdo:'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/coxs.mp4?alt=media&token=4b350c0a-9ab6-4697-ab6e-c7c9a98a6004',
            country: 'Coxs Bazar',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/c3fGx3h/destination-4.jpg',
            vdo:'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/shreemangal.mp4?alt=media&token=bfc87ece-db4e-4d52-8da2-03f88502c39f',
            country: 'Sreemangal',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/F7mmTy2/destination-5.jpg',
            vdo:'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/rajshahi.mp4?alt=media&token=595e44cf-7ce0-496a-bf8b-b198b2a0bbc0',
            country: 'Rajshahi',
            cities: '100'
        },
        {
            img: 'https://i.ibb.co/6DG8NnC/destination-6.jpg',
            vdo:'https://firebasestorage.googleapis.com/v0/b/cineplanetvdo.appspot.com/o/dhaka.mp4?alt=media&token=cd96f48e-3013-4fc3-bdca-b928738a08dc',
            country: 'Dhaka',
            cities: '100'
        },
    ]
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
                                        {/* <Image
                                            src={img.img} alt=""
                                            className='w-full'
                                            width={500}
                                            height={500}
                                        /> */}
                                        <video width="640" height="360" muted autoPlay loop>
                                            <source src={img.vdo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                        <a className="destination-overlay text-white text-decoration-none" href="">
                                            <h5 className="text-white text-xl font-bold">{img.country}</h5>
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