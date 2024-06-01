import React from "react";
import CommonHeroSectionCard from '../../components/CommonSection'
import bannerImg from '../../assets/banner.jpg'
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
     <Head>
        <title>About Us | Hair Station</title>
        <meta name="description" content="Learn more about Hair Station, our top-quality hair solutions, and our natural hair wigs designed for both men and women." />
        <meta name="keywords" content="Hair Station, natural hair wigs, hair solutions, men wigs, women wigs, hair loss solutions" />
      </Head>
      <CommonHeroSectionCard
        title='About Hair Station'
        imageSrc={bannerImg}
        description='Learn more about our company.'
      />
      <div className="container mx-auto py-8 p-8">
        {/* <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-blue-800">
            About Hair Station
          </h2>
          <p className="text-lg text-gray-700">Learn more about our company.</p>
        </div> */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">
            Our History
          </h3>
          <p className="text-lg text-gray-700 leading-7">
            Hair Station was founded in [year] with the aim of providing
            top-quality natural hair wigs for both men and women. Over the
            years, we have grown into a trusted name in the industry, serving
            customers with care and dedication.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Value Cards */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-gray-700">
                We believe in delivering the highest quality natural hair wigs
                to our customers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-gray-700">
                Our customers' satisfaction is our top priority, and we strive
                to exceed their expectations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and
                integrity.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-gray-700">
                We continuously innovate and improve our products and services
                to meet the evolving needs of our customers.
              </p>
            </div>
            {/* End of Value Cards */}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">
            Our Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Achievement Cards */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xl font-semibold mb-2">
                Award for Excellence in Natural Hair Wigs
              </p>
              <p className="text-gray-700">Year</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xl font-semibold mb-2">
                Recognition for Outstanding Customer Service
              </p>
              <p className="text-gray-700">Year</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xl font-semibold mb-2">
                Featured in [Publication Name] as a Leading Hair Wig Provider
              </p>
              <p className="text-gray-700">Year</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xl font-semibold mb-2">
                [Any other achievements or recognitions]
              </p>
              <p className="text-gray-700">Year</p>
            </div>
            {/* End of Achievement Cards */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
