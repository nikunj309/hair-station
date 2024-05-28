import React from 'react';
import Image from 'next/image';
import whyChooseImage from '../assets/i1.jpg'; // Update the path to your image

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100">
      <div className="lg:w-1/2 p-4">
        <Image src={whyChooseImage} alt="Why Choose Us" className="rounded-lg shadow-lg" />
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Hair Station, we pride ourselves on delivering exceptional hair solutions that cater to your specific needs. Our commitment to quality and innovation ensures that you receive the best possible service and products.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team of experts uses the latest technology to create wigs that look and feel natural. We offer a wide variety of styles and colors, allowing you to choose the perfect wig to match your personal style.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you are looking to enhance your appearance or regain your confidence, our hair wigs provide a comfortable and realistic solution. Choose Hair Station for a reliable, high-quality hair restoration experience.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
