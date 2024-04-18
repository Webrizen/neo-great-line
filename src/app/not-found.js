import Link from 'next/link'
import React from 'react'

export default function Notfound() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
                    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">404<br />Not Found.</h2>

                        <p className="mb-8 max-w-md text-gray-400">It seems like the page you're looking for doesn't exist, you may reconsider doing your action on the website in such way that the resources avaialble on the website should be visible to you.</p>

                        <div className="mt-auto">
                            <Link href="/" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Go Back Home
                            </Link>
                        </div>
                    </div>
                    <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                        <img src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500" loading="lazy" alt="Photo by Dom Hill" className="h-full w-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>
    )
}
