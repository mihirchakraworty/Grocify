import React, { useState } from "react"
import { IoHeart } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


function Navbar() {

    let [shownew, setShownew] = useState(false);
    let toggleMeanu = () => {
        setShownew(!shownew);
    }

    return (
        <header className="bg-white-500 fixed top-0 left-0 right-0 z-50">

            {/* logo */}
            <div className="flex mx-auto px-10 max-w-[1400px] items-center md:h-[14vh] h-[12vh]  justify-between bg-white-300 item-center">
                <a href="" className="text-3xl font-bold">
                    Gr<span className="text-orange-500 uppercase">o</span>cify
                </a>

                {/* desktop */}
                <ul className='md:flex hidden gap-x-15'    >
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-orange-500">Home</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800  hover:text-orange-500 ...">About as</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800 hover:text-orange-500 ...">Process</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800 orange hover:text-orange-500 ...">Contact</a>
                    </li>
                </ul>

                {/* input text */}
                <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden" >
                    <input type="text" placeholder="search" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-t from-red-600 to-orange-500   flex justify-center items-center h-10 w-10 rounded-full text-white text-xl"><FaSearch /></button>
                </div>

                {/* Navber Action */}
                <div className="flex item-center gap-x-5" >

                    <a href="" className="text-2xl tex-zinc-500">
                        <IoHeart />
                    </a>
                    <a href="" className="text-2xl tex-zinc-500">
                        <HiShoppingBag />
                    </a>
                    {/* Hambarger */}
                    <a href="" className="text-zinc-800 text-3xl md:hidden " onClick={toggleMeanu} >
                        <IoMenu />
                    </a>
                </div>

                {/* moblile fild */}
                <ul className={`flex flex-col gap-y-11 rounded-xl bg-orange-500/15 backdrop-blur-xl p-10 top-30 -left-full transform -translate-x-1/2 items-center gap-x-15 md:hidden absolute transition-all duration-500 ${shownew ? " left-1/2" : ""}`}>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-orange-500">Home</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800  hover:text-orange-500 ...">About as</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800 hover:text-orange-500 ...">Process</a>
                    </li>
                    <li>
                        <a href="" className="font-semibolt tracking-wider text-zinc-800 orange hover:text-orange-500 ...">Contact</a>
                    </li>
                    <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden" >
                        <input type="text" placeholder="search" className="flex-1 h-[5vh] px-3 focus:outline-none" />
                        <button className="bg-gradient-to-t from-red-600 to-orange-500   flex justify-center items-center h-10 w-10 rounded-full text-white text-xl"><FaSearch /></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar