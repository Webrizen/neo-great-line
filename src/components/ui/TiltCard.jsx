"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { InView } from "react-intersection-observer";

const TiltCard = ({ services }) => {
    return (
        <>
            {services.map((service, index) => (
                <TiltCardnew key={index} title={service.title} icon={service.icon} description={service.description} />
            ))}
        </>
    );
};

const iconRender = (val) => {
    switch (val) {
        case "default-ico":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                </svg>
            )
        default:
            return <>No Icon</>;
    }
}

const TiltCardnew = ({ title, icon, description }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [count, setCount] = useState(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <InView as="div" threshold={0.5}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative py-20 w-full rounded-xl bg-gradient-to-br from-gray-600 to-gray-700"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl"
                >
                    <div
                        style={{
                            transform: "translateZ(75px)",
                        }}
                        className="mx-auto text-5xl font-bold"
                    >
                        {iconRender(icon)}
                    </div>
                    <h2
                        style={{
                            transform: "translateZ(65px)",
                        }}
                        className="text-center text-xl text-balance"
                    >
                        {title || '...'}
                    </h2>
                    <p
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="text-center text-md text-balance"
                    >
                        {description || '...'}
                    </p>
                </div>
            </motion.div>
        </InView>
    );
};

export default TiltCard;