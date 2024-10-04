import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'

const RoomHome = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4 animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 animate-pulse">Emergency Video Call to Doctors</h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder='Enter Room Code'
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleJoinRoom}
          className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Join
        </button>
      </div>
    </div>
  )
}

export default RoomHome
