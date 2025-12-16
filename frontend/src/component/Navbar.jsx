import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="bg-blue-200 p-2 lg:flex lg:justify-center lg:gap-12 lg:items-center lg:p-3">
            {/* Branding + Toggle */}
            <div className="flex items-center justify-between px-8 ">
                <h1 className="text-3xl lg:text-5xl font-bold">
                    Go-food
                </h1>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setNavOpen(prev => !prev)}
                >
                    {navOpen ? <MdOutlineRestaurantMenu /> : <CiMenuBurger />}
                </button>
            </div>

            {/* Nav Links */}
            <div
                className={`mt-4 flex-col lg:flex lg:flex-row lg:items-center items-center lg:mt-0 gap-6 ${navOpen ? "flex" : "hidden lg:flex"
                    } justify-center `}
            >
                <Link to="/" className="hover:text-blue-800">
                    Home
                </Link>
                <Link to="/order" className="hover:text-blue-800">
                    Order
                </Link>
                <Link to="/about-us" className="hover:text-blue-800">
                    About Us
                </Link>
                <Link to="/login" className="hover:text-blue-800">
                    Sign-in
                </Link>
                <Link to="/register" className="hover:text-blue-800">
                    Sign-up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
