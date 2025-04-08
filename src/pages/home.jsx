import React from 'react';
import UiBlock from '../assets/UiBlock.png';
import { PiYoutubeLogoFill, PiSlackLogoBold } from "react-icons/pi";
import { SiAmazon } from "react-icons/si";
import { IoLogoGoogle } from "react-icons/io";
import { FaMicrosoft, FaAws } from "react-icons/fa6";
import Buttons from '../components/Buttons.jsx';
import Navbar from '../components/navbar.jsx'



function Home() {
  return (
    <div className="h-screen  relative" id="home">
      <div
        className="bg-cover bg-center h-full flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${UiBlock})` }}
      >
      <Navbar/>

        <div className="flex flex-col items-center justify-center space-y-4 text-center px-6">
          <h1 className="text-white text-6xl font-bold shadow-lg max-w-3xl">
            The easiest way to <br />
            create your COMPANY.
          </h1>
          <p className="text-white text-sm font-light max-w-md">
            Smalter gives you everything you need to create your company in minutes. A big team with a well-organized platform to work & develop your next company in minutes.
          </p>

          <Buttons />

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full  py-8">
        <h3 className="text-white font-extralight text-center">
          We have <span className="text-orange-300">240+ </span>Satisfied Clients.
        </h3>

        <div className="flex justify-center items-center gap-6 mt-4">
          <FaAws className="text-gray-300 text-4xl" />
          <FaMicrosoft className="text-gray-300 text-4xl" />
          <PiSlackLogoBold className="text-gray-300 text-4xl" />
          <PiYoutubeLogoFill className="text-gray-300 text-4xl" />
          <SiAmazon className="text-gray-300 text-4xl" />
          <IoLogoGoogle className="text-gray-300 text-4xl" />
        </div>
      </div>

    

    </div>
  );
}

export default Home;
