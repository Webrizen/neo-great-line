"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Cosmic Insights",
        description:
            "Embark on an exhilarating journey through the vast expanse of your data universe with our cutting-edge analytics tools. Dive deep into the cosmic abyss of information and emerge with valuable insights that illuminate new pathways to success. Uncover hidden patterns, trends, and opportunities that propel your business to unprecedented heights of growth and innovation.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img
                    src="/cosmic.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        ),
    },
    {
        title: "Intergalactic Collaboration",
        description:
            "Break through the barriers of time and space with our revolutionary collaboration platform. Whether your team is scattered across galaxies or working from different corners of the globe, our integrated communication and project management tools unite them in a seamless flow of ideas, creativity, and productivity. Forge alliances, share knowledge, and achieve stellar results together.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <img
                    src="/intergalactic.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        ),
    },
    {
        title: "Nebula Security",
        description:
            "Shield your data from the cosmic storms of cyber threats with our impenetrable security fortress. Our advanced encryption technology and multi-layered defense mechanisms stand guard against intruders, ensuring that your sensitive information remains safe and secure. Rest easy knowing that your data is protected by the highest standards of security in the galaxy.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <img
                    src="/nebula.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        ),
    },
    {
        title: "Meteoric Scalability",
        description:
            "Launch your business into orbit with our infinitely scalable platform. Whether you're a fledgling startup or an established enterprise, our flexible architecture and robust infrastructure provide the propulsion you need to soar to new heights of success. Scale effortlessly, adapt quickly, and conquer the cosmos with confidence.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img
                    src="/meteoric.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        ),
    },
    {
        title: "Celestial Support",
        description:
            "Navigate the cosmic complexities of technology with the unwavering support of our stellar team. From the moment you embark on your journey with us, our dedicated support specialists stand ready to assist you every step of the way. Whether you need troubleshooting, guidance, or just a friendly voice in the void of space, we're here to ensure your success reaches new celestial heights.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img
                    src="/celestial.png"
                    alt="illustration"
                    width={1800}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        ),
    },
];

export default function Services() {
    return (
        <section className="w-full min-h-screen bg-gray-950">
            <div className="relative">
                <div className="flex items-center align-center text-center w-full flex-row absolute inset-x-0">
                    <div className="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
                </div>
                <div className="w-full relative overflow-hidden h-px bg-gradient-to-r from-gray-800 via-primary-400 to-gray-800 max-w-5xl mx-auto">                    
                </div>
            </div>
            <StickyScroll content={content} />
        </section>
    )
}
