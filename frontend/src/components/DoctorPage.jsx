import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_green.css'; 
import { useNavigate } from 'react-router-dom';

const DoctorDetailPage = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const { doctors } = useContext(AppContext);
    const doctor = doctors.find(doc => doc._id === id);
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [appointmentTime, setAppointmentTime] = useState('');

    const bookAppointment = () => {
        console.log(`Appointment booked for ${doctor.name} on ${appointmentDate.toLocaleDateString()} at ${appointmentTime}`);

        navigate('/login')
        alert(`Appointment booked for ${doctor.name} on ${appointmentDate.toLocaleDateString()} at ${appointmentTime}`);

    };

    if (!doctor) return <div>Doctor not found!</div>;

    return (
        <div className="container mx-auto py-10 px-4 md:px-0">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">{doctor.name}</h1>

                
                <div className="w-80 h-80 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-300 flex justify-center items-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="text-center mb-6">
                    <p className="text-lg font-semibold text-gray-800 mb-1">Specialty: <span className="text-blue-500">{doctor.specialty}</span></p>
                    <p className="text-lg font-semibold text-gray-800 mb-1">Degree: <span className="text-blue-500">{doctor.degree}</span></p>
                    <p className="text-lg font-semibold text-gray-800 mb-1">Experience: <span className="text-blue-500">{doctor.experience} years</span></p>
                    <p className="text-lg font-semibold text-gray-800 mb-4">Fees: <span className="text-blue-500">₹{doctor.fees}</span></p>
                    <p className="text-gray-700">{doctor.about}</p>
                </div>

                <h2 className="text-2xl font-bold mt-6 text-center">Book an Appointment</h2>
                <label className="block mb-2 text-center">Select Date:</label>
                <Flatpickr
                    value={appointmentDate}
                    onChange={(date) => setAppointmentDate(date[0])}
                    className="border border-gray-300 rounded w-full mb-4 p-2"
                    options={{
                        minDate: "today",
                        dateFormat: "Y-m-d",
                        enableTime: false,
                    }}
                />

                <label className="block mb-2 text-center">Select Time:</label>
                <div className="flex flex-wrap justify-center mb-4">
                    {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"].map((time) => (
                        <button
                            key={time}
                            onClick={() => setAppointmentTime(time)}
                            className={`border border-gray-300 rounded-md px-4 py-2 mx-2 mb-2 transition duration-300 ease-in-out ${appointmentTime === time ? 'bg-green-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                        >
                            {time}
                        </button>
                    ))}
                </div>

                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
                    onClick={bookAppointment}
                    disabled={!appointmentTime} 
                >
                    Confirm Appointment
                </button>
            </div>
        </div>
    );
};

export default DoctorDetailPage;
