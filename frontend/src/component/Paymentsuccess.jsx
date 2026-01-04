import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatchcart } from '../component/Contextapi';

const Paymentsuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatchcart();

  useEffect(() => {
    // 1. Clear the cart immediately on success
    dispatch({ type: "CLEAR" });

    // 2. Redirect to home after 2 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Redirecting you to the home page...</p>
    </div>
  );
};

export default Paymentsuccess;