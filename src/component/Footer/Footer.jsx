import React from "react"

function Footer() {
    return (
        <footer className="bg-zinc-200 py-20">
            <div className="flex flex-wrap max-w-[1400px] px-10 mx-auto gap-10 sm:gap-6 md:gap-8 lg:gap-10">

                {/* Logo Section */}
                <div className="flex-1 basis-[300px] text-center sm:text-left">
                    <a href="" className="text-3xl font-bold">
                        Gr<span className="text-orange-500 uppercase">o</span>cify
                    </a>

                    <p className="text-zinc-600 mt-6 max-w-[350px] mx-auto sm:mx-0">
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>

                    <p className="mt-4 text-sm sm:text-base">
                        2025 &copy; All Right Reserved
                    </p>
                </div>

                {/* Company */}
                <ul className="flex-1 basis-[200px] text-center sm:text-left">
                    <li>
                        <h5 className="text-zinc-800 text-2xl sm:text-xl md:text-2xl font-bold">
                            Company
                        </h5>
                    </li>

                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">
                            About
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">
                            FAQ'S
                        </a>
                    </li>
                </ul>

                {/* Support */}
                <ul className="flex-1 basis-[200px] text-center sm:text-left">
                    <li>
                        <h5 className="text-zinc-800 text-2xl sm:text-xl md:text-2xl font-bold">
                            Support
                        </h5>
                    </li>

                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">
                            Support center
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">
                            Contact us
                        </a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">
                            Feedback's
                        </a>
                    </li>
                </ul>

                {/* Newsletter */}
                <div className="w-full sm:w-auto basis-[250px] text-center sm:text-left">
                    <h5 className="text-zinc-800 text-2xl sm:text-xl md:text-2xl font-bold">
                        Stay Connnect
                    </h5>

                    <p className="text-zinc-800 mt-5 text-sm sm:text-base">
                        Question or Feedback ?<br />
                        We love from hear You
                    </p>

                    <div className="flex items-center bg-gray-100 rounded-md overflow-hidden w-full sm:w-[200px] mt-8 mx-auto sm:mx-0">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-2 py-2 sm:py-1 bg-transparent outline-none text-sm"
                        />

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-2 sm:py-3 transition-all duration-300">
                            &gt;
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer