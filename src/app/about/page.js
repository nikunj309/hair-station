import React from "react";
import CommonHeroSectionCard from '../../components/CommonSection';
import bannerImg from '../../assets/banner.jpg';
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
        description='Learn more about our company and how we strive to provide the best non-surgical hair replacement solutions.'
      />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-12 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our Values</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            With five years of expertise in non-surgical hair replacement, we specialize in creating natural, comfortable hair solutions. Our commitment to quality and personalized service ensures you regain confidence with a perfect hair match. Trust us for exceptional results and a renewed self-image.
          </p>
        </section>
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Quality</h4>
              <p className="text-gray-700">
                We believe in delivering the highest quality natural hair wigs to our customers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Customer Satisfaction</h4>
              <p className="text-gray-700">
                Our customers' satisfaction is our top priority, and we strive to exceed their expectations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Integrity</h4>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and integrity.
              </p>
            </div>
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
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Why Choose Us</h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Our expertise lies in creating natural-looking, comfortable, and durable hair systems tailored to individual needs. We pride ourselves on exceptional customer service, innovative techniques, and a passion for boosting our clients' confidence and self-esteem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Personalized Solutions</h4>
              <p className="text-gray-700">
                Each hair system is tailored to your individual needs, ensuring a perfect match and a natural look.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Comfort and Durability</h4>
              <p className="text-gray-700">
                Our hair systems are designed to be comfortable and long-lasting, providing you with peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Exceptional Customer Service</h4>
              <p className="text-gray-700">
                Our team is dedicated to providing you with the best possible experience, from consultation to aftercare.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our Commitment</h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              We are committed to excellence in craftsmanship, customer satisfaction, and continuous improvement in hair restoration technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Excellence in Craftsmanship</h4>
              <p className="text-gray-700">
                Our skilled team uses the best materials and techniques to create hair systems that look and feel natural.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Continuous Improvement</h4>
              <p className="text-gray-700">
                We stay at the forefront of hair restoration technology to offer you the latest and best solutions.
              </p>
            </div>
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
