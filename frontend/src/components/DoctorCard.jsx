import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ image, name, specialty, experience, price, id }) => {
    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/doctor/${id}`); 
    };

    return (
        <div 
            className="max-w-xs mx-auto my-4 cursor-pointer p-2 rounded-lg border-[1px]" 
            onClick={handleCardClick} 
        >
            <div className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="w-full rounded-md h-48 relative">
                    <img 
                        className="absolute inset-0 w-full h-full rounded-md object-cover"
                        src={image} 
                        alt={name} 
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">{name}</h2>
                    <p className="text-gray-800 text-md">{specialty}</p>
                    <p className="text-gray-700 text-sm">Experience: {experience} years</p>
                    <p className="text-gray-900 font-bold text-lg">Fees: ₹{price}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
