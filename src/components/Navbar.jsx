"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/assets/logo.png'; // Update the path to your logo

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md w-full fixed z-50 bg-white">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Hair Transplant Logo" width={85} height={80} />
        <h1 className="text-2xl font-semibold font-serif">Hair Station</h1>
      </div>
      <div className="lg:hidden" onClick={handleClick}>
        {clicked ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>
      <ul className={`lg:flex items-center gap-8 ${clicked ? 'flex flex-col absolute top-16 left-0 w-full bg-white z-10' : 'hidden'}`}>
        <li>
          <a href="/home" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Home</a>
        </li>
        {/* <li className="relative">
          <button onClick={handleDropdownClick} className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded flex items-center gap-1">
            Services <FaCaretDown />
          </button>
          <ul className={`absolute bg-white shadow-lg rounded mt-1 w-40 ${dropdown ? 'block' : 'hidden'} lg:w-auto lg:shadow-none lg:relative lg:mt-0 lg:flex lg:flex-col lg:gap-1`}>
            <li><a href="/nshr" className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors rounded">NSHR</a></li>
            <li><a href="/hairwig" className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors rounded">Hair-wig</a></li>
            <li><a href="/extensions" className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors rounded">Extensions</a></li>
            <li><a href="/comparison" className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors rounded">Comparison</a></li>
          </ul>
        </li> */}
        <li>
          <a href="/gallery" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Gallery</a>
        </li>
        <li>
          <a href="/about" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">About</a>
        </li>
        <li>
          <a href="/contact" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
