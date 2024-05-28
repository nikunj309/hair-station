import Image from 'next/image'
import React from 'react'
import herobanner from '@/app/assets/herobg.jpg'

const HeroSection = () => {
    return (
        <>
            <div className="absolute inset-0 z-0">
                <Image src={herobanner} alt="herobanner" layout="fill" objectFit="cover" className="opacity-70" />
                {/* <div className="absolute inset-0 bg-white opacity-20"></div> */}
            </div>
            <div className="relative z-10 text-center text-black">
                <div>
                    <h3 className="text-3xl md:text-5xl font-semibold font-old-standard-tt">Hair Patch</h3>
                    <h1 className="text-6xl md:text-[100px] font-bold font-old-standard-tt">Service Centre</h1>
                </div>
                <p className="mt-4 max-w-xl mx-auto text-sm md:text-base font-inter">
                    Professional and personalized hair patch services
                </p>
                <p className="text-sm md:text-base font-inter">tailored to your needs</p>
                <p className="text-sm md:text-base font-inter">for a natural look and feel</p>
                <button className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-[#323232] text-white font-bold rounded-sm text-sm md:text-base hover:bg-blue-700">
                    Learn More
                </button>
            </div>
        </>
    )
}

export default HeroSection
