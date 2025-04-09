import React from "react";
import video from "../assets/video.jpg";
import Buttons from "../components/Buttons.jsx";

function infos() {
  return (
    <div id="home">
      <div className="flex flex-col  items-center  mt-48 ml-16">
        <div className="flex flex-row items-center ">
          <img src={video} alt="pic" className="w-auto h-72 object-cover" />

          <div className="ml-16">
            <p className="text-blue-600 font-semibold text-xs">
              __Descriptive video{" "}
            </p>
            <h1 className="font-bold mt-6 text-3xl">
              Créez votre compte aujourd'hui et commencez gratuitement !
            </h1>
            <p className="mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Mollitia earum, expedita inventore soluta modi tempora?
            </p>
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default infos;
