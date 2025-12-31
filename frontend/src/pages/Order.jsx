import React, { useEffect, useState } from "react";
import Card from "../component/Card";

const Order = () => {
  const [fetchfood, setfetchfood] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");

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
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search orders…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
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
            <Card
              key={item._id ?? item.id}
              fooditem={item}
              option={item.options?.[0]}
              className="transform hover:scale-105 transition"
            />
          ))}
        </div>
      ) : (
        !loading && (
          <div className="text-center text-gray-400 py-8">
            Nothing to show here.
            {/* <div onClick={setSearch()}>Click here</div> */}
          </div>
        )
      )}
    </div>
  );
};

export default Order;
