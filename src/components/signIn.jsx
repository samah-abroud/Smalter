import React, { useState } from 'react';
import UiBlock from '../assets/UiBlock.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

function SignIn() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const ifPasswordMatch = password === confirmPassword;

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      
      <div className="md:w-1/2 relative hidden md:block">
        <div
          className="h-full bg-cover bg-center flex flex-col justify-center items-center px-8 text-center"
          style={{ backgroundImage: `url(${UiBlock})` }}
        >
          <div className="text-white space-y-6 z-10 text-left">
            <h1 className="text-4xl md:text-5xl font-bold shadow-lg">
              The easiest way to <br /> create your COMPANY.
            </h1>
            <p className="text-sm font-light max-w-md">
              Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-40 z-0" />
        </div>
      </div>

      {/* SignIn Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-10">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">First name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Last name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Wick"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 555 505 5050"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Johnwick@smalter.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Confirm your password</label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 ${
                    ifPasswordMatch ? 'border-green-500' : 'border-red-500'
                  }`}
                  placeholder="••••••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {ifPasswordMatch ? (
                    <IoCheckmarkCircle className="text-green-500 text-2xl" />
                  ) : (
                    <IoCloseCircle className="text-red-500 text-2xl" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" required />
              <span className='text-gray-600 ml-2'>I accept </span>
              <label> Terms of Use and Privacy Policy.</label>
            </div>
            <div className="flex justify-between space-x-4">
              <Link
                to="/"
                className="w-1/3 text-center text-sm bg-white hover:bg-gray-100 text-blue-700 font-semibold py-2 rounded-full border border-blue-300"
              >
                Back to Home
              </Link>
              <Link
              to='/validation'
                type="submit"
                className="w-2/3 text-center bg-blue-700  hover:bg-blue-800  text-white font-semibold py-2 rounded-full"
              >
                Continue
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-gray-500 text-sm border border-gray-300 hover:bg-gray-200 font-semibold py-2 rounded-full flex items-center justify-center space-x-2"
            >
              <FcGoogle className="text-lg" />
              <span>Continue with Google</span>
            </button>
          </form>
          <p className="text-gray-500 text-sm text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
