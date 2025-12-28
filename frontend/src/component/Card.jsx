// import React, { useEffect, useState } from 'react'
// import { useDispatchcart } from './Contextapi'

// const Card = ({ fooditem, option }) => {
//     const dispatch = useDispatchcart()
//     const optionsKeys = Object.keys(option)

//     const [Size, setSize] = useState(optionsKeys[0])
//     const [qty, setQty] = useState(1)

//     const unitPrice = Number(option[Size] || 0)
//     const FinalPrice = qty * unitPrice

//     const addToCart = () => {
//         dispatch({
//             type: "ADD",
//             payload: {
//                 id: fooditem._id,
//                 name: fooditem.name,
//                 size: Size,
//                 qty,
//                 price: FinalPrice,
//                 img: fooditem.img,
//             }
//         })
//     }
//     return (
//         <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
//             {/* Food Image */}
//             <div className="h-48 overflow-hidden">
//                 <img
//                     src={fooditem.img}
//                     alt={fooditem.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//                 {/* Food Name */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
//                     {fooditem.name}
//                 </h3>

//                 {/* Size Selector */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Size
//                     </label>
//                     <select
//                         value={Size}
//                         onChange={e => setSize(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
//                     >
//                         {optionsKeys.map(key => (
//                             <option key={key} value={key}>
//                                 {key} - ₹{option[key].toLocaleString('en-IN')}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Quantity Selector */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Quantity
//                     </label>
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={() => setQty(prev => Math.max(prev - 1, 1))}
//                             className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 font-bold text-lg transition-colors"
//                         >
//                             −
//                         </button>
//                         <span className="text-xl font-semibold text-gray-800 min-w-[24px] text-center">
//                             {qty}
//                         </span>
//                         <button
//                             onClick={() => setQty(prev => Math.min(prev + 1, 9))}
//                             className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 font-bold text-lg transition-colors"
//                         >
//                             +
//                         </button>
//                     </div>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-5">
//                     <div className="text-2xl font-bold text-orange-600">
//                         ₹{FinalPrice.toLocaleString('en-IN')}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                         ₹{unitPrice.toLocaleString('en-IN')} per item
//                     </div>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                     onClick={addToCart}
//                     className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 shadow-md hover:shadow-lg"
//                 >
//                     ADD TO CART
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Card
import React, { useState } from 'react'

const Card = (props) => {
    const options = props.option
    const optiondata = Object.keys(options)
    const [size, setsize] = useState(optiondata[0])
    const [qty, setqty] = useState(0)
    const handleAddcart = () => {
        console.log(size)
    }
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 hover:shadow-2xl transition-all duration-300">

            {/* Image Section */}
            <div className="w-full h-44 overflow-hidden">
                <img
                    src={props.fooditem.img}
                    alt={props.fooditem.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="p-4">

                {/* Title */}
                <h1 className="text-xl font-bold text-gray-800 text-center">
                    {props.fooditem.name}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mt-1">
                    {props.fooditem.description}
                </p>

                {/* Select Controls */}
                <div className="mt-4 flex gap-4">

                    {/* Size Selector */}
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        {optiondata.map((item, index) => (
                            <option key={index} value={index} onChange={(e) => setsize(e.target.value)}>
                                {item}
                            </option>
                        ))}
                    </select>
                    {/* Price Selector */}
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        {optiondata.map((item, idx) => (
                            <option key={idx}>
                                ₹{options[item]}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Button */}
                <button
                    onClick={handleAddcart}
                    className="mt-5 w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card
