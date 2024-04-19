"use client";
import TiltCard from "@/components/ui/TiltCard";
import React from "react";

const services = [
    {
        id: 1,
        title: "Service name 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico",
    },
    {
        id: 2,
        title: "Service name 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    },
    {
        id: 3,
        title: "Service name 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    },
    {
        id: 4,
        title: "Service name 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    }
]

export default function Services() {
    return (
        <section className="py-32 min-h-screen dark:bg-gray-950">
            <div className="container mx-auto">
                <div className="flex flex-col  space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8 dark:bg-gray-950">
                    <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
                        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white">Custom Web Design & Development for Your Business</span>
                        <h1 className="text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight">
                            Choose the Perfect Website Solution for Your Business
                        </h1>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 w-full">
                        <TiltCard services={services} />
                    </div>
                </div>
            </div>
        </section>
    )
}
