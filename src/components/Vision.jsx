import React from 'react';
import Head from 'next/head';

const Vision = () => {
  return (
    <>
      <Head>
        <title>Our Vision | Hair Station</title>
        <meta name="description" content="Learn about the vision of Hair Station and how we aim to revolutionize the hair loss solutions industry." />
        <meta name="keywords" content="Hair Station, hair solutions, hair patches, hair loss solutions" />
      </Head>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              OUR VISION
            </h2>
            <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500"></div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              At <span className="font-bold">Hair Station</span>, our vision is to revolutionize the hair loss solutions industry by providing innovative, high-quality hair patches that restore confidence and enhance the natural beauty of our clients. We strive to offer personalized, non-surgical solutions that are both comfortable and affordable, ensuring a seamless blend with natural hair for a flawless, undetectable look. Our commitment is to excellence in craftsmanship, customer satisfaction, and continuous improvement in hair restoration technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
