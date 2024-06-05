import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Hair Station</h2>
            <p className="text-sm">Professional hair solutions for men and women</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="/" className="text-base hover:text-gray-400 transition-colors">Home</a>
            <a href="/about" className="text-base hover:text-gray-400 transition-colors">About Us</a>
            <a href="/gallery" className="text-base hover:text-gray-400 transition-colors">Gallery</a>
            <a href="/contact" className="text-base hover:text-gray-400 transition-colors">Contact</a>
          </nav>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-8 md:mb-0">&copy; {new Date().getFullYear()} Hair Station. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-0">
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/hair_patch_service_center/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100050719532375&ref=xav_ig_profile_web" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.youtube.com/@AamilKhalifa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
