import React from 'react';
import Serv1 from "../assets/Serv1.jpg";
import Serv2 from "../assets/Serv2.jpg";
import Serv3 from "../assets/Serv3.jpg";
import Serv4 from "../assets/Serv4.jpg";

function Services() {
  const service = [
    {
      type: "New",
      name: "Service 1",
      picture: Serv1,
      description: "Our branding service encompasses a comprehensive range of offerings designed to elevate your brand and make..."
    },
    {
      type: "Best seller",
      name: "Service 2",
      picture: Serv2,
      description: "Our branding service encompasses a comprehensive range of offerings designed to elevate your brand and make..."
    },
    {
      type: "Client choice",
      name: "Service 3",
      picture: Serv3,
      description: "Our branding service encompasses a comprehensive range of offerings designed to elevate your brand and make..."
    },
    {
      type: "Best seller",
      name: "Service 4",
      picture: Serv4,
      description: "Our branding service encompasses a comprehensive range of offerings designed to elevate your brand and make..."
    }
  ];

  return (
    <div id="services" className="mt-10">
      <div className="flex flex-col justify-center pt-16 items-center text-blue-600 font-semibold text-s text-center">
        <p>Our recommended services</p>
        <span className='text-center'>___</span>
      </div>
      <h1 className="text-3xl font-bold text-center mt-6">Browse our services</h1>

      <p className="mt-4 text-center text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Reiciendis, non reprehenderit adipisci repellat corrupti.</p>

      <div className="space-y-6 flex justify-center gap-5 m-10 flex-wrap">
        {service.map((item, index) => (
          <div key={index} className="border p-4 w-72"> 
            <p className="text-gray-500">{item.type}</p>
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <img src={item.picture} className='w-40 m-10' />
            
              <p className="mt-2 text-gray-700">{item.description}</p>
              <span><a href="" className='border-blue-600 text-blue-600 text-xs border-b-2'>Show more</a></span>
            
              <div className="flex items-center justify-between mt-5"> 
  <p className=" py-2 rounded-full mr-4 text-gray-500">Limited offer</p> 
  <button className="bg-blue-600 text-white w-[130px] h-[40px] rounded-full flex items-center justify-center">
En savoir plus
  </button>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
