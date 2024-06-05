
import React from 'react';

const VideoSection = ({ videoSrc, title }) => {
    return (
        <div className="flex flex-col justify-center items-center py-8 bg-gray-100">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-1">{title}</h2>
            <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-4"></div>
            <div className="w-full max-w-4xl h-80">
                <video controls className="w-full h-80">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoSection;
