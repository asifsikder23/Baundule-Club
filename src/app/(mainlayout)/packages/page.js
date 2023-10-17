"use client"
import { FormControl, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useQuery, useQueryClient } from 'react-query';
import '../../../styles/packages.css';


const Packages = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerpage, setItemsPerpage] = useState(3)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDuration, setSelectedDuration] = useState(null);

    const { data: totalcount } = useQuery("totalpackagecount", async () => {
        const response = await axios.get("https://baundule-club-server.vercel.app/totalpackagecount");
        return response.data;
    });

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const params = {
                page: currentPage,
                pageSize: itemsPerpage,
            };

            if (selectedDuration !== null) {
                params.duration = selectedDuration;
            }

            const response = await axios.get('https://baundule-club-server.vercel.app/allpackages', {
                params,
            });

            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };



    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerpage, selectedDuration]);

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
            <Pkg data={data} isLoading={isLoading} totalPkg={totalPkg} selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />

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

const Pkg = ({ data, isLoading, totalPkg, selectedDuration, setSelectedDuration }) => {
    const durations = [
        { value: 1, label: '1 day' },
        { value: 2, label: '2 days' },
        { value: 3, label: '3-4 days' },
        { value: 4, label: '5+ days' },
    ];
    const division = [
        { value: 1, label: 'Dhaka' },
        { value: 2, label: 'Chittagong' },
        { value: 3, label: 'Barisal' },
        { value: 4, label: 'Khulna' },
        { value: 5, label: 'Rajshahi' },
        { value: 6, label: 'Rangpur' },
        { value: 7, label: 'Sylhet' },
        { value: 8, label: 'Mymensingh' },
    ];
    return (
        <>
            <div className="container mx-auto lg:flex gap-5 my-10 h-full">
                <div className="lg:w-1/4 shadow-lg rounded border p-5 h-full lg:sticky top-20">
                    <Filtering totalPkg={totalPkg} durations={durations} selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} division={division} />
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
                                                <article className="md:flex bg-white transition hover:shadow-xl mb-5" key={i}>
                                                    <div className="hidden md:block rotate-180 p-2 [writing-mode:_vertical-lr]">
                                                        <time
                                                            datetime="2022-10-10"
                                                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                                        >
                                                            <span>{pkg.amount} TK</span>
                                                            <span className="w-px flex-1 bg-gray-900/10"></span>
                                                            <span>{pkg.duration} Days</span>
                                                        </time>
                                                    </div>

                                                    <div className="sm:basis-56">
                                                        <Image
                                                            alt="Guitar"
                                                            src={pkg.coverimg}
                                                            className="aspect-square h-48 md:h-full w-full object-cover"
                                                            width={500}
                                                            height={500}
                                                        />
                                                    </div>

                                                    <div className="flex flex-1 flex-col justify-between">
                                                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                                            <a href="#">
                                                                <h3 className="font-bold uppercase text-gray-900">
                                                                    {pkg.location}
                                                                </h3>
                                                            </a>

                                                            <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                                                                {pkg.description.map(desc => desc.desc)}
                                                            </p>
                                                        </div>

                                                        <div className="sm:flex sm:items-end sm:justify-end">
                                                            <Link
                                                                href={`/packagedetails/${pkg._id}`}
                                                                className="block bg-lime-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-lime-400"
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

const Filtering = ({
    totalPkg,
    durations,
    selectedDuration,
    setSelectedDuration,
    division
}) => {
    const handleShowAllDataChange = (event) => { }

    const [age, setAge] = useState('');
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedLabel = division.find(item => item.value === selectedValue)?.label;
        setSelected(selectedLabel)
        setAge(selectedValue);
    };

    const clearDivision = () => {
        setSelected('');
        setAge('');
        handleShowAllDataChange();
    };

    return (
        <>
            <p className='mb-3'>Packages: {totalPkg} Packages found</p>
            <hr />
            <div>
                <p className='my-3 font-bold'>Filter type :</p>
                <div className='flex items-center'>
                    {selectedDuration ? (
                        selectedDuration > 1 ? (
                            <>
                                <div className='px-3 py-1 bg-red-500 text-white rounded-lg cursor-pointer flex items-center gap-1 mb-3' onClick={() => {
                                    setSelectedDuration(null);
                                    handleShowAllDataChange({ target: { checked: true } });
                                }}><p><RxCross2 /></p><p>{selectedDuration} Days</p></div><span className='mx-2'>,</span>
                            </>
                        ) : (
                            <>
                                <div className='px-3 py-1 bg-red-500 text-white rounded-lg cursor-pointer flex items-center gap-1 mb-3' onClick={() => {
                                    setSelectedDuration(null);
                                    handleShowAllDataChange({ target: { checked: true } });
                                }}><p><RxCross2 /></p><p>{selectedDuration} Day</p></div><span className='mx-2'>,</span>
                            </>
                        )
                    ) : (
                        <></>
                    )}
                    {
                        selected ?
                            <>
                                <div className='px-3 py-1 bg-red-500 text-white rounded-lg cursor-pointer flex items-center gap-1 mb-3' onClick={clearDivision}><p><RxCross2 /></p><p>{selected}</p></div>
                            </>
                            : (
                                <></>
                            )}
                </div>
                <hr />

            </div>
            <div className="py-4">
                <h2 className="text-lg font-semibold mb-2">Select Travel Duration:</h2>
                <div className="space-y-2">
                    {durations.map((duration) => (
                        <label key={duration.value}>
                            <input
                                type="radio"
                                name="duration"
                                id={`duration-${duration.value}`}
                                value={duration.value}
                                checked={duration.value === selectedDuration}
                                onChange={() => {
                                    handleShowAllDataChange({ target: { checked: false } });
                                    setSelectedDuration(duration.value);
                                }}
                            />
                            <span>{duration.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <hr />
            <div className="py-4">
                <h2 className="text-lg font-semibold mb-2">Select Division:</h2>
                <div className="space-y-2">
                    <FormControl sx={{ width: '100%' }} size="small">
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            {division.map(item => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label} Division
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>

        </>
    );
};

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
                    Showing {startIndex} to {endIndex} of {totalPkg} Results
                </p>

            </div>
            <div className="flex select-none space-x-1 text-gray-700 my-5 md:my-0">
                <button onClick={goToPreviousPage} className={`rounded-md bg-gray-200 px-3 py-1 md:px-4  md:py-2 transition duration-300 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-400'
                    } ${currentPage === 1 ? 'opacity-50' : ''}`}
                    disabled={currentPage === 1}> Previous </button>
                {
                    pageNumber.map(number => <button onClick={() => setCurrentPage(number)} className={`rounded-md ${isActive(number) ? 'bg-gray-400' : 'bg-gray-200'} px-3 py-1 md:px-4 md:py-2 transition duration-300 hover:bg-gray-400`} key={number}>{number}</button>)
                }
                <button onClick={goToNextPage} className={`rounded-md bg-gray-200 px-3 py-1 md:px-4  md:py-2 transition duration-300 ${currentPage === pageNumber.length ? 'cursor-not-allowed' : 'hover:bg-gray-400'
                    } ${currentPage === pageNumber.length ? 'opacity-50' : ''}`}
                    disabled={currentPage === pageNumber.length}> Next </button>
            </div>
        </div>
    );
}