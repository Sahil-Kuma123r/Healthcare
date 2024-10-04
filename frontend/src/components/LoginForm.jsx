import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('User'); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ fullName, email, password, userType });
    };

    const navigate=useNavigate();

    return (
        <div className="flex items-center justify-center h-full p-9  bg-gradient-to-r from-green-300 to-blue-500">
            <div className="flex w-full max-w-6xl bg-white  rounded  shadow-lg overflow-hidden">
                
                <div className="flex-1 hidden md:flex items-center justify-center p-5">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459631_1280.png"
                        alt="Healthcare"
                        className="h-full w-full object-cover rounded-l"
                    />
                </div>

                
                <div className="flex-1 flex items-center justify-center p-8">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
                                Login as
                            </label>
                            <select
                                id="userType"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="User">User</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                                onClick={()=>navigate('/user')}
                            >
                                Login
                            </button>
                        </div>
                        <p className="text-center text-gray-600 text-xs mt-4">
                            &copy;2024 Healthcare Platform. All rights reserved.
                        </p>
                        <p className="text-center text-gray-600 text-xs mt-4">
                            New user? <NavLink to="/register" className="text-blue-600 hover:underline">Register here</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
