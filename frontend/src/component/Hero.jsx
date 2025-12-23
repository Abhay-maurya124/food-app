import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Card from './Card';
// hero section is for the fetching the data from the backend just only and send it to card component as props
const Hero = () => {
  const [fetchfood,  setfetchfood] = useState([])
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
            fooditem={data}
            option={data.options[0]}
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