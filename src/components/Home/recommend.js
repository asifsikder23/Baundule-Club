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
        img: 'https://i.ibb.co/fnsmvZf/waterfall.jpg',
        title: 'Waterfall',
        subtitle: 'Charming'
    },
    {
        img: 'https://i.ibb.co/TbBYW3B/green.jpg',
        title: 'Green Tourism',
        subtitle: 'Attractive'
    },
    {
        img: 'https://i.ibb.co/KVPR7Kx/sea.jpg',
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
                        spaceBetween={25}
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
                                    <div className="w-full h-[177px] md:h-[280px] lg:h-[400px] xl:h-[500] mx-auto">
                                        <Image
                                            src={cat.img}
                                            alt=''
                                            className='w-full h-full object-cover'
                                            width={500}
                                            height={500}
                                        />
                                        <div className="image-overlay">
                                            <div className='md:mt-10 w-full'>
                                                <div className='bg-black bg-opacity-40 py-4 lg:py-5'>
                                                    <h1 className=''>{cat.subtitle}</h1>
                                                    <h2 className='font-semibold '>
                                                        {cat.title}
                                                    </h2>
                                                </div>
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
