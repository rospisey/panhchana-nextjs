import { Link } from "react-scroll";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function Header2() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" bg-white bg-clip-padding backdrop-blur-md bg-opacity-50 fixed z-50 w-screen border-b-[1px] border-gray-200">
            <div className=" max-w-7xl mx-auto px-4 sm:px-12 ">
                <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                    {/* logo */}
                    <div className="flex justify-start lg:flex-1">
                        {/* <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="143.5" height="40.807" viewBox="0 0 143.5 40.807">
                            <path id="Path_118" data-name="Path 118" d="M83.847,28.913v4.079l-.254.147-3.279,1.893-2.84,1.641-.7.4-3.533,2.04-1.9,1.095-1.636.945-3.536,2.04v0l-.948.546-2.586,1.494h0l-3.531,2.04-3.536,2.04v0l2.591,1.494.945.546.945-.546,2.588-1.494v0l3.533-2.037v0h0l3.533-2.04L72.3,43.742l.948-.546,3.533-2.04v0l1.638-.945,1.9-1.095,3.533-2.04v4.079l-3.533,2.04v0l-.95.546-2.586,1.494-3.533,2.04-3.533,2.04v0h0L67.12,50.811l-.945.544v0L62.641,53.4l1.641.948,1.893,1.092v0h0l1.9-1.095,1.638-.948,3.533-2.04.948-.546,2.586-1.494h0l3.533-2.04v0h0l3.531-2.04V69.72L81.7,68.481l-1.384-.8v0l-3.536-2.04-1.2-.693L73.244,63.6l-3.533-2.04v0l.254-.147,3.279-1.893,3.279,1.893.254.147h0l3.531,2.04h0V51.357L76.777,53.4l-1.641.948-1.893,1.092-3.533,2.04v0h0l-.693.4-2.84,1.641-2.843-1.641-.691-.4-3.533-2.04v0h0l-1.893-1.092L55.572,53.4l-3.533-2.04-.945-.546-2.588-1.494v0l3.531-2.04h0l3.531-2.04h0l2.586-1.494.945-.546h0l3.533-2.042,1.638-.945,1.9-1.095,3.536-2.04.693-.4,2.84-1.638,3.282-1.9.252-.147h0l3.533-2.04,2.331-1.347Z" transform="translate(-48.505 -28.913)" fill="#161615" />
                        </svg>
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
