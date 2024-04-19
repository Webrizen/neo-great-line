"use client";
import React from "react";
import {
    motion
} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Action() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    // Animation variants
    const fadeInFromTop = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInFromBottom = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInFromRight = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    const flipIn = {
        hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
        visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="py-24 dark:bg-gray-950" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
                    <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                            <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                            <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                            <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                        </div>
                    </div>
                    <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
                        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                            <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                            <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                            <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInFromTop}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
                        <motion.h1
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInLeft}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
                            Quick Start your <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">Strategic Digital</span> Marketing Campaing
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInLeft}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                            delectus architecto ullam earum
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInLeft}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Get in touch
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
