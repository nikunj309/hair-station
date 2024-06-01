import React from 'react';

const CommonHeroSectionCard = ({ imageSrc, title, description }) => {
    return (
        <div className="relative">
            <div
                className="flex relative flex-col justify-center items-center gap-6"
                style={{ backgroundImage: `url(${imageSrc.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '50vh' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                    <h1 className='text-2xl sm:text-4xl mb-2 text-white'>{title}</h1>
                    <div className="border-b border-black w-16"></div>
                    <p className='text-lg sm:text-xl mt-4 text-white'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CommonHeroSectionCard;
