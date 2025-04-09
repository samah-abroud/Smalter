import React from "react";
import girl1 from "../assets/girl1.jpg";
import group from "../assets/group.jpg";
import girl2 from "../assets/girl2.jpg";
import { TiArrowRight } from "react-icons/ti";

function join() {
  return (
    <div className="mt-72 flex justify-center px-4 md:px-0" id="about">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
          <img
            src={girl1}
            alt="Image 1"
            className="w-32 h-auto object-cover md:h-full"
          />
          <img
            src={group}
            alt="Image 2"
            className="w-32 h-auto object-cover md:h-full"
          />
          <img
            src={girl2}
            alt="Image 3"
            className="w-32 h-auto object-cover md:h-full"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-blue-600 font-semibold text-xs">
            __Rejoignez-nous
          </p>
          <h1 className="font-bold mt-6 text-3xl md:text-4xl">
            Enjoy your time working
          </h1>
          <p className="mt-5 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Mollitia earum, expedita inventore soluta modi tempora? <br />
            Dolor ab aspernatur id optio dolore.
          </p>
          <button className="bg-white text-blue-600 text-sm w-[130px] h-[40px] rounded-[40px] flex items-center justify-center mt-4">
            En savoir plus
            <TiArrowRight className="ml-2 w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default join;
