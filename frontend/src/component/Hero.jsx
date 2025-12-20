// import React, { useEffect, useState } from 'react'
// import Card from './Card'
// import Crousel from '../component/Crousel'

// const Hero = () => {
//   const [fooddata, setfooddata] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const fetchfood = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch('http://localhost:5000/api/Alldata', {
//         method: "POST",
//       
//       })

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }

//       const data = await response.json()
//       setfooddata(data)
//       setError(null)
//     } catch (error) {
//       console.error("Error fetching data:", error)
//       setError("Failed to load food items. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchfood()
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="w-16 h-16 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin mb-4"></div>
//         <p className="text-gray-600 text-lg font-medium">Loading delicious food...</p>
//         <p className="text-gray-400 text-sm mt-2">Preparing our menu for you</p>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
//         <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//           <div className="text-5xl mb-4">😕</div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h3>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button 
//             onClick={fetchfood}
//             className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
//       {/* Hero Section with Crousel */}
//       <section className="relative">
//         <Crousel />
//       </section>

//       {/* Food Grid Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//             🍽️ Our <span className="text-orange-500">Menu</span>
//           </h2>
//           <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
//             Discover our delicious offerings prepared with love and fresh ingredients
//           </p>
//           <div className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 font-semibold py-2 px-6 rounded-full shadow-sm">
//             {fooddata.length} {fooddata.length === 1 ? 'item' : 'items'} available
//           </div>
//         </div>

//         {/* Food Grid */}
//         {fooddata && fooddata.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {fooddata.map((data) => (
//               <div 
//                 key={data._id} 
//                 className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 <Card 
//                   name={data.name} 
//                   img={data.img} 
//                   category={data.CategoryName} 
//                   description={data.description}
//                   price={data.price || "N/A"} // Fallback if no price
//                   options={data.options || []} // Pass options if available
//                 />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🍽️</div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Menu Empty</h3>
//             <p className="text-gray-600">No food items available at the moment.</p>
//           </div>
//         )}

//         {/* Stats */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <div className="text-3xl font-bold text-orange-500 mb-2">
//               {fooddata.length}
//             </div>
//             <div className="text-gray-700 font-medium">Total Items</div>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <div className="text-3xl font-bold text-orange-500 mb-2">
//               {[...new Set(fooddata.map(item => item.CategoryName))].length}
//             </div>
//             <div className="text-gray-700 font-medium">Categories</div>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//             <div className="text-3xl font-bold text-orange-500 mb-2">
//               ⭐ 4.8
//             </div>
//             <div className="text-gray-700 font-medium">Average Rating</div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-3xl font-bold mb-4">Hungry for more?</h3>
//           <p className="text-xl mb-8 text-orange-100">
//             Order now and get 20% off on your first order!
//           </p>
//           <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Card from './Card';
// hero section is for the fetching the data from the backend just only and send it to card component as props
const Hero = () => {
  const [fetchfood, setfetchfood] = useState([])
  const [loading, setloading] = useState(null)
  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/api/Alldata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    setfetchfood(data)
  }
  useEffect(() => {
    fetchdata()
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center '>
        <div className="flex flex-col items-center rounded-2xl space-y-6 max-w-md w-full">
          <DotLottieReact
            className="h-96 w-96"
            src="https://lottie.host/2e02c497-a0dc-4f37-8c95-28937d1edbc9/moMnkYw3hy.lottie"
            loop
            autoplay
          />
          <p className="text-xl font-bold text-center text-gray-800">
            Wait! We are cooking for you.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-blue-100 p-4 grid gap-6
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4">
      {fetchfood && fetchfood.length > 0 ? (
        fetchfood.map((data) => (
          <Card
            key={data._id}
            name={data.name}
            description={data.description}
            img={data.img}
            option={data.options}
            category={data.CategoryName}
          />
        ))
      ) : (
        <div className="col-span-full text-center text-lg text-gray-700">
          {loading}
        </div>
      )}
    </div>

  )
}

export default Hero