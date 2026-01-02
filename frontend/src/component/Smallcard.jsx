import React from "react";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ fooditem }) => {
    const navigate = useNavigate()
const handlenavigate=()=>{
    navigate("/order")
}
    return (
        <div className="flex bg-white shadow-md rounded-lg w-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="flex-shrink-0">
                <img
                    src={fooditem.img}
                    alt={fooditem.name}
                    className="w-32 h-40 object-cover"
                />
            </div>

            <div className="flex flex-col justify-between p-4 w-full min-w-0"> {/* Added min-w-0 for text truncation */}
                <div className="min-w-0"> {/* Added for text truncation */}
                    <h3 className="text-lg font-bold text-gray-900 truncate">{fooditem.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{fooditem.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-2">
                    <span className="text-lg font-bold text-gray-900 whitespace-nowrap">{fooditem.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium 
                    rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto"

                        onClick={handlenavigate}

                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;