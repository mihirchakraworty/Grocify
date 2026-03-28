import React, { useState } from "react"
import Heading from "../Heading/Heading"
import Productlist from "../Productlist.js/Productlist"
import Card from "../Card/Card"
import Button from "../Button/Button"

function Products() {

    const catagerious = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activetab, setActivetab] = useState('All')

    let filteritems = activetab === 'All'
        ? Productlist
        : Productlist.filter(item => item.category === activetab)

    const rerender = filteritems.slice(0, 8).map(product => {
        return (
            <div key={product.id}>
                <Card image={product.image} name={product.name} Price={product.price} />
            </div>
        )
    })

    return (
        <section>
            <div>

                {/* heading */}
                <div className="max-w-[1400px] mx-auto px-10 py-7 sm:px-5 md:px-8 lg:px-10">
                    <Heading highlits="Products" heading="value" />
                </div>

                {/* tabs */}
                <div className="flex justify-center gap-3 mt-10 flex-wrap sm:gap-2 md:gap-3">
                    {catagerious.map((catagory) => {
                        return (
                            <button
                                key={catagory}
                                onClick={() => setActivetab(catagory)}
                                className={`px-5 py-1 text-lg rounded-lg transition 
                                sm:px-3 sm:text-sm md:px-4 md:text-base
                                ${activetab === catagory
                                        ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                                        : 'bg-zinc-200 text-black'
                                    }`}
                            >
                                {catagory}
                            </button>
                        )
                    })}
                </div>

                {/* product list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-8 mx-auto p-20 
          sm:gap-4 sm:p-5 
    md:gap-6 md:p-10 
    lg:gap-9 lg:p-20">
                    {rerender}
                </div>

                {/* button */}
                <div className="mx-auto mt-1 mb-10 w-fit">
                    <Button content="View All" />
                </div>

            </div>
        </section>
    )
}

export default Products