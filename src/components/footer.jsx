import React, { useState, useEffect } from "react";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [LastScroll, setLastScroll] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > LastScroll) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    setLastScroll(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [LastScroll]);

  return (
    <div>
      {showButton && (
        <div>
          <FaArrowCircleUp
            id="home"
            className="text-4xl text-blue-600 cursor-pointer fixed bottom-24 right-10 z-50"
            onClick={scrollToTop}
          />
        </div>
      )}

      <div className="flex flex-col justify-center items-center bg-white w-full h-full">
        <h1 className="text-2xl font-semibold mt-14 ">
          Subscribe to our newsletter
        </h1>
        <p className="text-center mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur <br />
          adipiscing elit phasellus amet dui
        </p>
        <div className="flex justify-between items-center space-x-4 m-16">
          <form action="post" className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-10 py-2 rounded-full mr-40"
            />
            <button className="bg-blue-600 text-white w-[130px] h-[40px] rounded-full flex items-center justify-center">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex  justify-between space-x-6 text-xl mb-10 text-gray-600">
          <RiFacebookFill />
          <AiFillInstagram />
          <RiLinkedinFill />
          <FaYoutube />
        </div>

        <p className="text-gray-800 mb-20">
          Copyright © 2025 Smalter | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
