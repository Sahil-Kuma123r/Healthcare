
import React from 'react';
import { specialties } from '../data.js';
import { useNavigate } from 'react-router-dom';

const CategorySearch = () => {
  const navigate=useNavigate();
  return (
    <div className='mb-10 flex flex-col items-center gap-4  w-full border-2 '>
      <h2 className='font-bold text-3xl sm:text-4xl tracking-wide'>
        Search <span className='text-sky-300'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-lg sm:text-xl'>
        Search Your Doctor and Book Appointment in One Click
      </h2>

      <div className="w-full max-w-lg">
        <form className="flex items-center w-full">
          <label htmlFor="voice-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <input 
              type="text" 
              id="voice-search" 
              className="w-full h-12 p-4 text-lg bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search for Doctors..." 
              required 
            />
          </div>
          <button type="submit" 
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            Search
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-11 items-center w-full border-2 p-2 ">
        <div className="flex gap-5 w-[80%] border-yellow-950   overflow-x-auto">
          {specialties.map((data, index) => {
            return (
              <div key={index} onClick={()=>navigate('/emergency')} className="flex cursor-pointer flex-col items-center flex-shrink-0 w-1/5">
                <img 
                  src={data.image}  
                  alt={data.specialty} 
                  className="w-24 h-24 rounded-full border-2  object-cover mb-2" 
                />
                <h1 className="text-lg sm:text-xl text-black-800 text-center">{data.specialty}</h1> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
