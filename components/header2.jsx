import { Link } from "react-scroll";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function Header2() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" bg-white fixed z-50 w-screen border-b-2 border-gray-100">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                    {/* logo */}
                    <div className="flex justify-start lg:flex-1">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </div>
                    {/* primary nav */}
                    <nav className="hidden  justify-center  md:flex">
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Home</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Blog</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Service</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >About</a>
                    </nav>
                    {/* secondary nav */}
                    <div className="hidden md:flex justify-end flex-1 items-center">
                        <a href="#" className="whitespace-nowrap items-center text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </a>
                    </div>
                    {/* mobile view */}
                    <div className="-mr-2 md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 " aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6112 12"></path>
                                </svg>
                            )}
                            {/* <svg className="h-6 w-6" x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg> */}
                        </button>
                    </div>

                </div>
                
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">{(ref) =>
                // handle mobile menu
                (
                    <div className="md:hidden w-full bottom-0 top-[88px] bg-white block z-50 id=mobile-menu fixed overflow-y-scroll visible">
                        <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            <Link href="/blog" activeClass="blog" to="blog" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </Link>
                            <Link href="/services" activeClass="services" to="services" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Services
                            </Link>
                            <Link href="/about" activeClass="about" to="about" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </Link>
                            <Link href="/contact" activeClass="contact" to="contact" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </Link>
                            
                        </div>
                    </div>
                )}</Transition>
        </div>
    );
}

export default Header2;
