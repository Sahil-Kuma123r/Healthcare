// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import DoctorCard from './DoctorCard';

// const Doctors = () => {
    
//     const {doctors} =useContext(AppContext);
//     const [filterDoc,setFilterDoc]=useState([]);
//     const [speciality,setSpeciality]=useContext("");


//     const applyFilter=()=>{
//         if(speciality){
//             setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
//         }

//         else{
//             setFilterDoc(doctors)
//         }
//     }


//     useEffect(()=>{
//         applyFilter()

//     },[doctors,speciality])

//   return (
//     <div>
//         <p className='text-gray-600'>Browse through the doctors specialist</p>
//         <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>


//             <div className=' flex flex-col gap-4 text-sm text-gray-600'>
//                 <p  className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">General Physician</p>
//                 <p className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">Gynecologist</p>
//                 <p className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">Dermatologist</p>
//                 <p className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">Pediatricians</p>
//                 <p className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">Neurologist</p>
//                 <p className="{`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer}">General Medicine</p>
//             </div>

//             <div className='w-full grid grid-cols-auto gap-4 gap-y-6 '>
                
//                     {filterDoc.map((doctor) => (
//                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={doctor._id}>
//                           <DoctorCard
//                                image={doctor.image}
                                               
                    
//                              name={doctor.name}
//                          specialty={doctor.specialty}
//                     experience={doctor.experience}
//                         price={doctor.fees}
//              id={doctor._id} 
//                     />
//              </div>
//          ))}

                
//             </div>


//         </div>
      
//     </div>
//   )
// }

// export default Doctors

// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';
// import DoctorCard from './DoctorCard';

// const Doctors = () => {
//     const { doctors } = useContext(AppContext);
//     const [filterDoc, setFilterDoc] = useState([]);
//     const [speciality, setSpeciality] = useState(""); 

//     // const applyFilter = () => {
//     //     console.log("Current specialty:", speciality); 
//     //     if (speciality) {
//     //         const filteredDoctors = doctors.filter(doc => doc.speciality === speciality);
//     //         console.log("Filtered Doctors:", filteredDoctors); 
//     //         setFilterDoc(filteredDoctors);
//     //     } else {
//     //         setFilterDoc(doctors);
//     //     }
//     // }

//     useEffect(() => {
//     }, [speciality]);

//     const handleSpecialityClick = (spec) => {
//         setSpeciality(spec); 
//         console.log("Selected specialty:", spec); 
//     }

//     return (
//         <div>
//             <p className='text-gray-600'>Browse through the doctors specialist</p>
//             <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

//                 <div className='flex flex-col gap-4 text-sm text-gray-600'>
//                     <p onClick={() => handleSpecialityClick("General Physician")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">General Physician</p>
//                     <p onClick={() => handleSpecialityClick("Gynecology")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">Gynecologist</p>
//                     <p onClick={() => handleSpecialityClick("Dermatology")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">Dermatologist</p>
//                     <p onClick={() => handleSpecialityClick("Pediatricis")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">Pediatricians</p>
//                     <p onClick={() => handleSpecialityClick("Neurology")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">Neurologist</p>
//                     <p onClick={() => handleSpecialityClick("General Medicine")} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer">General Medicine</p>
//                 </div>

//                 <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//                     {
//                         speciality == "" ? 
                    
//                     doctors.map((doctor) => (
//                         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={doctor._id}>
//                              <DoctorCard
//                                 image={doctor.image}
//                                 name={doctor.name}
//                                 specialty={doctor.speciality}
//                                 experience={doctor.experience}
//                                 price={doctor.fees}
//                                 id={doctor._id}
//                             /> 
//                         </div>
//                     ))

//                     :

//                     (doctors.filter(item => item.specialty == speciality)).map((doctor) => (
//                         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={doctor._id}>
//                              <DoctorCard
//                                 image={doctor.image}
//                                 name={doctor.name}
//                                 specialty={doctor.speciality}
//                                 experience={doctor.experience}
//                                 price={doctor.fees}
//                                 id={doctor._id}
//                             /> 
//                         </div>
//                     ))
//                 }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Doctors;


import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    const { doctors } = useContext(AppContext);
    const [filterDoc, setFilterDoc] = useState([]);
    const [speciality, setSpeciality] = useState("");

    useEffect(() => {
        if (speciality) {
            const filteredDoctors = doctors.filter(doc => doc.specialty === speciality);
            setFilterDoc(filteredDoctors);
        } else {
            setFilterDoc(doctors);
        }
    }, [speciality, doctors]);

    const handleSpecialityClick = (spec) => {
        setSpeciality(spec);
    };

    return (
        <div>
            <p className='text-sky-500 text-lg sm:text-xl md:text-2xl text-center font-semibold'>
                Browse through the doctors specialists
            </p>
            <div className='flex flex-col sm:flex-row items-star p-3 gap-5 mt-5'>

                <div className='flex flex-col pl-5 gap-4 text-sm text-gray-600'>
                    {["General Physician", "Gynecology", "Dermatology", "Pediatrics", "Neurology", "General Medicine"].map(spec => (
                        <p 
                            key={spec}
                            onClick={() => handleSpecialityClick(spec)}
                            className={`cursor-pointer pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 
                                ${speciality === spec ? 'bg-sky-200 text-sky-600' : 'hover:bg-gray-100'}`}
                        >
                            {spec}
                        </p>
                    ))}
                </div>

                <div className='w-full  ml-2 flex flex-wrap gap-4'>
                    {filterDoc.map((doctor) => (
                        <div className="flex-none w-full sm:w-1/3 md:w-1/5 p-2 transition-transform transform hover:scale-105" key={doctor._id}>
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
            </div>
        </div>
    );
}

export default Doctors;
