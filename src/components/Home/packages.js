"use client"
import Image from 'next/image';
import { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';

import '../../styles/packages.css';
import Link from 'next/link';

const Packages = () => {
    const [displayedPackages, setDisplayedPackages] = useState(3);
    const loadMore = () => {
        setDisplayedPackages(pkg.length);
    };
    const pkg = [
        {
            id: 1,
            img: 'https://i.ibb.co/W2NrFDq/cover.jpg',
            location: 'Bisnakandi, Sylhet',
            duration: '2 Days',
            desc: 'Bisnakandi, conveniently situated near Sylhet on the India-Bangladesh, is a combination of green hills, clouds, a variety of stones and crystal-clear waters flowing from the north-eastern Meghalaya Mountains. Visitors can lie down on the rocks and relax or go for a peaceful swim.The Border Hut, which is also a market, is located at Bisnakandi’s -Bangladesh border. Although no set schedule is available, the hut is generally open every 4 days. Khasian vendors sell mountain fruit, clothes and cosmetics.',
            amount: 3500,
        },
        {
            id: 2,
            img: 'https://i.ibb.co/hV46NHG/Nafakhum.jpg',
            location: 'Thanchi-Nafakhum, Bandarban',
            duration: '4 Days',
            desc: 'The meaning of cows or buffalo rope ropes is called gain. In the Marma language, Khum means waterfall. A three-hour walk from Remakri is a wonderful waterfall, whose name is Nafakhum. A beautiful waterfall was created in the form of prakriti! The rainbow of colors by the sun, where the game ever! Nafkhum is the largest waterfall in Bangladesh, according to the calculation of water. There is such a beautiful waterfall in my country ... .where we are very few people know this waterfall.',
            amount: 7000,
        },
        {
            id: 3,
            img: 'https://i.ibb.co/hKV0xcT/cover.jpg',
            location: 'Saint Martin’s Island',
            duration: '3 Days',
            desc: 'Saint Martin’s, the one and only coral island of Bangladesh, is a small island measuring eight square kilometers. The visible landmass sinks during the tide. Alternatively called the pearl of the sea, it is about 10 km from the mainland at teknaf. The safest means of transport is the government-owned ferry which takes around two hours one way. Tourists have the option to spend a few hours and return the same day or stay for one or two days. Due to ferry’s timing, one and a half days tour is practical.',
            amount: 6500,
        },
        {
            id: 4,
            img: 'https://i.ibb.co/9HGfqsh/cover.jpg',
            location: 'Sajek-khagrachhari, Bandarban',
            duration: '2 Days',
            desc: 'Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in the Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati. Sajek is located in the verdant hills of Kasalong range of mountains amidst the serene and exotic beauty of nature. Lofty mountains, dense forest, sprawling grasslands and miles of hilly tracks feature the valley. The simple and basic indigenous lifestyle of local people is just fabulous for visitors to spend a day.',
            amount: 3500,
        },
        {
            id: 5,
            img: 'https://i.ibb.co/whL1r6D/cover.jpg',
            location: 'Coxs Bazar Sea Beach',
            duration: '2 Days',
            desc: 'Bisnakandi, conveniently situated near Sylhet on the India-Bangladesh, is a combination of green hills, clouds, a variety of stones and crystal-clear waters flowing from the north-eastern Meghalaya Mountains. Visitors can lie down on the rocks and relax or go for a peaceful swim.The Border Hut, which is also a market, is located at Bisnakandi’s -Bangladesh border. Although no set schedule is available, the hut is generally open every 4 days. Khasian vendors sell mountain fruit, clothes and cosmetics.',
            amount: 5000,
        },
        {
            id: 6,
            img: 'https://i.ibb.co/7jtRqFz/cover.jpg',
            location: 'Srimangal, Sylhet',
            duration: '2 Days',
            desc: 'Srimangal, the tea capital of Bangladesh, having most of the tea gardens of the country, is called  "The land of two leaves and a bud". The largest tea garden in the world is situated here. There are terraced tea gardens and pineapple, rubber, and lemon plantation. It is more beautiful in the rainy season to stay at Srimangal having the highest rainfall in Bangladesh and the place has a mystic look. A good number of luxury hotels including a 5-star hotel and resort are available here.',
            amount: 4500,
        },

    ]
    return (
        <>
            <div className="container mx-auto my-14">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-lime-700 uppercase" style={{ letterSpacing: '5px' }}>Packages</h6>
                    <h1 className='text-xl md:text-4xl font-bold '>Perfect Tour Packages</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-24 gap-10">
                    {
                        pkg.slice(0, displayedPackages).map((packages, i) => {
                            return (
                                <>
                                    <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg" key={i}>
                                        <Image
                                            alt="Office"
                                            src={packages.img}
                                            className="h-56 w-full object-cover"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="bg-white p-4">
                                            <div className='flex gap-1 items-center text-lg font-semibold'>
                                                <MdLocationPin className='text-lime-500' />
                                                <h1>{packages.location}</h1>
                                            </div>
                                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                                {packages.desc}
                                            </p>
                                            <div className="border-t mt-4 pt-4 flex justify-between items-center">
                                                <Link
                                                    href={`/packagedetails/${packages.id}`}
                                                    className="group inline-flex items-center gap-1 text-sm font-medium text-[#65A30D]"
                                                >
                                                    Find out more

                                                    <span
                                                        aria-hidden="true"
                                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                                    >
                                                        &rarr;
                                                    </span>
                                                </Link>
                                                <h5 className="m-0 text-lg font-semibold flex items-center">
                                                    <TbCurrencyTaka className='text-xl' /> {packages.amount}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className=''>
                    {displayedPackages < pkg.length && (
                        <div className="text-center mt-4">
                            <button
                                onClick={loadMore}
                                className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Packages;