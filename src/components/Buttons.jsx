import React from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

const Buttons = () => {
  return (
    <div className="flex space-x-4">
      <button className="bg-blue-600 text-white w-[130px] h-[40px] rounded-[40px] flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
        S'inscrire
        <HiOutlineArrowSmRight className="ml-3 w-6 h-6 text-white" />
      </button>

      <button className="bg-white text-blue-600 w-[130px] h-[40px] rounded-[40px] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 font-light">
        Talk to chatbot
      </button>
    </div>
  );
};

export default Buttons;
