import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("authtoken")
        navigate("/")
        console.log("you are log out")
    }

    const handlecart = () => {
        navigate("/cart")
    }
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-2 lg:flex lg:justify-between lg:items-center lg:p-4 lg:px-8">
            {/* Branding + Toggle */}
            <div className="flex items-center justify-between px-4 lg:px-0">
                <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    Go<span className="text-yellow-300">food</span>
                </h1>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-3xl text-white hover:text-yellow-300 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                    onClick={() => setNavOpen(prev => !prev)}
                >
                    {navOpen ? <MdOutlineRestaurantMenu /> : <CiMenuBurger />}
                </button>
            </div>

            {(localStorage.getItem("authtoken")) ?
                <div className="flex items-center gap-4 lg:gap-6">
                    <div
                        className={`mt-4 lg:mt-0 flex-col lg:flex lg:flex-row items-center gap-4 lg:gap-8 ${navOpen ? "flex" : "hidden lg:flex"
                            }`}
                    >
                        <Link
                            to="/"
                            className="text-white hover:text-yellow-300 font-medium text-lg transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                        >
                            Home
                        </Link>
                        <Link
                            to="/order"
                            className="text-white hover:text-yellow-300 font-medium text-lg transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                        >
                            Order
                        </Link>
                        <Link
                            to="/about-us"
                            className="text-white hover:text-yellow-300 font-medium text-lg transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                        >
                            About Us
                        </Link>
                    </div>
                    <button
                        onClick={handlelogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Logout
                    </button>
                    <button onClick={handlecart} className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2">
                        <span>🛒</span> Cart
                        <span className="bg-red-800"> 1 </span>
                    </button>
                </div>
                :
                <div className={`${navOpen ? "flex" : "hidden lg:flex"} flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-4 lg:mt-0`}>
                    <Link
                        to="/loginuser"
                        className="text-white hover:text-yellow-300 font-medium text-lg transition-colors duration-300 px-4 py-2 rounded-lg border-2 border-white/30 hover:border-yellow-300 hover:bg-white/10"
                    >
                        Sign-in
                    </Link>
                    <Link
                        to="/createuser"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold text-lg px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Sign-up
                    </Link>
                </div>
            }
        </nav>
    );
};

export default Navbar;
