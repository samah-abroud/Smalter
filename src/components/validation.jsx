import React from 'react';
import UiBlock from '../assets/UIBlock.png';
import { Link } from 'react-router-dom';

function validation() {
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

      {/* Validation */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 ">Your data has been taken into account. </h2>
          <p className="text-m text-center text-gray-600 mb-10">We're almost there!</p>

          <p className="text-sm text-center text-gray-800 mb-10">Your data has been successfully taken into account. A confirmation will be sent to you by email once your account has been updated</p>
          <p className="text-sm text-center text-gray-500 mb-10">If you don't find our email, please check your spam folder.</p>
          
          <div className="flex justify-between space-x-4 "> 
            <Link
              to="/"
              className="w-1/3 text-center text-sm bg-white hover:bg-gray-100 text-blue-700 font-semibold py-2 rounded-full border border-blue-300"
            >
              Back to Home
            </Link>
            <Link
              to='/'
              type="submit"
              className="w-2/3 text-center bg-blue-700  hover:bg-blue-800  text-white font-semibold py-2 rounded-full"
            >
              Validated
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default validation;
