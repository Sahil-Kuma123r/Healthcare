// import React from 'react'
// import {doctors} from '../data.js'
// import DoctorCard from './DoctorCard'

// const TopDoctors = () => {
//     console.log(doctors)
//   return (
//     <div>
//         <h1>Top Doctors </h1>
//         <p> Simply browse through our extensive list of trusted doctors </p>

//         <div>

//             {doctors.slice(0,10).map(data,index)=>{
//       return (
//         <div className="flex flex-wrap justify-center">
//             {doctors.map((doctor) => (
//                 <DoctorCard
//                     key={doctor._id}
//                     image={doctor.image}
//                     name={doctor.name}
//                     specialty={doctor.specialty}
//                     experience={doctor.experience}
//                     price={doctor.fees}
//                     id={doctor._id} // Pass the ID as a prop
//                 />
//             ))}
//         </div>
//     )

//             }}


//         </div>



    

      
      
//     </div>
//   )
// }

// export default TopDoctors



// import React from 'react';
// import { doctors } from '../data.js'; // Import your doctors data
// import DoctorCard from './DoctorCard'; // Import the DoctorCard component

// const TopDoctors = () => {
//     console.log(doctors);

//     return (
//         <div flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 >
//             <h1>Top Doctors</h1>
//             <p>Simply browse through our extensive list of trusted doctors</p>

//              <div className="flex flex-wrap justify-center">
//                 {doctors.slice(0, 10).map((doctor) => ( 
//                     <DoctorCard
//                         key={doctor._id}
//                         image={doctor.image}
//                         name={doctor.name}
//                         specialty={doctor.specialty}
//                         experience={doctor.experience}
//                         price={doctor.fees}
//                         id={doctor._id} 
//                     />
//                 ))}
//             </div> 


            
//         </div>
//     );
// };

// export default TopDoctors;




// import React, { useState } from 'react'; // Import useState for managing state
// import { doctors } from '../data.js'; // Import your doctors data
// import DoctorCard from './DoctorCard'; // Import the DoctorCard component

// const TopDoctors = () => {
//     console.log(doctors);

//     const [visibleCount, setVisibleCount] = useState(10); // State to control the number of visible doctors

//     const loadMoreDoctors = () => {
//         setVisibleCount((prevCount) => prevCount + 5); // Load 5 more doctors
//     };

//     return (
//         <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
//             <h1 className="text-2xl font-bold">Top Doctors</h1>
//             <p className="text-lg">Simply browse through our extensive list of trusted doctors</p>

//             <div className="flex flex-wrap justify-center w-4/5">
//                 {doctors.slice(0, visibleCount).map((doctor) => (
//                     <div className="w-1/5 p-2" key={doctor._id}> {/* Each card takes 1/5 of the width */}
//                         <DoctorCard
//                             image={doctor.image}
//                             name={doctor.name}
//                             specialty={doctor.specialty}
//                             experience={doctor.experience}
//                             price={doctor.fees}
//                             id={doctor._id} 
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Load More Button */}
//             {visibleCount < doctors.length && (
//                 <button 
//                     onClick={loadMoreDoctors} 
//                     className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
//                 >
//                     Load More
//                 </button>
//             )}
//         </div>
//     );
// };

// export default TopDoctors;

import React, { useState } from 'react'; // Import useState for managing state
// import { doctors } from '../data.js'; // Import your doctors data
import DoctorCard from './DoctorCard'; // Import the DoctorCard component

import {useContext} from 'react'
import {AppContext} from '../context/AppContext.jsx'


const TopDoctors = () => {
    const [visibleCount, setVisibleCount] = useState(8); // State to control the number of visible doctors (2 rows of 4 cards)
    const {doctors} =useContext(AppContext)

    const loadMoreDoctors = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, doctors.length)); // Load 4 more doctors, but not exceeding total
    };

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            {/* Highlighted heading */}
            <h1 className="text-3xl font-bold bg-sky-500 text-white py-2 px-4 rounded">
                Top Doctors
            </h1>
            <p className="text-lg">Simply browse through our extensive list of trusted doctors</p>

            {/* Container for doctor cards set to 80% of the parent */}
            <div className="flex flex-wrap justify-center w-4/5">
                {doctors.slice(0, visibleCount).map((doctor) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={doctor._id}>
                        <DoctorCard
                            image={doctor.image}
                           

                            name={doctor.name}
                            specialty={doctor.specialty}
                            experience={doctor.experience}
                            price={doctor.fees}
                            id={doctor._id} 
                        />
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < doctors.length && (
                <button 
                    onClick={loadMoreDoctors} 
                    className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default TopDoctors;
