import React, { useState } from 'react';
import { useDispatchcart } from './Contextapi';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Card = ({ fooditem, option }) => {
    const dispatch = useDispatchcart();
    const optionsKeys = Object.keys(option);

    // 1. Initialize state directly from props
    const [size, setSize] = useState(optionsKeys[0] || "");
    const [qty, setQty] = useState(1);

    // 2. Derive price based on state (no need for extra useEffects)
    const unitPrice = Number(option[size] || 0);
    const finalPrice = qty * unitPrice;
    const notify = () => toast.success('Successfully Added to Cart');

    const handleAddToCart = () => {
        dispatch({
            type: "ADD",
            payload: {
                id: fooditem._id,
                name: fooditem.name,
                size: size,
                qty: qty,
                price: finalPrice,
                img: fooditem.img,
            }
        });
        notify()
    };
    const isAuth = Boolean(localStorage.getItem("authtoken"));
    const navigate = useNavigate()

    const handlelogin = () => {
        alert("u need to login First")
        navigate("/loginuser")
    }

    return (
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 m-4">
            {/* Image Section */}
            <div className="h-48 overflow-hidden">
                <img
                    src={fooditem.img}
                    alt={fooditem.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{fooditem.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{fooditem.description}</p>

                <div className="flex flex-col gap-3">
                    {/* Size and Qty Row */}
                    <div className="flex items-center justify-between gap-2">
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        >
                            {optionsKeys.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>

                        <select
                            value={qty}
                            onChange={(e) => setQty(parseInt(e.target.value))}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-20 p-2.5"
                        >
                            {Array.from({ length: 6 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Display */}
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-2xl font-bold text-gray-900">
                            ₹{finalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-gray-400">
                            ₹{unitPrice}/each
                        </span>
                    </div>


                    {isAuth ? (
                        <button
                            onClick={handleAddToCart}
                            className="w-full mt-2 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 active:scale-95 transition-all shadow-md"
                        >
                            ADD TO CART
                            <Toaster />
                        </button>

                    ) : (
                        <button
                            onClick={handlelogin}
                            className="w-full mt-2 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 active:scale-95 transition-all shadow-md"
                        >
                            ADD TO CART

                        </button>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Card;