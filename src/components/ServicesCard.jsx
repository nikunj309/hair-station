import Image from 'next/image';
import React from 'react';
import i1 from '../assets/Hair_Wigs.png'
import i2 from '../assets/Hair_Patch.png'
import i3 from '../assets/Hair_Bonding.png'

function ServicesCard() {
  const services = [
    {
      id: 1,
      title: "Hair Wigs",
      description: "Our human hair wigs are among the finest in quality, providing a natural look and soft feel.",
      icon: i1,
    },
    {
      id: 2,
      title: "Hair Patch",
      description: "Experience high-quality, non-surgical hair restoration that re-creates the look and feel of your own natural hair.",
      icon: i2,
    },
    {
      id: 3,
      title: "Hair Bonding",
      description: "This non-surgical, painless solution for hair loss offers effective results without any side effects.",
      icon: i3,
    }
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-700">
          Discover our range of professional hair solutions tailored to your needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-7 justify-center">
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
    </div>
  );
}

export default ServicesCard;