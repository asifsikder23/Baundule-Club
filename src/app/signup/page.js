"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';

const Signup = () => {
    const title = 'Baundule Club'
    const desc = 'Welcome to Baundule Club, your passport to extraordinary adventures and seamless travel experiences. Discover the world with us as we curate unforgettable journeys, from breathtaking destinations to personalized itineraries. Whether you seek adventure, relaxation, or cultural immersion, let Baundule Club be your trusted travel companion. Explore, dream, and embark on your next adventure today!'

    return (
        <>
            <div className=''>
                <section className="bg-zinc-900">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                            <Image
                                alt="Night"
                                src="https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-80"
                                width={500}
                                height={500}
                            />

                            <div className="hidden lg:relative lg:block lg:p-12">

                                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                                    Welcome to <span className='md:text-5xl'> {title}</span>
                                </h2>

                                <p className="mt-4 leading-relaxed text-white/90">
                                    {desc}
                                </p>
                            </div>
                        </section>

                        <main
                            aria-label="Main"
                            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                        >
                            <div className="max-w-xl lg:max-w-3xl">
                                <section>
                                    <div className="p-4 rounded-md shadow sm:p-8 text-gray-100">
                                        <h2 className="mb-3 text-3xl font-semibold text-center">
                                            SignUp to your account
                                        </h2>
                                        <p className="text-sm text-center dark:text-gray-400">
                                            Already have account?
                                            <Link
                                                href={"/signin"}
                                                className="focus:underline hover:underline ml-3"
                                            >
                                                Signin here
                                            </Link>
                                        </p>
                                        <div className="my-6 space-y-4">
                                            <button
                                                // onClick={handleGoogleLogIn}
                                                aria-label="Login with Google"
                                                type="button"
                                                className="btn bg-lime-600 px-3 py-2 rounded w-full gap-3 flex items-center justify-center"
                                            >
                                                <BsGoogle />
                                                <p>SignUp with Google</p>
                                            </button>
                                        </div>
                                        <div className="flex items-center w-full my-4">
                                            <hr className="w-full dark:text-gray-400" />
                                            <p className="px-3 dark:text-gray-400">OR</p>
                                            <hr className="w-full dark:text-gray-400" />
                                        </div>
                                        <form
                                            // onSubmit={handleEmailPasswordSignUp}
                                            className="space-y-8 ng-untouched ng-pristine ng-valid"
                                        >
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="block text-sm">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="John Deo"
                                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm">Email address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="leroy@jenkins.com"
                                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <label className="text-sm">Password</label>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="*****"
                                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="w-full px3 py-2 rounded bg-lime-600">
                                                Sign up
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Signup;