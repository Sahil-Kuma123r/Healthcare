import React, { useState } from 'react';
import { hospitalData } from '../data'; // Adjust the import based on your file structure

const DiseasePricePredictor = () => {
    const [selectedHospital, setSelectedHospital] = useState('');
    const [selectedDisease, setSelectedDisease] = useState('');
    const [averageCost, setAverageCost] = useState(null);
    const [costs, setCosts] = useState([]); // State to hold individual costs
    
    const hospitals = hospitalData; // Use the imported hospital data
    const hospitalNames = hospitals.map(hospital => hospital.hospitalName);

    const handleHospitalChange = (event) => {
        setSelectedHospital(event.target.value);
        setSelectedDisease(''); // Reset disease when hospital changes
        setAverageCost(null); // Reset average cost
        setCosts([]); // Reset individual costs
    };

    const handleDiseaseChange = (event) => {
        setSelectedDisease(event.target.value);
    };

    // Calculate average cost on button click
    const calculateAverageCost = () => {
        if (selectedHospital && selectedDisease) {
            const hospital = hospitals.find(h => h.hospitalName === selectedHospital);
            const treatmentCosts = hospital.treatments
                .filter(treatment => treatment.disease === selectedDisease)
                .map(treatment => treatment.cost);

            if (treatmentCosts.length > 0) {
                const avgCost = (treatmentCosts.reduce((acc, cost) => acc + cost, 0) / treatmentCosts.length).toFixed(2);
                setAverageCost(avgCost);
                setCosts(treatmentCosts); // Store individual costs
            } else {
                setAverageCost(null); // If no costs found, reset average cost
                setCosts([]); // Reset individual costs
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mb-72 p-4 mt-32 bg-white shadow-lg rounded-lg">
            {/* Bold heading at the top */}
            <h1 className="text-3xl font-bold mb-4 text-sky-500">
                Calculate Treatment Price
            </h1>
            <h2 className="text-lg text-gray-700 mb-4">
                Select a hospital and disease to find out the average treatment cost.
            </h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="hospital" className="block mb-2 font-medium">Select Hospital:</label>
                    <select
                        id="hospital"
                        value={selectedHospital}
                        onChange={handleHospitalChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">--Select Hospital--</option>
                        {hospitalNames.map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="disease" className="block mb-2 font-medium">Select Disease:</label>
                    <select
                        id="disease"
                        value={selectedDisease}
                        onChange={handleDiseaseChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={!selectedHospital}
                    >
                        <option value="">--Select Disease--</option>
                        {selectedHospital && hospitals.find(h => h.hospitalName === selectedHospital)?.treatments.map((treatment) => (
                            <option key={treatment.disease} value={treatment.disease}>{treatment.disease}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="button"
                    onClick={calculateAverageCost} // Calculate average cost on button click
                    className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
                >
                    Calculate Average Price
                </button>
            </form>

            {averageCost !== null && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg animate-bounce">
                    <h2 className="text-xl font-semibold">Average Cost:</h2>
                    <p className="text-lg">₹{averageCost}</p>
                    <h3 className="font-semibold mt-2">Individual Costs:</h3>
                    <ul className="list-disc pl-5">
                        {costs.map((cost, index) => (
                            <li key={index}>₹{cost}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DiseasePricePredictor;
