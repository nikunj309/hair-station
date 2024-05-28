import React from 'react';
import Image from 'next/image';
import aboutImage from '../assets/i1.jpg'; // Update the path to your image

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-8 bg-gray-100">
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Since our inception, we at Hair Station have been dedicated to providing top-quality hair solutions, specializing in natural hair wigs for both men and women. Our extensive range includes wigs of various sizes, lengths, and colors, designed to meet the unique needs of each individual.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our state-of-the-art technology ensures that our wigs not only look natural but also fit seamlessly with your personal style. Whether you're looking to restore your youthful appearance or boost your confidence, our hair wigs offer numerous advantages over other hair loss solutions.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 transition-colors">
          Read More
        </button>
      </div>
      <div className="lg:w-1/2 p-4">
        <Image src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
