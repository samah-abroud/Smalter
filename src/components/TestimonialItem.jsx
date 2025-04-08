
import  {React, useRef } from "react";
import { RiStarSFill } from "react-icons/ri";

const TestimonialItem = ({ name, role, image, rating, description }) => {
  const stars = Array(rating).fill(<RiStarSFill className="text-blue-600" />);

  return (
    <li className="w-1/2 p-3">
      <div className="slide shadow-lg p-5 rounded-xl text-gray-600 leading-6">
        <div className="w-72">
          <div className="user-info flex items-center mb-4 text-sm">
            <img src={image} alt={name} className="w-16 rounded-full mr-3 border-4" />
            <div>
              <h3 className="text-black font-semibold">{name}</h3>
              <div className="flex justify-between items-center">
              <span>{role}</span>
                <div className="flex ml-28">
                  {stars.map((star, index) => (
                    <span key={index} className="items-center ">{star}</span>
                  ))}
                </div>
              </div>
               
            </div>
          </div>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default TestimonialItem;
