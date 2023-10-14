"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import '../../../../styles/pkgdetails.css'
import { BsBusFront, BsGlobe2, BsInfoCircle } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { MdLocationPin, MdOutlineDescription, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { BiPurchaseTag, BiSolidLocationPlus, BiSolidTime, BiTimer } from 'react-icons/bi';
import { GiCheckMark, GiClick } from 'react-icons/gi';
import { AiOutlineArrowDown, AiOutlineForm } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const PackagesDetails = () => {
    const params = useParams();
    const id = params.id;

    const { data: details } = useQuery("details", async () => {
        const response = await axios.get(`http://localhost:5000/packages/${id}`);
        return response.data;
    });

    const [showModal, setShowModal] = useState(false);
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
                <div className="md:flex gap-5">
                    <div className="md:w-2/3 box">
                        <Accord details={details} />
                    </div>
                    <div className="md:w-1/3 box sticky top-20">
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
                        <hr className='my-3' />
                        <button className='btn text-center w-full bg-lime-500 py-2 rounded-lg'
                            onClick={() => setShowModal(true)}>
                            Book Now
                        </button>
                        <Modal showModal={showModal} setShowModal={setShowModal} details={details} />
                    </div>
                </div>

            </div>

        </>
    );
};

export default PackagesDetails;

const Modal = ({ showModal, setShowModal, details }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <div>
                                        <h3 className="text-3xl font-semibold text-slate-950">
                                            {details?.location}
                                        </h3>
                                        <p>{details?.amount}</p>
                                    </div>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                    </button>
                                </div>
                                {/*body*/}
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 relative p-6 flex-auto">
                                    <div class="md:col-span-5">
                                        <label for="full_name">Full Name</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="email">Email Address</label>
                                        <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                                    </div>

                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button

                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-40 backdrop-blur-md transition-all ease-in fixed inset-0 z-40 bg-gray-700"></div>
                </>
            ) : null
            }
        </>
    )
}

