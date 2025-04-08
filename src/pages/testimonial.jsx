import React, { useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import TestimonialItem from "../components/TestimonialItem";

import Jhon from "../assets/Jhon.jpg";
import Morty from "../assets/Morty.jpg";
import Patrick from "../assets/Patrick.jpg";
import Rick from "../assets/Rick.jpg";
import fadePatrick from "../assets/fadePatrick.jpg";

function Testimonial() {
  const slider = useRef();
  let tx = 0;

  const slideForwared = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackwared = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const testimonials = [
    {
      name: "Jhon Wick",
      role: "Pro",
      image: Jhon,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil hic dicta rem iure quod quam soluta, vel perspiciatis dolorem.",
    },
    {
      name: "Patrick Bash",
      role: "Web Designer",
      image: Rick,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil hic dicta rem iure quod quam soluta, vel perspiciatis dolorem.",
    },
    {
      name: "Rick Sanchez",
      role: "Scientist",
      image: Morty,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil hic dicta rem iure quod quam soluta, vel perspiciatis dolorem.",
    },
    {
      name: "Morty Smith",
      role: "Entrepreneur",
      image: Patrick,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil hic dicta rem iure quod quam soluta, vel perspiciatis dolorem.",
    },
    {
      name: "Patrick Copper",
      role: "Web Designer",
      image: fadePatrick,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil hic dicta rem iure quod quam soluta, vel perspiciatis dolorem.",
    },
  ];
  const duplicatedTestimonials = testimonials.concat(testimonials);

  return (
    <div id="testimonial" className="m-40">
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <p className="text-blue-600 font-semibold text-xs">__Testimonial</p>
      <h1 className="font-bold mt-6 text-3xl md:text-4xl">Ce que nos utilisateurs disent de nous</h1>
      <p className="mt-5 text-sm md:text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Mollitia earum, expedita inventore soluta modi tempora? 
      </p>
     
      </div>
    <div className="my-20 mx-auto px-20 relative" >
      <div
        className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 p-4 w-12 rounded-full cursor-pointer bg-blue-700"
        onClick={slideForwared}
      >
        <MdArrowForwardIos className="text-white" />
      </div>

      <div
        className="back-btn absolute top-1/2 left-0 transform -translate-y-1/2 p-4 w-12 rounded-full cursor-pointer bg-blue-700"
        onClick={slideBackwared}
      >
        <MdArrowBackIos className="text-white" />
      </div>

      <div className="slider overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[80%] transition-transform duration-500"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </ul>
      </div>

      </div>
    </div>
  );
}

export default Testimonial;
