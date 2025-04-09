import React from "react";

function resultat() {
  const data = [
    {
      number: "22K+",
      description: "Customer satisfaction",
    },
    {
      number: "459",
      description: "Team members",
    },
    {
      number: "12K",
      description: "Active users",
    },
    {
      number: "100%",
      description: "Company growth",
    },
  ];
  return (
    <div className="bg-blue-700 w-full h-full mt-20">
      <div className="flex flex-col justify-center pt-16 items-center text-white font-semibold text-s text-center">
        <p>Resultat</p>
        <span className="text-center">___</span>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10 text-white">
        {" "}
        Nos résultats en chiffres
      </h1>

      <div className="flex justify-center items-center mt-16 gap-28 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-4 mb-20 "
          >
            <div className="bg-blue-600 w-40 h-40 rounded-lg flex justify-center items-center ">
              <div className="bg-white w-28 h-28 rounded-lg flex flex-col justify-center items-center">
                <p className="text-xl font-bold text-center ">{item.number}</p>
                <p className="text-xs  text-center">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default resultat;
