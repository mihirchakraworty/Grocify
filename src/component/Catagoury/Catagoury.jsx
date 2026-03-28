import Heading from "../Heading/Heading"
import Freshfruits from "../../assets/fruits-and-veggies.png"
import Dairycat from "../../assets/dairy-and-eggs.png"
import Seacat from "../../assets/meat-and-seafood.png"
import Button from "../Button/Button"
import Fruits from "../Fruits/Fruits"

function Catagoury() {

    const redndeCard = category.map(card => {
        return (
            // card
            <div key={card.id} className="flex-1 max-auto basis-[300px] sm:basis-full md:basis-[45%] lg:basis-[30%]">

                {/* card image */}
                <div className="w-full min-h-[30hv] relative -mb-10 sm:-mb-6 md:-mb-8" >
                    <img src={card.image} className="w-full h-40 sm:h-36 md:h-40 lg:h-44 object-contain mx-auto" />
                </div>

                {/* card content */}
                <div className="pt-17 p-8 sm:p-6 md:p-7 lg:p-8 rounded-xl bg-zinc-100 max-auto text-center sm:text-left md:text-left">
                    <h2 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl mb-3">{card.title}</h2>
                    <p className="mb-6 text-sm sm:text-base md:text-base lg:text-lg">{card.discripricaton}</p>
                    <a href="/fruits" className="px-5 py-3 inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 sm:px-4 sm:py-2 md:px-5 md:py-3">
                        See All
                    </a>
                </div>
            </div>
        )
    })

    return (
        <section className="px-10 sm:px-5 md:px-8 lg:px-10 py-10 mx-w-[1400 px] mx-auto">
            <Heading highlits="Shops" heading="with Category" />

            {/* card */}
            <div className="flex mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5 md:gap-6 lg:gap-8">
                {redndeCard}
            </div>
        </section>
    )
}

export default Catagoury


const category = [
    {
        id: 1,
        title: "Fruits & Veggies ",
        discripricaton: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables",
        image: Freshfruits,
    },
    {
        id: 2,
        title: "Dairy & Eggs",
        discripricaton: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image: Dairycat,
    },
    {
        id: 3,
        title: "Meat & SeaFood",
        discripricaton: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more",
        image: Seacat,
    },
]