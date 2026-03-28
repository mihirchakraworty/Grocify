import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function Card({ image, name, Price }) {
    return (
        <div className="bg-zinc-100 p-10 gap-6 rounded-xl mx-auto">
            {/* icor card */}
            <div className="flex justify-between">
                <span className="text-3xl text-zinc-400">
                    <FaHeart />
                </span>
                <button className="px-2 py-1 rounded-lg inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold  text-3xl">
                    <FaPlus />
                </button>
            </div>

            {/* image  card */}
            <div className="w-full h-50 ">
                <img src={image} className="w-full h-full object-center mx-auto" />
            </div>

            {/* name card */}
            <div className="text-center">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-2xl font-bold mt-4 mb-2" >${Price.toFixed(2)}</p>
                < Button content="Shop Now  " />
            </div>
        </div>
    )
}

export default Card