import Image from 'next/image';
import React from 'react';

function ServicesCard() {
  const services = [
    {
      id: 1,
      title: "Hair Wigs",
      description: "Our human hair wigs are among the finest in quality, providing a natural look and soft feel.",
      icon: "/Hair_Wigs.png",
    },
    {
      id: 2,
      title: "Hair Patch",
      description: "Experience high-quality, non-surgical hair restoration that re-creates the look and feel of your own natural hair.",
      icon: "/Hair_Patch.png",
    },
    {
      id: 3,
      title: "Hair Bonding",
      description: "This non-surgical, painless solution for hair loss offers effective results without any side effects.",
      icon: "/Hair_Bonding.png",
    }
  ];

  return (
    <div className="flex flex-wrap gap-7 justify-center mt-6">
      {services.map(service => (
        <div 
          key={service.id} 
          className="flex flex-col shadow-xl rounded-md w-72 md:w-80 lg:w-96 justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="p-6 flex flex-col justify-center items-center">
            <Image 
              src={service.icon} 
              alt={service.title} 
              className="rounded-3xl border border-black mb-5" 
              width={100} 
              height={100} 
            />
            <h5 className="mb-2 font-semibold text-center text-gray-900 hover:text-gray-700">
              {service.title}
            </h5>
            <p className="text-base text-center text-gray-600">
              {service.description}
            </p>
          </div>
          <div className="p-6 mb-6">
            <button
              className="align-middle font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md transition-colors duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCard;
