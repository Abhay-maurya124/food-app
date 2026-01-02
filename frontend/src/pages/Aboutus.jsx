import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center py-16 px-4">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        About Us
      </h1>

      {/* Intro Section */}
      <p className="max-w-3xl text-center text-lg leading-relaxed mb-10">
        Welcome to <span className="font-semibold text-indigo-500">Our Company</span>! 
        We are dedicated to delivering the best products and services with passion and integrity. 
        Our mission is to bring value, innovation, and trust to every experience.
      </p>

      {/* Shopping With Us Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-12 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Shopping With Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Shop with confidence and ease! We offer a user-friendly experience,
          secure checkout, fast delivery, and a satisfaction guarantee on all
          products. Whether you're browsing the latest trends or looking for
          something special, our curated collections make shopping simple and
          enjoyable.
        </p>

        {/* 🚀 Shop Now Button */}
        <Link
          to="/order"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Team / Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To be a global leader in innovation and quality.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To empower people through our solutions and services.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Innovation, Integrity & Customer Success.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-gray-500">
        © 2026 Our Company. All rights reserved.
      </p>
    </div>
  );
};

export default Aboutus;
