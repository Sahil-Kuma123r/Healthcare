import React from 'react';
import { FaCalendarCheck, FaHistory, FaCalendarAlt, FaDonate } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="p-8 bg-gray-300 min-h-screen">
      
  
      <h1 className="text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-indigo-600 mb-12 font-serif">
        Health is Wealth
      </h1>
      
      
      <div className="flex flex-wrap gap-12 justify-start p-8">
        
      
        <div className="flex flex-col items-center justify-center w-72 h-72 bg-gradient-to-b from-gray-700 via-gray-800 to-black text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer font-mono">
          <FaCalendarCheck className="text-6xl mb-4" />
          <span>All Appointments</span>
        </div>

        
        <div className="flex flex-col items-center justify-center w-72 h-72 bg-gradient-to-b from-green-700 via-teal-700 to-teal-900 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer font-mono">
          <FaHistory className="text-6xl mb-4" />
          <span>Previous Appointments</span>
        </div>

        
        <div className="flex flex-col items-center justify-center w-72 h-72 bg-gradient-to-b from-yellow-700 via-orange-700 to-red-800 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer font-mono">
          <FaCalendarAlt className="text-6xl mb-4" />
          <span>Upcoming Appointments</span>
        </div>

        
        <div className="flex flex-col items-center justify-center w-72 h-72 bg-gradient-to-b from-purple-700 via-indigo-800 to-indigo-900 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer font-mono">
          <FaDonate className="text-6xl mb-4" />
          <span>Your Donations</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
