
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../public/image.jpg'; 
import { Menu } from '../data.js';
import logo from '../public/logo.jpg'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-6 mb-5 shadow-sm'>
      <div className='flex items-center gap-[7.5rem]'>
        {/* Logo Image */}
        <img src={logo} alt='logo' width={180} height={80} />

        {/* Navigation Menu */}
        <ul className='md:flex gap-10 hidden'>
          {Menu.map((item, index) => (
            <li key={index} className='cursor-pointer transition-all ease-in-out'>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-sky-500 scale-110 font-bold' 
                    : 'text-gray-800'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      
      <NavLink
        to='/register'
        className='text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2'
      >
        Register
      </NavLink>
    </div>
  );
};

export default Header;

