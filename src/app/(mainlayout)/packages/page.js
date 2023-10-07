"use client"
import React, { useEffect, useState } from 'react';
import '../../../styles/packages.css'
import Image from 'next/image';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Link from 'next/link';

const Packages = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerpage, setItemsPerpage] = useState(3)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:5000/allpackages?page=${currentPage}&pageSize=${itemsPerpage}`);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerpage]);

    const { data: totalcount, } = useQuery("totalpackagecount", async () => {
        const response = await axios.get("http://localhost:5000/totalpackagecount");
        return response.data;
    });
    const totalPkg = totalcount?.totalpackagecount

    const totalPages = Math.ceil(totalPkg / itemsPerpage)
    const pageNumber = totalPages >= 0 ? [...Array(totalPages).keys()].map(page => page + 1) : [];


    const handleItemsPerPageChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value);
        setItemsPerpage(selectedItemsPerPage);
        setCurrentPage(1);
    };

    const queryClient = useQueryClient();
    queryClient.invalidateQueries('package, totalpackage');

    return (
        <>
            <Hero />
            <Pkg data={data} isLoading={isLoading} totalPkg={totalPkg} />

            <div className='container mx-auto mb-10'>
                <Pagination pageNumber={pageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} handleItemsPerPageChange={handleItemsPerPageChange} setItemsPerpage={setItemsPerpage} itemsPerpage={itemsPerpage} totalPages={totalPages} totalPkg={totalPkg} />
            </div>

        </>
    );
};

export default Packages;

const Hero = () => {
    return (
        <>
            <div className="page-header -mt-7">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center"
                        style={{
                            minHeight: '400px'
                        }}>
                        <h3 className="display-4 text-white uppercase mb-4">Packages</h3>
                        <div className="w-3/4">
                            <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-1 mb-5 sticky" style={{ top: '5px' }}>
                                <input className="font-bold uppercase rounded-full w-full py-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />
                                <div className="bg-gray-600 p-2 hover:bg-lime-400 cursor-pointer  rounded-full">
                                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Pkg = ({ data, isLoading, totalPkg }) => {
    const durations = [
        { id: 1, label: '1 day' },
        { id: 2, label: '2 days' },
        { id: 3, label: '3-4 days' },
        { id: 4, label: '5+ days' },
    ];


    const [checkedItems, setCheckedItems] = useState({
        duration: {},
    });
    return (
        <>
            <div className="container mx-auto lg:flex gap-5 my-10">
                <div className="lg:w-1/4 shadow-lg rounded border p-5 h-full lg:sticky top-20">
                    <Filtering totalPkg={totalPkg} durations={durations} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                </div>
                <div className="lg:w-3/4 shadow-lg rounded border p-5 h-full">
                    {
                        isLoading ?
                            <>
                                <Loader />
                            </>
                            :
                            <>
                                {
                                    data.map((pkg, i) => {
                                        return (
                                            <>
                                                <article class="md:flex bg-white transition hover:shadow-xl mb-5 sticky top-20" key={i}>
                                                    <div class="hidden md:block rotate-180 p-2 [writing-mode:_vertical-lr]">
                                                        <time
                                                            datetime="2022-10-10"
                                                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                                        >
                                                            <span>{pkg.amount} TK</span>
                                                            <span class="w-px flex-1 bg-gray-900/10"></span>
                                                            <span>{pkg.duration}</span>
                                                        </time>
                                                    </div>

                                                    <div class="sm:basis-56">
                                                        <Image
                                                            alt="Guitar"
                                                            src={pkg.img}
                                                            class="aspect-square h-48 md:h-full w-full object-cover"
                                                            width={500}
                                                            height={500}
                                                        />
                                                    </div>

                                                    <div class="flex flex-1 flex-col justify-between">
                                                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                                            <a href="#">
                                                                <h3 class="font-bold uppercase text-gray-900">
                                                                    {pkg.location}
                                                                </h3>
                                                            </a>

                                                            <p class="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                                                                {pkg.desc}
                                                            </p>
                                                        </div>

                                                        <div class="sm:flex sm:items-end sm:justify-end">
                                                            <Link
                                                                href={`/packagedetails/${pkg._id}`}
                                                                class="block bg-lime-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-lime-400"
                                                            >
                                                                Visit here
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </article>
                                            </>
                                        )
                                    })
                                }
                            </>
                    }
                </div>

            </div>

        </>
    )
}

const Filtering = ({ totalPkg, durations, checkedItems, setCheckedItems }) => {
    const checkDuration = checkedItems.duration

    const handleCheckboxChange = (id, filterType) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [filterType]: {
                ...prevState[filterType],
                [id]: !prevState[filterType][id],
            },
        }));
    };

    return (
        <>
            <p>Packages: {totalPkg} Packages found</p>
            <p className='py-3 font-semibold'>Filter By</p>
            <p>
                {checkDuration.length > 0 ? (
                    <>{checkDuration.join(', ')} days</>
                ) : (
                    <></>
                )}
            </p>
            <hr />
            <div className="py-4">
                <h2 className="text-lg font-semibold mb-2">Select Travel Duration:</h2>
                <div className="space-y-2">
                    {durations.map((option) => (
                        <label key={option.id} className="flex items-center">
                            <input
                                type="checkbox"
                                value={option.id}
                                checked={checkedItems['duration'][option.id] || false}
                                onChange={() => handleCheckboxChange(option.id, 'duration')}
                                className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
                            />
                            <span className="ml-2 cursor-pointer">{option.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <hr />
        </>
    )
}
const Loader = () => {
    return (
        <>
            <article className="md:flex bg-white transition shadow hover:shadow-xl mb-5">
                <div className="hidden md:block rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                        <div className="bg-gray-300 h-5 w-12 animate-pulse"></div>
                        <div className="w-px flex-1 bg-gray-900/10"></div>
                        <div className="bg-gray-300 h-5 w-12 animate-pulse"></div>
                    </div>
                </div>

                <div className="sm:basis-56">
                    <div className="aspect-square h-48 md:h-full w-full bg-gray-300 animate-pulse"></div>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <div className="bg-gray-300 h-6 w-3/4 animate-pulse"></div>
                        <div className="bg-gray-300 h-4 mt-2 w-5/6 animate-pulse"></div>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <div className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 animate-pulse">
                            Loading...
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

const Pagination = ({ pageNumber, setCurrentPage, currentPage, itemsPerpage, handleItemsPerPageChange, totalPages, totalPkg }) => {
    const isActive = (number) => number === currentPage;

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < pageNumber.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    const option = [3, 5, 10]

    const startIndex = (currentPage - 1) * itemsPerpage + 1;
    const endIndex = Math.min(currentPage * itemsPerpage, totalPkg);
    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center gap-5'>
                <select
                    value={itemsPerpage}
                    onChange={handleItemsPerPageChange}
                    className="py-1 px-3 rounded-md bg-gray-200 text-gray-700  border-none"
                >
                    {
                        option.map(options => (
                            <option value={options} key={options}>Show: {options}</option>
                        ))
                    }
                </select>
                <p>
                    {currentPage === totalPages
                        ? `Showing ${totalPkg} of ${totalPkg} Results`
                        : `Showing ${startIndex} to ${endIndex} of ${totalPkg} Results`
                    }
                </p>

            </div>
            <div class="flex select-none space-x-1 text-gray-700 my-5 md:my-0">
                <button onClick={goToPreviousPage} class={`rounded-md bg-gray-200 px-3 py-1 md:px-4  md:py-2 transition duration-300 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-400'
                    } ${currentPage === 1 ? 'opacity-50' : ''}`}
                    disabled={currentPage === 1}> Previous </button>
                {
                    pageNumber.map(number => <button onClick={() => setCurrentPage(number)} class={`rounded-md ${isActive(number) ? 'bg-gray-400' : 'bg-gray-200'} px-3 py-1 md:px-4 md:py-2 transition duration-300 hover:bg-gray-400`} key={number}>{number}</button>)
                }
                <button onClick={goToNextPage} class={`rounded-md bg-gray-200 px-3 py-1 md:px-4  md:py-2 transition duration-300 ${currentPage === pageNumber.length ? 'cursor-not-allowed' : 'hover:bg-gray-400'
                    } ${currentPage === pageNumber.length ? 'opacity-50' : ''}`}
                    disabled={currentPage === pageNumber.length}> Next </button>
            </div>
        </div>
    );
}