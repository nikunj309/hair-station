import React from 'react';
import Image from 'next/image';
import aboutImage from '../assets/josh-testimonial.jpg'; // Update the path to your image
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Hair Station</title>
        <meta name="description" content="Learn more about Hair Station, our top-quality hair solutions, and our natural hair wigs designed for both men and women." />
        <meta name="keywords" content="Hair Station, natural hair wigs, hair solutions, men wigs, women wigs, hair loss solutions" />
      </Head>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:flex-row-reverse lg:items-center">
            <div className="lg:w-1/2 p-4">
              <Image src={aboutImage} alt="Hair Transplant Solutions" className="rounded-lg shadow-lg mx-auto lg:mx-0" />
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-center items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-1 text-center">Hair Transplant Solutions</h2>
                <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-2"></div>
                <p className="text-lg text-gray-500 mb-4 text-center">
                  With five years of expertise in non-surgical hair replacement, we specialize in creating natural, comfortable hair solutions. Our commitment to quality and personalized service ensures you regain confidence with a perfect hair match. Trust us for exceptional results and a renewed self-image.
                </p>
                <a href='/non-surgical-hair-replacement' className='items-center justify-center flex'>
                  <button className="mt-8 px-8 py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-[#434141] transition duration-300">
                    View All Hair Transplant Solutions
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