const Accord = () => {
    const details = [
        {
            title: 'BISNAKANDI, SYLHET',
            members: '10-30',
            amount: 3500,
            information: [
                {
                    desc: 'Imagine exploring the tourist spots of the worlds largest sea beach, Coxs Bazar in a double-decker tourist bus. Having the wide ocean view on one side and hill view on the other, this tour is an excellent opportunity for you to enjoy an entire day while fulfilling a major portion of your Coxs Bazar checklist. Driving through the iconic marine drive, Aquaholic Tourist Caravan offers you a stoppage at every spot to hop around comfortably. This tour also comes with special meal services, a mini library, washroom and refreshments - all inside the tourist bus! Overall, this unique experience of roaming around and visiting spots in a double-decker tourist bus is definitely going to be one of the activities to cherish with your friends or family in Coxs Bazar.'
                }
            ],
            pickup: 'Ground Floor, Motel Upal, Shaibal Road, Coxs Bazar',
            duration: 1,
            inorexclu: [
                {
                    in: [
                        'All Entry Tickets of Hopping Destinations',
                        'Welcome Breakfast',
                        'Lunch Platter',
                        'Evening Snacks',
                        'Washroom',
                        'Library',
                        'WIFI',
                        'Guide',
                        'Wrist band',
                        'First Aid Kit (In case of emergency)'
                    ],
                    out: [
                        'Personal expenses',
                        'Anything else that isnt mentioned on Inclusions'
                    ]
                }
            ],
            description: [
                {
                    desc: 'Aquaholic Tourist Caravan is the first hop-on hop-off service in Bangladesh. For the first time in Bangladesh, it brings to you the opportunity to experience the majestic aura of the Marine Drive road in such a unique setting. The travelers will be starting for the day long tour at 09:00 AM. The daylong will be covering all the spots of Marine Drive as you are entertained with fantastic meals on board. The travelers will be dropped-off at Kolatoli at 06:00 PM.',
                    facilitated: [
                        'Washroom',
                        'Kitchen',
                        'Library',
                        'CC Camera Surveillance',
                        'Skilled Guide',
                        'Experienced Chef'
                    ],
                    hopdestination: [
                        'Patuartak beach',
                        'Shamlapur Hill View Beach',
                        'Teknaf Beach',
                        'Sabrang Zero Point'
                    ],
                    food: [
                        {
                            welcome: 'Sandwich, Coconut Water, Apple, Mineral Water',
                            lunch: 'Chicken Fried Rice, Cashew Nut Salad, Vegetable, Masala Chicken, Cold Drinks, Mineral Water',
                            evening: 'Fried Chicken, Bun, French Fry, Sauce, Green Tea, Mineral Water'
                        }
                    ]
                }
            ],
            additional: [
                'Tickets of Aquaholic Tourist Caravan are highly dependent on the availability. GoZayaan will issue tickets that are available and does not promise to provide any specific seat(s) for a booking.',
                'Confirmation will be received at the time of booking',
                'Children must be accompanied by an adult',
                'Face masks are required for travelers in public areas',
                'Social distancing is enforced throughout the experience',
                'Due to maintenance work on Rezu khal Bridge (15 km from kolatoli) Aquaholic Tourist Caravan will provide Special transportation service till the bridge. The remaining distance of the sixty-five (65) km will be facilitated by the Caravan.'
            ],
            tips: [
                'Carry drinking water. Stay hydrated, travel healthy.',
                'It is advised to carry a set of fresh clothes for the beach.',
                'Always be respectful of the rules and guidelines of the tourist spots.',
                'Please do not litter. Use a polybag as a portable trash bin.'
            ]
        }
    ]
    return (
        <>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <BsGlobe2 /> <p className='font-bold text-lg'>Information</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4  ease duration-500">
                            {item.information.map((info, i) => (
                                <p key={i}>{info.desc}</p>
                            ))}
                            <div className='mb-3'>
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
                                                <GiClick />
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
                                                <AiOutlineForm />
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                                <p class="leading-relaxed">Then fill up the form and submit.</p>
                                            </div>
                                        </div>
                                        <div class="flex relative pb-12">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                <RiContactsFill />
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
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <MdOutlineDescription /> <p className='font-bold text-lg'>Description</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 ml-6">
                            {
                                item.description.map((desc, i) => {
                                    return (
                                        <div key={i}>
                                            <p>
                                                {desc.desc}
                                            </p>
                                            <div>
                                                <p className='font-semibold my-2'>
                                                    The Caravan is facilitated with:
                                                </p>
                                                <ul className='list-disc ml-5'>
                                                    {desc.facilitated.map((facility, k) => (
                                                        <li key={k} className='list-outside'>
                                                            {facility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='font-semibold my-2'>
                                                    Hopping Destinations:
                                                </p>
                                                <ul className='list-disc mb-3 ml-5'>
                                                    {desc.hopdestination.map((hopping, k) => (
                                                        <li key={k} className='list-outside'>
                                                            {hopping}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='font-semibold my-2'>
                                                    Complementary Food Menu:
                                                </p>
                                                <ul className='list-disc mb-3 ml-5'>
                                                    {desc.food.map((menu, k) => (
                                                        <li key={k} className='list-outside'>
                                                            <span className='underline'>Welcome Snacks</span>:  {menu.welcome}
                                                        </li>
                                                    ))}
                                                    {desc.food.map((menu, k) => (
                                                        <li key={k} className='list-outside'>
                                                            <span className='underline'>Lunch Platter</span>:  {menu.lunch}
                                                        </li>
                                                    ))}
                                                    {desc.food.map((menu, k) => (
                                                        <li key={k} className='list-outside'>
                                                            <span className='underline'>Evening Snacks</span>:  {menu.evening}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <MdOutlineTipsAndUpdates /> <p className='font-bold text-lg'>Travel Tips</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 ml-6">
                            <div className='mb-3'>
                                <ul className='list-disc ml-5'>
                                    {item.tips.map((tip, k) => (
                                        <li key={k} className='list-outside'>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <BiPurchaseTag /> <p className='font-bold text-lg'>Inclusion & Exclusion</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
                            <div className='mb-3'>
                                <div className='list-disc ml-5'>
                                    {item.inorexclu.map((into, k) => (
                                        <div key={k}>
                                            <ul className=''>
                                                {into.in.map((enter, j) => (
                                                    <li key={j} className='flex items-center gap-3'>
                                                        <GiCheckMark className='text-green-600' />
                                                        {enter}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className=''>
                                                {into.out.map((outt, j) => (
                                                    <li key={j} className='flex items-center gap-3'>
                                                        <RxCross2 className='text-red-600' />
                                                        {outt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <BiSolidLocationPlus /> <p className='font-bold text-lg'>Pick Up Location</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 ml-6">
                            <p className='mb-3'><span className='font-bold'>Pick Up: </span>{item.pickup}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <BiTimer /> <p className='font-bold text-lg'>Duration</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 ml-6">
                            <p className='mb-3'>
                                <span className='font-bold'>Timing Duration: </span>
                                {item.duration <= 1 ? `${item.duration} Day` : `${item.duration} Days`}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded overflow-hidden w-full">
                {details.map((item, index) => (
                    <div key={index} className="group outline-none accordion-section border-b" tabIndex="1">
                        <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="transition ease duration-500">
                                <div className='flex items-center gap-2'>
                                    <BsInfoCircle /> <p className='font-bold text-lg'>Additional Information</p>
                                </div>
                            </div>
                            <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500 ml-6">
                            <div className='mb-3'>
                                <ul className='list-disc ml-5'>
                                    {item.additional.map((addinfo, k) => (
                                        <li key={k} className='list-outside'>
                                            {addinfo}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                <h2 id="accordion-color-heading-1">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                        <span>What is Flowbite?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-2">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-3">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                        <span>What are the differences between Flowbite and Tailwind UI?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}