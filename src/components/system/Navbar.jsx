"use client";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setTheme } = useTheme();
    return (
        <>
            <header
                className="bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl sticky top-0"
                style={{ zIndex: "99" }}
            >
                <div className="container mx-auto flex flex-row flex-wrap p-3 md:justify-normal justify-between items-center">
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center text-slate-700 mr-4 border-r-none md:border-r border-slate-300 pr-4 md:mb-0"
                    >
                        <img
                            src="/logo.png"
                            alt="NGL's Logo"
                            className="w-auto h-10 filter dark:filter-none invert"
                        />
                    </Link>
                    <nav
                        className={`lg:flex lg:flex-row flex-col flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center ${isMenuOpen ? "grid grid-cols-2 bg-white dark:bg-slate-900 p-4" : " hidden"
                    }`}
                    >
                        <Link
                            href="/#"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            About
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="lg:inline-flex bg-transparent lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center dark:bg-transparent hover:bg-slate-100">
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="p-2 flex flex-col gap-1 whitespace-nowrap bg-white dark:bg-transparent shadow-lg rounded-lg">
                                        <Link href="/services/web-development" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Web Development
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/services/web-design" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Web Design
                                            </NavigationMenuLink>
                                        </Link>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className="w-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                    Marketing Services
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col w-full gap-0">
                                                    <Link href="/services/seo" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            Search Engine Optimization (SEO)
                                                        </NavigationMenuLink>
                                                    </Link>
                                                    <Link href="/services/social-media" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            Social Media Management
                                                        </NavigationMenuLink>
                                                    </Link>
                                                    <Link href="/services/content-marketing" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            Content Marketing
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger className="w-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                    E-commerce Solutions
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col w-full gap-0">
                                                    <Link href="/services/e-commerce-website" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            E-commerce Website Development
                                                        </NavigationMenuLink>
                                                    </Link>
                                                    <Link href="/services/payment-gateway-integration" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            Payment Gateway Integration
                                                        </NavigationMenuLink>
                                                    </Link>
                                                    <Link href="/services/online-store-optimization" legacyBehavior passHref>
                                                        <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                            Online Store Optimization
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Link href="/services/graphic-design" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Graphic Design
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/services/logo-design" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Logo Design
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/services/branding" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Branding Services
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/services" legacyBehavior passHref>
                                            <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                                                Additional Services
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuContent>

                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link
                            href="/portfolio"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/careers"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/contact"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex justify-end items-center gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Dialog>
                            <DialogTrigger>
                                <Button variant="outline" className="text-sm">
                                    Schedule a meeting
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Schedule Your Meeting with NEO GREAT LINE
                                    </DialogTitle>
                                    <DialogDescription>
                                        <form
                                            className="flex flex-col gap-4 mt-4"
                                            id="contactform"
                                            action={`https://formsubmit.io/send/${process.env.NEXT_PUBLIC_FORMSUBMIT_TOKEN}`}
                                            method="POST"
                                        >
                                            <input
                                                type="text"
                                                name="Name"
                                                placeholder="Name"
                                                className="py-3 px-4 border rounded"
                                            />
                                            <input
                                                name="_redirect"
                                                type="hidden"
                                                id="name"
                                                value="https://saa-global-next.vercel.app/success"
                                            ></input>
                                            <input
                                                type="email"
                                                name="Email"
                                                placeholder="Email"
                                                className="py-3 px-4 border rounded"
                                            />
                                            <input
                                                type="time"
                                                name="Time"
                                                placeholder="time"
                                                className="py-3 px-4 border rounded"
                                            />
                                            <input
                                                type="date"
                                                name="Date"
                                                placeholder="date"
                                                className="py-3 px-4 border rounded"
                                            />
                                            <Button type="submit">Connect</Button>
                                        </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        <button
                            className="inline-flex w-10 h-10 justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}