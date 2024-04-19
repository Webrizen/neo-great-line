"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonial() {
    const testimonials = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique lectus a feugiat dictum. Nullam quis elit a ligula vehicula malesuada. Curabitur eget eros vitae sapien tristique dignissim. Aliquam convallis, sapien eu suscipit ultricies, ligula velit luctus est, nec pulvinar magna elit vel justo.",
            author: "Alice Johnson",
            company: "ABC Corporation",
            image: "https://placehold.co/1500x1000"
        },
        {
            content: "Vestibulum fermentum odio vitae erat aliquam, id bibendum nisl ultricies. Sed rhoncus euismod justo at pharetra. Ut ac nunc feugiat, posuere turpis non, tristique mauris. Nulla facilisi. Sed ullamcorper tempus mauris, ac placerat metus consectetur non. Proin id convallis lorem, ac tincidunt ipsum.",
            author: "Bob Smith",
            company: "XYZ Enterprises",
            image: "https://placehold.co/1500x1000"
        },
        {
            content: "Integer ullamcorper, lacus eget fermentum scelerisque, nisl libero porta nisi, at malesuada turpis quam nec nulla. Curabitur scelerisque mi ut nulla eleifend consequat. Phasellus at est at nulla fermentum varius. Nullam ut mi vel justo fringilla luctus ut non mauris.",
            author: "Emily Brown",
            company: "123 Industries",
            image: "https://placehold.co/1500x1000"
        },
        {
            content: "Duis auctor dui nec vehicula posuere. Proin consectetur, ligula vitae posuere volutpat, libero mauris vestibulum sapien, vel venenatis enim orci a purus. Vestibulum tincidunt fringilla urna. Nam mattis libero eu sapien accumsan, nec cursus urna convallis.",
            author: "David Wilson",
            company: "Acme Corporation",
            image: "https://placehold.co/1500x1000"
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
       <section className="py-20 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
                <div className="space-y-4 max-w-2xl">
                    <span className="text-blue-600 dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
                        Happy Clients
                    </span>
                    <h1 className="font-bold text-gray-800 dark:text-white text-3xl">Client’s Say About Us</h1>
                </div>
                <div className="relative">
                    <div className="flex md:items-stretch gap-10 lg:gap-14">
                        <div className="hidden md:flex md:w-1/2 lg:w-2/5 md:h-auto">
                            <img src={currentTestimonial.image} width={1900} height={1200} alt="Author Avatar" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1 flex flex-col space-y-6 md:space-y-12 lg:space-y-16 md:py-6 lg:py-8 md:h-auto md:justify-center">
                            <AnimatePresence exitBeforeEnter={false} mode="wait">
                                <motion.p className="text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300"
                                    key={currentTestimonialIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.5 }}
                                >
                                    {currentTestimonial.content}
                                </motion.p>
                            </AnimatePresence>
                            <div className="flex items-start gap-4">
                                <img src={currentTestimonial.image} width={1900} height={1200} alt="Author Avatar" className="w-12 h-12 rounded-full flex md:hidden" />
                                <div className="space-y-1 flex-1">
                                    <motion.h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.5, delay: 0.2 }}
                                    >
                                        {currentTestimonial.author}
                                    </motion.h2>
                                    <motion.p className="text-gray-600 dark:text-gray-400"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.5, delay: 0.4 }}
                                    >
                                        {currentTestimonial.company}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute md:right-0 md:bottom-6 lg:bottom-8 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg flex items-start gap-3 w-max mt-10 md:mt-0">
                        <button aria-label="Prev Button" className="outline-none p-2.5 rounded-md text-gray-700 dark:text-gray-300 transition ease-linear bg-gray-200 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-950" onClick={handlePrevTestimonial}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button aria-label="Next Button" className="outline-none p-2.5 rounded-md text-gray-700 dark:text-gray-300 transition ease-linear bg-gray-200 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-950" onClick={handleNextTestimonial}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
