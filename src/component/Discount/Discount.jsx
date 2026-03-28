import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png"

function DiscountHero() {
    return (
        <section className="bg-zinc-100 py-5 bg-contain bg-no-repeat bg-right " style={{ backgroundImage: `url(${FreshFruits})` }}>
            <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-10">

                {/* LEFT */}
                <div className="flex gap-6 items-start">
                    <span className="text-orange-500 text-[150px] items-center h-fit self-center font-bold rotate-[-90deg]">
                        20%
                    </span> 

                    <div>
                        <h1 className="text-8xl font-bold text-zinc-800">
                            First Order <br /> Discount!
                        </h1>

                        <p className="text-zinc-500 mt-4 mt-5 max-w-[450px]">
                            Enjoy first order discount on groceries. Fast delivery & quality guaranteed.
                        </p>

                        <div className="mx-auto w-fill mt-10">
                            <Button content="Get Discount" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default DiscountHero