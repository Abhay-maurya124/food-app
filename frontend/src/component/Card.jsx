import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchcart } from './Contextapi';

const Card = (props) => {
    let foodoption = props.option;
    let optionkeys = Object.keys(foodoption);

    let dispatchdata = useDispatchcart()
    let data = useCart()
    const [qty, setqty] = useState(1)
    const [Size, setSize] = useState('')
    const priceref = useRef()

    const handleincrement = () => {
        setqty(prev => Math.max(prev + 1, 1));
    }

    const handleDecrement = () => {
        setqty(prev => Math.max(prev - 1, 1));
    }

    const handleAddToCart = async () => {
        await dispatchdata({
            type: "ADD",
            id: props.fooditem._id,
            name: props.fooditem.name,
            qty: qty,
            size: Size,
            Price: FinalPrice,
            img: props.fooditem.img,
        })
        console.log(data)
    }

    useEffect(() => {
        setSize(priceref.current.value)
    }, [])

    let FinalPrice = qty * parseInt(foodoption[Size])

    // Format price in Indian Rupees style
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    }

    return (
        <div className="flex justify-center items-start p-4">
            <div className="card bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm transform transition-transform hover:-translate-y-2">

                {/* Image Section */}
                <div className="h-48 w-full overflow-hidden">
                    <img
                        src={props.fooditem.img}
                        alt={props.fooditem.description}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4 space-y-3 text-gray-800">
                    <h3 className="text-md font-semibold text-indigo-600 text-center uppercase">
                        {props.fooditem.category}
                    </h3>

                    <p className="text-lg font-bold text-center">{props.fooditem.name}</p>

                    <p className="text-sm text-gray-600 text-justify">
                        {props.fooditem.description}
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
                                disabled={qty <= 0}
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center 
                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                    ${qty <= 0
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
                                    ${qty > 0 ? 'text-gray-800' : 'text-gray-400'}
                                `}>
                                    {qty}
                                </span>
                            </div>

                            {/* Increment Button */}
                            <button
                                onClick={handleincrement}
                                disabled={qty >= 9}
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center 
                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                    ${qty >= 9
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

                    <select
                        value={Size}
                        onChange={(e) => setSize(e.target.value)}
                        ref={priceref}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                        {optionkeys.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>

                    <div className="mt-2 pt-2 border-t border-indigo-100 text-center">
                        <p className="text-sm font-semibold text-gray-800">
                            Amount: <span className="text-green-600">₹{FinalPrice.toLocaleString('en-IN')}</span>
                        </p>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        disabled={qty === 0}
                        className={`w-full py-2 rounded-lg text-xs font-bold transition-all duration-300 mt-1 ${qty > 0
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Card