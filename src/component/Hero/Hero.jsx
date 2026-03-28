import React from "react"
import Grocery from "../../assets/basket.png"
import Button from "../Button/Button.jsx"

function Hero (){
    return(
        <section className="max-w-[1400px] min-h-screen mx-auto px-10 md:flex-row flex-col flex items-center md:pt-5 pt-30 ">
             {/* Hero content */}
                 <div>
                    <span className="bg-orange-100 text-orange-500 py-2 px-5 rounded-full text-lg">Export Best Quality</span>
                    <h1 className="md:text-7xl/20 text-5xl/14 font-bold">Tasty Organic <span className="text-orange-500"> Fruits </span>& <span className="text-orange-500">veggies</span> <br />In Your City</h1>
                    <p className="text-zinc-500 md:text-lg text-md max-w[530px] mt-5 mb-10">Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <Button content = "Shop now"/>
                </div>

            {/* hero Image */}
            <div>
               <img src={Grocery} alt="Shop now" />
            </div>
            
        </section>
    )
}
export default Hero