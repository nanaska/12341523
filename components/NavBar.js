import React from 'react'
import { Transition } from "@headlessui/react";
import burg from "../public/menu.png"
import { useState } from 'react';
import { Link } from "react-scroll"
import Image from 'next/dist/client/image';

function NavBar() {
    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    function a() {
        if (typeof window !== "undefined") {

            if (window.scrollY > 110) {
                setIsScroll(true)
            } else { setIsScroll(false) }
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', a)
    }

    return (
        <div >

            <nav className={isScroll ? " shadow-sm fixed w-full z-10 bg-white select-none" : " shadow-sm  select-none fixed w-full z-10 "}>
                <div className="w-full" >
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <h1 className=" font-bold text-xl cursor-pointer">
                                    <span className="text-green-600 text-2xl">Bag</span><span className={isScroll ? "text-black text-2xl" : "text-white text-2xl"}>Табак</span>
                                </h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        activeClass="Home"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-white"
                                    >
                                        Главная
                                    </Link>
                                    <Link
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={300}
                                        duration={500}
                                        className={isScroll ? "cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" : "cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                    >
                                        О нас
                                    </Link>
                                    <Link
                                        activeClass="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className={isScroll ? "cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" : "cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                    >
                                        Франшиза
                                    </Link>
                                    <Link
                                        activeClass="services"
                                        to="services"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className={isScroll ? "cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" : "cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                    >
                                        Что-то
                                    </Link>

                                    <Link
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className={isScroll ? "cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" : "cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                                    >
                                        Контакты
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden">
                            <button onClick={() => {
                                setIsOpen(true)
                            }} type="button" className="bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            ><span className="sr-only">Open menu</span>
                                {!isOpen ? (<><Image src={burg} width={50} height={50} /></>) : (
                                    <><Image src={burg} width={50} height={50} /></>

                                )}
                            </button>
                        </div>
                    </div>
                    <Transition show={isOpen} enter="transition ease-out duration-200 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opaciry-100 scale-100"
                        leave="transition ease-in duration-100 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opaciry-0 scale-95">
                        {(ref) => (
                            <div className="md:hidden id=mobile-menu ">
                                <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link
                                        activeClass="Home"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-white"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        activeClass="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Work
                                    </Link>
                                    <Link
                                        activeClass="services"
                                        to="services"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-green-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer bg-green-600  text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        )}

                    </Transition>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
