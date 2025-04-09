import React from "react";

function ServiceCard({ type, name, picture, description }) {
  return (
    <div className="border p-4 w-72 mt-6 mb-8">
      <p className="text-indigo-500 text-sm">{type}</p>
      <h3 className="text-2xl font-thin mt-4">{name}</h3>
      <div className="flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm">{description}</p>
        <a
          href=""
          className="border-blue-600 text-blue-600 text-xs border-b-2 mt-2 self-start"
        >
          Show more
        </a>
      </div>
      <img src={picture} className="w-40 m-10" />

      <div className="flex items-center justify-between mt-5">
        <p className=" py-2 rounded-full mr-4 text-indigo-500 text-sm">
          Limited offer
        </p>
        <button className="bg-blue-600 text-white w-[100px] h-[35px] rounded-full flex items-center justify-center text-sm">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
