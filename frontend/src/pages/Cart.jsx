import React from 'react'
import { useCart, useDispatchcart } from '../component/Contextapi'

const Cart = () => {
  const cart = useCart()
  const dispatch = useDispatchcart()

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  )

  const handleRemove = (id, size) => {
    dispatch({ type: "REMOVE", payload: { id, size } })
  }

  const handleIncrement = (id, size) => {
    dispatch({ 
      type: "UPDATE_QTY", 
      payload: { id, size, qty: 1 } 
    })
  }

  const handleDecrement = (id, size, currentQty) => {
    if (currentQty > 1) {
      dispatch({ 
        type: "UPDATE_QTY", 
        payload: { id, size, qty: -1 } 
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            Your Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🛒</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-8">
              Add some delicious items to get started!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {cart.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.size}-${index}`}
                    className="p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={item.img} 
                          alt={item.name}
                          className="w-24 h-24 rounded-lg object-cover border border-gray-200"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Size: <span className="font-medium">{item.size}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemove(item.id, item.size)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 text-2xl"
                            aria-label="Remove item"
                          >
                            ×
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleDecrement(item.id, item.size, item.qty)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={item.qty <= 1}
                            >
                              −
                            </button>
                            <span className="text-lg font-semibold text-gray-800 min-w-[32px] text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => handleIncrement(item.id, item.size)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 hover:text-gray-900 font-bold text-lg transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">
                              ₹{item.price.toLocaleString('en-IN')}
                            </div>
                            <div className="text-sm text-gray-500">
                              ₹{(item.price / item.qty).toLocaleString('en-IN')} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="mt-6">
                <button
                  onClick={() => dispatch({ type: "CLEAR" })}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  <span className="text-lg">🗑️</span>
                  Clear Entire Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                  Order Summary
                </h2>

                {/* Order Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{(total * 0.18).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6 pt-6 border-t border-gray-200">
                  <span className="text-lg font-semibold text-gray-800">Total</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{(total * 1.18).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-gray-500">Including all taxes</div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 shadow-md hover:shadow-lg mb-4">
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <a
                    href="/"
                    className="inline-block text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    ← Continue Shopping
                  </a>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">We accept</p>
                  <div className="flex gap-3">
                    <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-800">VISA</span>
                    </div>
                    <div className="w-12 h-8 bg-yellow-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-800">MC</span>
                    </div>
                    <div className="w-12 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">PP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart