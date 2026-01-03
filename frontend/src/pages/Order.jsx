import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Link, useNavigate } from "react-router-dom";

const Order = () => {
  const [fetchfood, setfetchfood] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");
  // const navigate = useNavigate()
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = await fetch("http://localhost:5000/api/Alldata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setfetchfood(data);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);



  const filtered = fetchfood.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // const handleclick = (orderId) => {
  //   navigate(`/order:${orderId}`)
  // }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Explore the <span className="text-indigo-600">Taste of India</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover authentic Indian flavors, from spicy curries to sweet desserts.
          Experience culinary traditions that span centuries.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for dishes, curries, biryanis, desserts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 lg:py-4 border-2 border-gray-300 rounded-xl 
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                 text-gray-700 placeholder-gray-500 shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>

      </div>
      {/* Loading state */}
      {loading && (
        <div className="text-center text-gray-600 py-8">
          Loading orders…
        </div>
      )}
      {/* Orders grid */}
      {!loading && filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {filtered.map((item) => (
            // <Link to={`/order/${item._id}`}>
            <Card
              key={item._id ?? item.id}
              fooditem={item}
              option={item.options?.[0]}
              className="transform hover:scale-105 transition"
            />
            // </Link>
          ))}
        </div>
      ) : (
        !loading && (
          <div className="text-center text-gray-400 py-8">
            Nothing to show here.
          </div>
        )
      )}
    </div>
  );
};

export default Order;
