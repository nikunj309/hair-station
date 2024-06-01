import React from 'react';
// import img1 from '/img1.jpg'

import CommonHeroSectionCard from '../../components/CommonSection'
import bannerImg from '../../assets/banner.jpg'

const GallerySection = () => {
    return (
        <>
            <CommonHeroSectionCard
        title='Hair Wig Gallery'
        imageSrc={bannerImg}
        description='Browse through our collection of natural hair wigs.'
      />
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-6">
                {/* Gallery items */}
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 1" className="w-full h-full object-cover" />
                </div>
                {/* Add more gallery items */}
                {/* Example of more gallery items */}
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                {/* Add more gallery items as needed */}
            </div>
        </div>
        </>
    );
};

export default GallerySection;
