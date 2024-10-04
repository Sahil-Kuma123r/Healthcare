import React from 'react';

const Footer = () => {
  return (
    <div className="relative text-left bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
          <h3 className="font-bold text-3xl text-teal-400">E-Health Management System</h3>
          <p className="text-gray-400 mt-4">Revolutionize your healthcare experience with our cutting-edge e-health management system.</p>
          <form className="flex items-center mt-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="newsletter-email">
                Subscribe for our Newsletter
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-400"
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 className="uppercase tracking-wider font-semibold text-gray-400">Treatments</h5>
          <ul className="mt-4">
            <li className="mt-2"><a href="#" className="opacity-75 hover:opacity-100 text-teal-300">General Medicine</a></li>
            <li className="mt-2"><a href="#" className="opacity-75 hover:opacity-100 text-teal-300">Dermatologists</a></li>
            <li className="mt-2"><a href="#" className="opacity-75 hover:opacity-100 text-teal-300">Cardiologists</a></li>
            <li className="mt-2"><a href="#" className="opacity-75 hover:opacity-100 text-teal-300">Gynaecologists</a></li>
          </ul>
        </div>

        <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
          <h5 className="uppercase tracking-wider font-semibold text-gray-400">Contact Details</h5>
          <ul className="mt-4">
            <li>
              <a href="#" className="block flex items-center opacity-75 hover:opacity-100 text-teal-300">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                    <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                  </svg>
                </span>
                <span className="ml-3">Pune, Maharashtra, India</span>
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="block flex items-center opacity-75 hover:opacity-100 text-teal-300">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                    <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                  </svg>
                </span>
                <span className="ml-3">
                  Mon - Fri: 9:00AM - 9:00PM<br />
                  Closed on Weekends
                </span>
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="block flex items-center opacity-75 hover:opacity-100 text-teal-300">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                    <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                  </svg>
                </span>
                <span className="ml-3">+91 7011505312</span>
              </a>
            </li>
            <li className="mt-4">
              <a href="#" className="block flex items-center opacity-75 hover:opacity-100 text-teal-300">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                    <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                  </svg>
                </span>
                <span className="ml-3">sachinyadavsky70115053@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 className="uppercase tracking-wider font-semibold text-gray-400">We're Social</h5>
          <ul className="mt-4 flex">
            <li>
              <a href="https://www.linkedin.com/in/sachin-kumar-yadav-766859297" target="_blank" className="text-teal-300 hover:text-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                  <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.994,0,1.849,0.073,2.098,0.106v2.433l-1.441,0.001c-1.131,0-1.349,0.538-1.349,1.325v1.727h2.696l-0.351,2.725h-2.345L16.614,21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2023 Sachin Kumar Yadav. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
