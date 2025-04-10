import React from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className="flex space-x-4">
      <Link to="/signIn" className="bg-blue-600 text-white w-[130px] h-[40px] rounded-[40px] flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
       Sign Up
        <HiOutlineArrowSmRight className="ml-3 w-6 h-6 text-white" />
      </Link>

      <button className="bg-white text-blue-600 w-[130px] h-[40px] rounded-[40px] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 font-light">
        Talk to chatbot
      </button>
    </div>
  );
};

export default Buttons;
