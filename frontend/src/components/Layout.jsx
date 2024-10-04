// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from './Header'
// import Footer from './Footer'

// const Layout = () => {
//   return (
//     <div>
//         <Header/>
//         <Outlet/>
//         <Footer/>
        
      
//     </div>
//   )
// }

// export default Layout



import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Layout = () => {
  // const [isValid, setIsValid] = useState(null); // State to handle validation status

  // useEffect(() => {
  //   const validfunc = async () => {
  //     try {
  //       let token = localStorage.getItem('token');
  //       // const response = await axios.post('http://localhost:3000/api/valid', { token: token });
  //       setIsValid(response.data.valid);
  //     } catch (error) {
  //       console.error('Validation Error:', error);
  //       setIsValid(false);
  //     }
  //   };
  //   validfunc();
  // }, []);

  // if (isValid === null) {
  //   // While validation is in progress, show a loading spinner or message
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) 
  //  (
    // <Navigate to="/login" replace={true} />
  // );
};

export default Layout;

