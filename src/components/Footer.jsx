import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Hair Station</h2>
            <p className="text-sm">Professional hair solutions for men and women</p>
          </div>
          <nav className="flex gap-4">
            <a href="/" className="text-sm hover:text-gray-400 transition-colors">Home</a>
            <a href="/about" className="text-sm hover:text-gray-400 transition-colors">About Us</a>
            {/* <a href="/services" className="text-sm hover:text-gray-400 transition-colors">Services</a> */}
            <a href="/gallery" className="text-sm hover:text-gray-400 transition-colors">Gallery</a>
            <a href="/contact" className="text-sm hover:text-gray-400 transition-colors">Contact</a>
          </nav>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; {new Date().getFullYear()} Hair Station. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
