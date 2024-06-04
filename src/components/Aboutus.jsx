// import React from 'react';
// import Image from 'next/image';
// import aboutImage from '../assets/i1.jpg'; // Update the path to your image
// import Head from 'next/head';

// const AboutUs = () => {
//   return (
//     <>
//     <Head>
//     <title>About Us | Hair Station</title>
//     <meta name="description" content="Learn more about Hair Station, our top-quality hair solutions, and our natural hair wigs designed for both men and women." />
//     <meta name="keywords" content="Hair Station, natural hair wigs, hair solutions, men wigs, women wigs, hair loss solutions" />
//   </Head>
//     <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-8 bg-gray-100">
//       <div className="lg:w-1/2 p-4">
//         <h2 className="text-3xl font-bold mb-4">About Us</h2>
//         <p className="text-lg text-gray-700 mb-4">
//           Since our inception, we at Hair Station have been dedicated to providing top-quality hair solutions, specializing in natural hair wigs for both men and women. Our extensive range includes wigs of various sizes, lengths, and colors, designed to meet the unique needs of each individual.
//         </p>
//         <p className="text-lg text-gray-700 mb-4">
//           Our state-of-the-art technology ensures that our wigs not only look natural but also fit seamlessly with your personal style. Whether you are looking to restore your youthful appearance or boost your confidence, our hair wigs offer numerous advantages over other hair loss solutions.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 transition-colors">
//           Read More
//         </button>
//       </div>
//       <div className="lg:w-1/2 p-4">
//         <Image src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
//       </div>
//     </div>
//     </>
//   );
// };

// export default AboutUs;


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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <Image src={aboutImage} alt="Hair Transplant Solutions" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:col-span-1 flex items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Hair Transplant Solutions</h2>
              <p className="text-lg text-gray-600 mb-4">
              With five years of expertise in non-surgical hair replacement, we specialize in creating natural, comfortable hair solutions. Our commitment to quality and personalized service ensures you regain confidence with a perfect hair match. Trust us for exceptional results and a renewed self-image.
              </p>
              <button className="mt-8 px-8 py-3  bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-[#434141] transition duration-300">
                View All Hair Transplant Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
