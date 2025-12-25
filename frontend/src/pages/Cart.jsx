import React from 'react'
import { useCart, useDispatchcart } from '../component/Contextapi'

const Cart = () => {
    const data = useCart()
    const dispatch = useDispatchcart()
let totalprice = data.reduce((total, food) => total + Number(food.Price || 0), 0)
    return (
        <div className="max-w-5xl mx-auto my-10 p-4 md:p-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                    <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                        <span>🛒</span> Your Shopping Cart
                    </h2>
                    <p className="text-indigo-100 mt-1 italic">Review your delicious selections below</p>
                </div>

                {/* Table Section */}
                <div className="p-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-100 text-gray-400 uppercase text-xs tracking-widest">
                                <th className="py-4 px-2">#</th>
                                <th className="py-4 px-2">Item</th>
                                <th className="py-4 px-2 text-center">Qty</th>
                                <th className="py-4 px-2 text-center">Size</th>
                                <th className="py-4 px-2 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {data.map((food, index) => (
                                <tr key={index} className="group hover:bg-indigo-50/50 transition-all duration-200">
                                    <td className="py-5 px-2 text-gray-400 font-medium">{index + 1}</td>
                                    <td className="py-5 px-2">
                                        <span className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                            {food.name}
                                        </span>
                                    </td>
                                    <td className="py-5 px-2 text-center">
                                        <span className="inline-block w-8 h-8 leading-8 bg-white border rounded-lg shadow-sm font-semibold text-gray-700">
                                            {food.qty}
                                        </span>
                                    </td>
                                    <td className="py-5 px-2 text-center text-gray-500 font-medium italic">
                                        {food.size}
                                    </td>
                                    <td className="py-5 px-2 text-right">
                                        <span className="text-lg font-bold text-gray-900">
                                            ₹{Number(food.Price).toLocaleString('en-IN')}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Section */}
                <div className="bg-gray-50 p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Grand Total</span>
                        <span className="text-4xl font-black text-indigo-600 leading-none">
                            ₹{totalprice.toLocaleString('en-IN')}/-
                        </span>
                    </div>

                    <button className="group relative bg-gray-900 text-white font-bold py-4 px-10 rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl hover:shadow-indigo-200 active:scale-95">
                        Proceed to Checkout
                        <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-6">
                Prices include all applicable taxes and convenience fees.
            </p>
        </div>
    )
}

export default Cart