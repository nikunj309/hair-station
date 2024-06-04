import Image from 'next/image'
import React from 'react'
import i1 from '../assets/g5.jpg'
import i2 from '../assets/g6.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'

const GallerySection = () => {
    return (
        <>
            <div className="py-16 bg-gray-100 mt-11 items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Hair Patch And Services</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            We offer the best hair wig treatment 
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Hair Patch is a top molded patch made up of natural hair which is utilized to cover baldness. Hair Patch is the best treatment for male baldness. When hair growth is not possible from medications and a man can not afford to go for hair transplantation (as it is a surgical method), Hair Patch (Non Surgical Method) is the safest and easiest method to hide baldness & to have an awesome hair style.
                        </p>
                    </div>
                    {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative">
                            <Image src={i1} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <Image src={i2} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <Image src={g1} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <Image src={g2} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <Image src={g3} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="relative">
                            <Image src={g4} alt="Hair Patch Treatment" width={500} height={500} className="rounded-lg shadow-lg" />
                        </div>
                    </div> */}
                    <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-6">
                {/* Gallery items */}
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/img1.jpg' alt="Wig 1" className="w-full h-full object-cover" />
                </div>
                {/* Add more gallery items */}
                {/* Example of more gallery items */}
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g1.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g2.png' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g3.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g4.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g5.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g6.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g7.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src='/g8.jpg' alt="Wig 2" className="w-full h-full object-cover" />
                </div>
               
                {/* Add more gallery items as needed */}
            </div>
        </div>
                </div>

            </div>
        </>
    )
}

export default GallerySection