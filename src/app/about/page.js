import React from 'react';
import CommonHeroSectionCard from '../../components/CommonSection';
import bannerImg from '../../assets/banner.jpg';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Hair Station</title>
        <meta name="description" content="Discover Hair Station, offering top-quality hair solutions and natural hair wigs for men and women." />
        <meta name="keywords" content="Hair Station, natural hair wigs, hair solutions, men wigs, women wigs, hair loss solutions" />
      </Head>
      <CommonHeroSectionCard
        title='About Hair Station'
        imageSrc={bannerImg}
        description=''
      />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-blue-800">Our Values</h3>
          <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-2"></div>
          <div className="max-w-7xl mx-auto text-gray-500">
            <p className="text-lg leading-relaxed">
              With five years of expertise in non-surgical hair replacement, we specialize in creating natural, comfortable hair solutions. Our commitment to quality and personalized service ensures you regain confidence with a perfect hair match. Trust us for exceptional results and a renewed self-image.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Quality</h4>
              <p className="text-gray-700">
                We believe in delivering the highest quality natural hair wigs to our customers.
              </p>
            </div>
            {/* Customer Satisfaction */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Customer Satisfaction</h4>
              <p className="text-gray-700">
                Our customers' satisfaction is our top priority, and we strive to exceed their expectations.
              </p>
            </div>
            {/* Integrity */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Integrity</h4>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and integrity.
              </p>
            </div>
            {/* Innovation */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Innovation</h4>
              <p className="text-gray-700">
                We continuously innovate and improve our products and services to meet the evolving needs of our customers.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-1 text-blue-800">Why Choose Us</h3>
            <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-2"></div>
            <p className="max-w-7xl mx-auto text-lg text-gray-500">
              Our expertise lies in creating natural-looking, comfortable, and durable hair systems tailored to individual needs. We pride ourselves on exceptional customer service, innovative techniques, and a passion for boosting our clients' confidence and self-esteem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personalized Solutions */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Personalized Solutions</h4>
              <p className="text-gray-700">
                Each hair system is tailored to your individual needs, ensuring a perfect match and a natural look.
              </p>
            </div>
            {/* Comfort and Durability */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Comfort and Durability</h4>
              <p className="text-gray-700">
                Our hair systems are designed to be comfortable and long-lasting, providing you with peace of mind.
              </p>
            </div>
            {/* Exceptional Customer Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Exceptional Customer Service</h4>
              <p className="text-gray-700">
                Our team is dedicated to providing you with the best possible experience, from consultation to aftercare.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-1 text-blue-800">Our Commitment</h3>
            <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-2"></div>
            <p className="max-w-7xl mx-auto text-lg text-gray-500">
              We are committed to excellence in craftsmanship, customer satisfaction, and continuous improvement in hair restoration technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence in Craftsmanship */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Excellence in Craftsmanship</h4>
              <p className="text-gray-700">
                Our skilled team uses the best materials and techniques to create hair systems that look and feel natural.
              </p>
            </div>
            {/* Continuous Improvement */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Continuous Improvement</h4>
              <p className="text-gray-700">
                We stay at the forefront of hair restoration technology to offer you the latest and best solutions.
              </p>
            </div>
            {/* Customer Focus */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Customer Focus</h4>
              <p className="text-gray-700">
                We listen to our customers and constantly seek ways to enhance our products and services to meet their needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
