import React from 'react';
import '../../styles/services.css'
import Image from 'next/image';

const Services = () => {
    const services = [
        {
            title: 'Personalized Getaways',
            desc: 'Your dream vacation, your way. Our travel agency creates bespoke journeys to your preferred destinations, ensuring a trip as unique as you are.',
            img: 'https://i.ibb.co/5kbyQz2/confidence.png'
        },
        {
            title: 'Travel with Confidence',
            desc: 'Explore the world confidently with our expert advice. Our travel consultants offer local insights and insider tips for a worry-free adventure.',
            img: 'https://i.ibb.co/nkPwFhN/travel.png'
        },
        {
            title: 'Easy Booking, Dream Travel',
            desc: 'Booking your ideal getaway has never been easier. Discover and reserve flights, hotels, and activities effortlessly with our user-friendly platform.',
            img: 'https://i.ibb.co/Nxgr1Jx/vacation.png'
        }
    ]
    return (
        <>
            <div className="container mx-auto py-5">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-lime-700 uppercase" style={{ letterSpacing: '5px' }}>Services</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Tours & Travel Services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
                    {
                        services.map((service, i) => {
                            return (
                                <>
                                    <div className="service-item bg-white text-center p-4 md:p-10" key={i}>
                                        <Image
                                            src={service.img}
                                            alt=''
                                            className='mx-auto w-20 h-20'
                                            width={500}
                                            height={500} />
                                        <h5 className="my-2 text-lg font-bold">{service.title}</h5>
                                        <p className="m-0">{service.desc}</p>
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

export default Services;