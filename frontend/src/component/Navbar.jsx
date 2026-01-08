import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../component/Contextapi"; // get cart state
import { toast, Toaster } from "react-hot-toast";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    const cart = useCart() || [];

    // total number of items
    const totalItems = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0)
    // total price (works if your items use `price` or `Price`)
    const totalAmount = cart.reduce(
        (sum, item) => sum + (Number(item.price ?? item.Price) || 0),
        0
    )

    const handleLogout = () => {
        alert("Are Really want to Logout",
            localStorage.removeItem("authtoken")

        )
        toast.error("logout success")
        navigate("/")
    }
    const handleCart = () => {
        navigate("/cart")
    }

    const isAuth = Boolean(localStorage.getItem("authtoken"));

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-3 lg:flex lg:justify-between lg:items-center lg:px-8">

            {/* Branding */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl lg:text-3xl font-bold text-white">
                    <Link to="/">
                        Gofood
                    </Link>
                </h1>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white text-xl"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Navigation Links */}
            {isAuth ? (
                <div className={`flex-col lg:flex lg:flex-row lg:items-center gap-4 ${navOpen ? "flex" : "hidden lg:flex"}`}>

                    <Link to="/" className="text-white text-lg hover:text-yellow-300">
                        Home
                    </Link>

                    <Link to="/order" className="text-white text-lg hover:text-yellow-300">
                        Order
                    </Link>

                    <Link to="/about-us" className="text-white text-lg hover:text-yellow-300">
                        About Us
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                        <Toaster />
                        Logout
                    </button>

                    {/* Cart Button */}
                    <button
                        onClick={handleCart}
                        className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-lg hover:bg-yellow-500"
                    >
                        Cart

                        {/* Badge */}
                        <span className="ml-2 bg-red-700 text-white text-sm px-2 py-0.5 rounded-full font-semibold">
                            {cart.length}
                        </span>
                    </button>
                </div>
            ) : (
                <div className={`${navOpen ? "flex" : "hidden lg:flex"} flex-col lg:flex-row gap-4`}>

                    <Link
                        to="/loginuser"
                        className="text-white text-lg hover:text-yellow-300 px-4 py-2 border border-white/30 rounded-lg"
                    >
                        Sign-in
                        <Toaster />
                    </Link>

                    <Link
                        to="/createuser"
                        className="bg-yellow-400 text-gray-800 text-lg px-6 py-2 rounded-lg hover:bg-yellow-500"
                    >
                        Sign-up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
