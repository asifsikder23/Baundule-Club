import React from 'react';
import '../../styles/category.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const img = [
    {
        img: 'https://i.ibb.co/0cQNNBS/waterfalls.jpg',
        title: 'Waterfall',
        subtitle: 'Charming'
    },
    {
        img: 'https://i.ibb.co/DpdYbsX/green.jpg',
        title: 'Green Tourism',
        subtitle: 'Attractive'
    },
    {
        img: 'https://i.ibb.co/f9MyV2s/beach.jpg',
        title: 'Beach',
        subtitle: 'Beautiful'
    },
    {
        img: 'https://i.ibb.co/9vZV9cv/food.jpg',
        title: 'Food',
        subtitle: 'Tasty'
    },
    {
        img: 'https://i.ibb.co/PzFHHc6/heritage.jpg',
        title: 'Heritage Tour',
        subtitle: 'Historical'
    },
    {
        img: 'https://i.ibb.co/pdxh1y7/luxury.jpg',
        title: 'Luxury',
        subtitle: 'Comfortable'
    },
]


const Category = () => {
    return (
        <>
            <section className='container mx-auto my-14'>
                <div className="text-center my-5 pb-3">
                    <h6 className=" uppercase text-lime-700" style={{ letterSpacing: '5px' }}>POPULAR IN BANGLADESH</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Our Recommendations</h1>
                </div>
                <div className=''>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="mySwiper"
                    >
                        {img.map((cat, i) => (
                            <SwiperSlide key={i}>
                                <Link href={'#'}>
                                    <div className="lg:w-96 lg:h-96 mx-auto">
                                        <Image
                                            src={cat.img}
                                            alt=''
                                            className='w-full h-full object-cover'
                                            width={500}
                                            height={500}
                                        />
                                        <div className="image-overlay p-4">
                                            <div className='md:mt-10'>
                                                <h1 className=''>{cat.subtitle}</h1>
                                                <h2 className='font-semibold text-lg md:text-xl'>
                                                    {cat.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
export default Category;
