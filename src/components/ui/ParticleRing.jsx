"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/utils/space";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ParticleRing = () => {
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
        <div className="relative">
            <Canvas
                camera={{
                    position: [4, -7.5, -5],
                }}
                style={{ height: "100vh" }}
                className="bg-slate-950"
            >
                <OrbitControls maxDistance={20} minDistance={10} />
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
            </Canvas>

            <section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full">
                <div className="min-h-max w-full bg-transparent relative overflow-x-hidden" ref={ref}>
                    <div className="absolute animate-first top-0 inset-x-0 h-64 flex items-start">
                        <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40">
                        </div>
                        <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40">
                        </div>
                    </div>
                    <div className="absolute animate-second dark:opacity-25 filter blur-3xl top-0 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 animate-blob">
                    </div>
                    <div className="absolute animate-third dark:opacity-25 filter blur-3xl top-0 bottom-0 my-auto -right-4 w-72 h-72 bg-gradient-to-r from-green-300 to-green-400 rounded-full opacity-80 animate-blob animation-delay-2000">
                    </div>
                    <div className="absolute animate-fourth dark:opacity-25 filter blur-3xl bottom-8 left-20 w-[500px] h-72 bg-gradient-to-r from-yellow-200 to-pink-300 rounded-full opacity-80 animate-blob animation-delay-4000">
                    </div>
                    <img src="/space-hero/6.png" alt="Hero-img" className='aspect-square w-[200px] h-[200px] move-up-down absolute left-[11%] top-[100px] z-50' />
                    <img src="/space-hero/9.png" alt="Hero-img" className='aspect-square w-[100px] h-[100px] move-up-down absolute right-[15%] bottom-[20%] z-50' />
                    <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                        <motion.h1
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInFromBottom}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight"
                        >
                            We <span className='bg-gradient-to-r from-rose-400 to-red-500 inline-block text-transparent bg-clip-text'>create</span>, we <span className='bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text'>design</span>, we <span className='bg-gradient-to-r from-emerald-500 to-emerald-900 inline-block text-transparent bg-clip-text'>develop</span> Modern tools.
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInFromBottom}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                        </motion.p>
                        <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
                            <motion.a
                                href='/'
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeInFromBottom}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Hire us now
                            </motion.a>
                            <motion.a
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeInFromBottom}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                href="/" className="flex items-center h-12 px-6 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-purple-700 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-800">
                                Learn more
                            </motion.a>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInFromTop}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeInLeft}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.4, duration: 0.7 }}
                                    className="w-10">
                                    <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="flex-1 space-y-1">
                                    <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                        High Quality Work
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeInLeft}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.4, duration: 0.7 }}
                                    className="w-10">
                                    <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="flex-1 space-y-1">
                                    <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                        Best Practices
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeInLeft}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.4, duration: 0.7 }}
                                    className="w-10">
                                    <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={flipIn}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="flex-1 space-y-1">
                                    <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                        24/7 Support
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const PointCircle = () => {
    const ref = useRef(null);

    useFrame(({ clock }) => {
        if (ref.current?.rotation) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
            {pointsOuter.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
        </group>
    );
};

const Point = ({ position, color }) => {
    return (
        <Sphere position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default ParticleRing;