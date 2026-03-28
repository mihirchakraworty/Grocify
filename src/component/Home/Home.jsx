import React from "react"
import Navbar from "../Navbar/Navbar.jsx"
import Hero from "../Hero/Hero.jsx"
import Catagoury from "../Catagoury/Catagoury.jsx"
import Value from "../Value/Value.jsx"
import Products from "../Products/Products.jsx"
import DiscountHero from "../Discount/Discount.jsx"
import Footer from "../Footer/Footer.jsx"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Catagoury />
            <Value />
            <Products />
            <DiscountHero />
            <Footer />
        </div>
    )
}

export default Home