import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Paymentfail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="text-6xl mb-4">❌</div>
      <h1 className="text-3xl font-bold text-red-700">Payment Failed</h1>
      <p className="text-gray-600 mt-2">Something went wrong. Returning to home...</p>
    </div>
  );
};

export default Paymentfail;