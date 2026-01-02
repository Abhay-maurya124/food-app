import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Smallcard from './Smallcard';
import { useNavigate } from 'react-router-dom';
// import { useDispatchcart } from './Contextapi';
// hero section is for the fetching the data from the backend just only and send it to card component as props

const Hero = () => {
  const [fetchfood, setfetchfood] = useState([])
  const [loading, setloading] = useState(null)
  // const dispatch = useDispatchcart()

  const fetchdata = async () => {
    setloading(true)
    try {
      const response = await fetch("http://localhost:5000/api/Alldata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      setfetchfood(data)

      // dispatch({
      //   TYPE: "ALLDATA",
      //   payload: { fetchfood: data },
      // })

    } catch (error) {
      console.error(error)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const navigate = useNavigate()
  const handlenavigate = () => {
    navigate("/order")
  }
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-50'>
        <div className="flex flex-col items-center p-8 rounded-2xl space-y-6 max-w-md w-full bg-white shadow-xl">
          <div className="relative">
            <DotLottieReact
              className="h-64 w-64"
              src="https://lottie.host/2e02c497-a0dc-4f37-8c95-28937d1edbc9/moMnkYw3hy.lottie"
              loop
              autoplay
            />
          </div>
          <div className="text-center space-y-3">
            <p className="text-2xl font-bold text-gray-800">
              Wait! We are cooking for you.
            </p>
            <p className="text-gray-500 animate-pulse">
              Preparing delicious meals...
            </p>
          </div>
        </div>
      </div>
    )
  }

  const slicedata = fetchfood.slice(0, 4)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover <span className="text-blue-600">Delicious</span> Food
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Freshly prepared meals delivered to your doorstep. Order now and experience culinary excellence.
        </p>
      </div>

      {/* Food Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Items
          </h2>
          <button onClick={handlenavigate} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
            View All Menu
          </button>
        </div>

        {/* Food Cards Grid */}
        {slicedata && slicedata.length > 0 ? (
          <div className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-4">
            {slicedata.map((data, idx) => (
              <div key={idx} className="transform transition-transform duration-300 hover:-translate-y-2">
                <Smallcard
                  fooditem={data}
                  option={data.options?.[0]}
                />
              </div>
            ))}

            {/* View All Card */}
            <div className="col-span-full mt-8 flex justify-center">
              <div className="relative group">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                 transform group-hover:scale-105 active:scale-95 flex items-center space-x-3">
                  <span onClick={handlenavigate}>Explore Full Menu</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="inline-flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl text-gray-700 font-medium">No food items available at the moment</p>
              <p className="text-gray-500">Please check back later</p>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Menu Items</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">30 min</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero