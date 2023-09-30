"use client"
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';
import '../../../styles/contact.css'
import { BiSolidHome } from 'react-icons/bi';

const Contact = () => {
    const time = [
        {
            day: 'Monday', duration: '09am-8pm'
        },
        {
            day: 'Tuesday', duration: '09am-8pm'
        },
        {
            day: 'Wednesday', duration: '09am-8pm'
        },
        {
            day: 'Thursday', duration: '09am-8pm'
        },
        {
            day: 'Friday', duration: '09am-8pm'
        },
        {
            day: 'Saturday', duration: '09am-8pm'
        },
        {
            day: 'Sunday', duration: '09am-8pm'
        },
    ]
    return (
        <div>
            <Head>
                <title>Contact Us | Baundule Club</title>
            </Head>
            <div class=" page-header">
                <div class="container mx-auto">
                    <div class="flex flex-col items-center justify-center"
                        style={{
                            minHeight: '400px'
                        }}>
                        <h3 class="display-4 text-white uppercase mb-2">Contact</h3>
                        <div class="flex text-white">
                            <p class="m-0 uppercase">
                                <a class="text-white" href="/">Home</a>
                            </p>
                            <p class="px-3"> &gt; </p>
                            <p class="m-0 uppercase">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h6 className="text-lime-700 uppercase" style={{ letterSpacing: '5px' }}>Contact</h6>
                <h1 className='text-xl md:text-4xl font-bold '>Contact For Any Query</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='shadow hover:shadow-md rounded'>
                    <div className='flex justify-center'>
                        <Image
                            src={'/Assets/icon/home.png'}
                            alt=''
                            width={500}
                            height={500} />
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_xtvv8lb",
                "template_9oc1per",
                form.current,
                "nIQorTpjO39k1OKHh"
            )
            .then(
                (result) => {
                    setLoading(false)
                    toast.success('Your message sent')
                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                }
            );
    };
    return (
        <>
            <section className="mx-5 lg:mx-0 py-20 shadow-xl">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x gap-6">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className=""
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d543.0564134288818!2d90.43934814817825!3d23.703353120422125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQyJzExLjkiTiA5MMKwMjYnMjMuNSJF!5e0!3m2!1sen!2sbd!4v1684730247253!5m2!1sen!2sbd"
                    ></iframe>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                    >

                        <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
                            <input
                                name="user_name"
                                type="text"
                                placeholder="Your Name..."
                                class="w-full bg-transparent pb-2  border-b  placeholder-gray-300 border-lime-600 outline-none  invalid:border-red-500 transition border-l-4 border-l-lime-600 pl-3" />
                        </div>
                        <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
                            <input
                                name="user_subject"
                                type="text"
                                placeholder="Subject..."
                                class="w-full bg-transparent pb-2  border-b  placeholder-gray-300 border-lime-600 outline-none  invalid:border-red-500 transition border-l-4 border-l-lime-600 pl-3" />
                        </div>

                        <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-lime-500 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-500 before:transition before:duration-300">
                            <input
                                name="user_email"
                                type="email"
                                placeholder="Your email address..."
                                class="w-full bg-transparent pb-2  border-b  placeholder-gray-300 border-lime-600 outline-none  invalid:border-red-500 transition border-l-4 border-l-lime-600 pl-3" />
                        </div>

                        <label className="block">
                            <textarea
                                rows="3"
                                placeholder="Message..."
                                className="w-full bg-transparent pb-2  border-b  placeholder-gray-300 border-lime-600 outline-none  transition border-l-4 border-l-lime-600 pl-3"
                                name="message"
                                required
                            ></textarea>
                        </label>
                        <button type="submit" className="px-3 py-2 rounded text-white bg-lime-600 hover:bg-lime-800" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}