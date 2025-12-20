import React, { useState } from 'react'

const Card = (props) => {
    const [incre, setincre] = useState(0)
    let foodoption = props.option;
    let optionObj = foodoption[0] || {};
    let optionkeys = Object.keys(optionObj);
console.log(optionObj)
    const handleincrement = () => {
        setincre(prev => {
            if (prev >= 9) return prev
            return prev + 1
        })
    }

    const handleDecrement = () => {
        setincre(prev => {
            if (prev <= 0) return 0
            return prev - 1
        })
    }

    return (
        <div className="flex justify-center items-start p-4">
            <div className="card bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm transform transition-transform hover:-translate-y-2">

                {/* Image Section */}
                <div className="h-48 w-full overflow-hidden">
                    <img
                        src={props.img}
                        alt={props.description}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4 space-y-3 text-gray-800">
                    <h3 className="text-md font-semibold text-indigo-600 text-center uppercase">
                        {props.category}
                    </h3>

                    <p className="text-lg font-bold text-center">{props.name}</p>

                    <p className="text-sm text-gray-600 text-justify">
                        {props.description}
                    </p>

                    {/* Styled Quantity Selector */}
                    <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-medium">Quantity</span>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Decrement Button */}
                            <button
                                onClick={handleDecrement}
                                disabled={incre <= 0}
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center 
                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                    ${incre <= 0
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-red-50 text-red-600 hover:bg-red-100 active:bg-red-200'
                                    }
                                `}
                                aria-label="Decrease quantity"
                            >
                                <span className="text-lg font-bold">−</span>
                            </button>

                            {/* Quantity Display */}
                            <div className="min-w-[40px] text-center">
                                <span className={`
                                    text-lg font-bold transition-all duration-200
                                    ${incre > 0 ? 'text-gray-800' : 'text-gray-400'}
                                `}>
                                    {incre}
                                </span>
                            </div>

                            {/* Increment Button */}
                            <button
                                onClick={handleincrement}
                                disabled={incre >= 9}
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center 
                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                    ${incre >= 9
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-green-50 text-green-600 hover:bg-green-100 active:bg-green-200'
                                    }
                                `}
                                aria-label="Increase quantity"
                            >
                                <span className="text-lg font-bold">+</span>
                            </button>
                        </div>
                    </div>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        {optionkeys.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Card