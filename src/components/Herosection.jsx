// import Image from 'next/image'
// import React from 'react'
// import herobanner from '../assets/herobg.jpg'

// const HeroSection = () => {
//     return (
//         <>
//             <div className="absolute inset-0 z-0">
//                 <Image src={herobanner} alt="herobanner" layout="fill" objectFit="cover" className="opacity-70" />
//             </div>
//             <div className="relative z-10 text-center text-black">
//                 <div>
//                     <h3 className="text-3xl md:text-5xl font-semibold font-old-standard-tt">Hair Patch</h3>
//                     <h1 className="text-6xl md:text-[100px] font-bold font-old-standard-tt">Service Centre</h1>
//                 </div>
//                 <p className="mt-4 max-w-xl mx-auto text-sm md:text-base font-inter">
//                     Professional and personalized hair patch services
//                 </p>
//                 <p className="text-sm md:text-base font-inter">tailored to your needs</p>
//                 <p className="text-sm md:text-base font-inter">for a natural look and feel</p>
//                 <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-[#434141]">
//                     Learn More
//                 </button>
//             </div>
//         </>
//     )
// }

// export default HeroSection
import Image from 'next/image';
import React from 'react';
import herobanner from '../assets/herobg.jpg';

const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
            <Image 
                src={herobanner} 
                alt="herobanner" 
                layout="fill" 
                objectFit="cover" 
                quality={100} 
                className="opacity-70"
            />
        </div>
        <div className="relative z-10 text-center px-4">
            <div className="mb-4">
                <h3 className="text-3xl md:text-5xl font-semibold font-serif">Hair Patch</h3>
                <h1 className="text-4xl md:text-7xl font-bold font-serif mt-2">Service Centre</h1>
            </div>
            <div className="max-w-xl mx-auto">
                <p className="mt-4 text-base md:text-lg font-light">
                    Professional and personalized hair patch services
                </p>
                <p className="mt-2 text-base md:text-lg font-light">
                    tailored to your needs for a natural look and feel
                </p>
            </div>
            <a href='/non-surgical-hair-replacement'>
            <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-md text-sm md:text-base hover:bg-[#434141]">
                Learn More
            </button>
            </a>
        </div>
    </div>
    );
}

export default HeroSection;
