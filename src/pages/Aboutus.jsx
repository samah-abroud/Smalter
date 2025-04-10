import React from "react";
import image from "../assets/image.jpg";

import { TiArrowRight } from "react-icons/ti";

function About() {
  return (
    <div  id="about">
      <div className="relative mt-96">
        <img
          src={image}
          alt="pic1"
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        />

        <div className="mt-54 ml-40">
          <p className="text-blue-600 font-semibold text-xs">
            {" "}
            __Descriptive text{" "}
          </p>
          <h1 className="font-bold mt-6 text-3xl">About us</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Mollitia earum, expedita inventore soluta modi tempora? <br />
            Dolor ab aspernatur id optio dolore.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Mollitia earum.
          </p>
          <button className="bg-blue-600 text-white text-sm w-[130px] h-[40px] rounded-[40px] flex items-center justify-center mt-8">
            S'inscrire
            <TiArrowRight className="ml-2 w-6 h-6 text-white " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
