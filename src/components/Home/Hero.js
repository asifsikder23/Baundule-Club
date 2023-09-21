"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const image = [
    {
        img: 'https://i.ibb.co/xz0TsKK/bg.png',
        content: 'Taking a break from your daily routine and exploring new environments can reduce stress and improve mental well-being.'
    },
    {
        img: 'https://i.ibb.co/ncWX1mZ/bg2.jpg',
        content: 'Traveling creates lasting memories and experiences that you can cherish for a lifetime. These memories often become some of your most treasured possessions.'
    },
    {
        img: 'https://i.ibb.co/ZGmCcsC/bg3.png',
        content: 'Travel exposes you to diverse cultures, traditions, and languages. It broadens your horizons and fosters cultural sensitivity and understanding.'
    },
];

const Hero = () => {
    return (
        <section className='-mt-7'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"

            >
                {image.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative">
                            <Image
                                src={img.img}
                                alt='dfgd'
                                className='w-full h-[250px] md:h-[400px] lg:h-[500px] xl:h-[550px]'
                                width={800}
                                height={800}
                            />
                             <div class="overlay"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
                                <p className="text-white md:text-xl lg:text-2xl xl:text-3xl w-[90%] md:w-[70%] text-center font-semibold mb-4">
                                    {img.content}
                                </p>
                                <button className="bg-[#7083ee] hover:bg-[#7083ee] text-white py-2 px-4 rounded-full">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
