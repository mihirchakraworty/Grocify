import React from "react"
import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { TbSeedlingFilled } from "react-icons/tb";
import Basket from "../../assets/basket-full-vegetables.png"

function Value() {

    const leftvalue = value.slice(0, 2).map(items => {
        return (
            <div className="flex flex-row-reverse items-centers gap-7 
                sm:gap-4 md:gap-6 lg:gap-7 
                p-4 sm:p-3 md:p-4 rounded-xl 
                hover:bg-orange-50 transition-all duration-300">

                <div className="flex flex-row-reverse items-center">
                    <span className="bg-gradient-to-b from-orange-400 to-orange-500 
                        rounded-full w-15 h-15 
                        sm:w-12 sm:h-12 md:w-14 md:h-14 
                        flex items-center justify-center 
                        text-3xl sm:text-xl md:text-2xl text-white 
                        transition-transform duration-300 hover:scale-110">
                        {items.icone}
                    </span>
                </div>

                <div className="text-right">
                    <h2 className="font-bold text-zinc-800 text-3xl 
                        sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        {items.title}
                    </h2>
                    <p className="text-600 text-sm sm:text-xs md:text-sm lg:text-base leading-relaxed">
                        {items.pera}
                    </p>
                </div>
            </div>
        )
    })

    const rightvalue = value.slice(2).map(items => {
        return (
            <div className="flex items-center gap-7 
                sm:gap-4 md:gap-6 lg:gap-7 
                p-4 sm:p-3 md:p-4 rounded-xl 
                hover:bg-orange-50 transition-all duration-300">

                <div className="flex">
                    <span className="bg-gradient-to-b from-orange-400 to-orange-500 
                        rounded-full w-16 h-16 
                        sm:w-12 sm:h-12 md:w-14 md:h-14 
                        flex items-center justify-center 
                        text-3xl sm:text-xl md:text-2xl text-white 
                        transition-transform duration-300 hover:scale-110">
                        {items.icone}
                    </span>
                </div>

                <div>
                    <h2 className="font-bold text-zinc-800 text-3xl 
                        sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        {items.title}
                    </h2>
                    <p className="text-600 text-sm sm:text-xs md:text-sm lg:text-base leading-relaxed">
                        {items.pera}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-8 
                sm:px-5 md:px-8 lg:px-10">

                <Heading highlits="Our" heading="value" />

                <div className="flex items-center gap-15 mt-15 
                    flex-col 
                    sm:grid sm:grid-cols-2 sm:gap-6 
                    md:grid md:grid-cols-2 md:gap-8 
                    lg:flex lg:flex-row lg:gap-15">

                    {/* leftvalue */}
                    <div className="justify-between min-h-150 flex-col flex 
                        sm:contents md:contents lg:flex">
                        {leftvalue}
                    </div>

                    {/* image */}
                    <div className="sm:col-span-2 md:col-span-2 lg:col-auto 
                        flex justify-center order-2 sm:order-none">
                        <img 
                            src={Basket} 
                            className="w-full sm:w-[70%] md:w-[60%] lg:w-auto mx-auto 
                            transition-all duration-500 hover:scale-105"
                        />
                    </div>

                    {/* rightvalue */}
                    <div className="justify-between min-h-150 flex-col flex 
                        sm:contents md:contents lg:flex">
                        {rightvalue}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Value


const value = [
    {
        id: 1,
        title: "Trust",
        pera: "It is a long established fact that a reader will be distracted by the readable.",
        icone: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        pera: "It is a long established fact that a reader will be distracted by the readable.",
        icone: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        icone: <FaShield />
    },
    {
        id: 4,
        title: "100% Organic",
        pera: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icone: <TbSeedlingFilled />
    }
];