import React from 'react';
import Head from 'next/head';
import hair1 from '../assets/hair1.png';
import hair2 from '../assets/hair2.png';
import hair3 from '../assets/hair3.png';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <>
      <Head>
        <title>Why Choose Us | Hair Station</title>
        <meta name="description" content="Discover why you should choose Hair Station for your hair solutions." />
        <meta name="keywords" content="Hair Station, hair solutions, top-quality wigs, hair loss solutions" />
      </Head>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              WHY CHOOSE HAIR STATION
            </h2>
            <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500"></div>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800">
              Transforming Lives with Top-notch Hair Solutions
            </h3>
            <p className="mt-4 text-base text-gray-600">
              With over five years of experience in the non-surgical hair replacement industry, we are committed to providing natural-looking, comfortable, and durable hair systems tailored to individual needs. Our exceptional customer service, innovative techniques, and passion for boosting our clients' confidence and self-esteem set us apart. Trust us to provide the perfect hair solution for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 rounded-full mb-4">
                <Image src={hair1} alt="Price Clarity" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Price Clarity</h3>
              <p className="mt-4 text-base text-gray-600">
                Without extra costs, you can witness clearly what you get with the money you paid from Hair Station.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 rounded-full mb-4">
                <Image src={hair2} alt="First-class service" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">First-class Service</h3>
              <p className="mt-4 text-base text-gray-600">
                We are available 24/7. You can contact us via WhatsApp or email and we will solve all your problems patiently and quickly.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-100 rounded-full mb-4">
                <Image src={hair3} alt="Top Hair Stylists" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Top Hair Stylists</h3>
              <p className="mt-4 text-base text-gray-600">
                Our stylists are absolute experts - highly trained and completely focused on your hair system. They can create the hairstyle that completely satisfies your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
