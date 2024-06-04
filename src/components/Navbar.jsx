// // "use client";
// // import React, { useState } from 'react';
// // import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
// // import Image from 'next/image';
// // import logo from '../assets/logo.png'; // Update the path to your logo

// // export default function Navbar() {
// //   const [clicked, setClicked] = useState(false);
// //   const [dropdown, setDropdown] = useState(false);

// //   const handleClick = () => {
// //     setClicked(!clicked);
// //   };

// //   const handleDropdownClick = () => {
// //     setDropdown(!dropdown);
// //   };

// //   return (
// //     <nav className="flex justify-between items-center py-4 px-6 shadow-md w-full fixed z-50 bg-white">
// //       <div className="flex items-center gap-4">
// //         <Image src={logo} alt="Hair Transplant Logo" width={85} height={80} />
// //         <h1 className="text-2xl font-semibold font-serif">Hair Station</h1>
// //       </div>
// //       <div className="lg:hidden" onClick={handleClick}>
// //         {clicked ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
// //       </div>
// //       <ul className={`lg:flex items-center gap-8 ${clicked ? 'flex flex-col absolute top-16 left-0 w-full bg-white z-10' : 'hidden'}`}>
// //         <li>
// //           <a href="/home" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Home</a>
// //         </li>
// //         <li>
// //           <a href="/gallery" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Gallery</a>
// //         </li>
// //         <li>
// //           <a href="/about" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">About</a>
// //         </li>
// //         <li>
// //           <a href="/contact" className="block px-4 py-2 lg:px-0 lg:py-0 hover:bg-blue-700 hover:text-white transition-colors rounded">Contact</a>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }


// "use client";
// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
// import Image from 'next/image';
// import logo from '../assets/logo.png'; // Update the path to your logo

// export default function Navbar() {
//   const [clicked, setClicked] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   const handleDropdownClick = () => {
//     setDropdown(!dropdown);
//   };

//   return (
//     <nav className="flex justify-between items-center py-4 px-6 shadow-md w-full  z-50 bg-white">
//       <div className="flex items-center gap-4">
//         <Image src={logo} alt="Hair Transplant Logo" width={85} height={80} />
//         <h1 className="text-2xl font-semibold font-serif">Hair Station</h1>
//       </div>
//       <div className="lg:hidden" onClick={handleClick}>
//         {clicked ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//       </div>
//       <ul className={`lg:flex items-center gap-8 ${clicked ? 'flex flex-col absolute top-16 left-0 w-full bg-white z-10' : 'hidden'}`}>
//         <li>
//           <a href="/" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500  transition-colors rounded">Home</a>
//         </li>
//         <li>
//           <a href="/gallery" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">Gallery</a>
//         </li>
//         <li className="relative">
//           <button onClick={handleDropdownClick} className="flex items-center gap-2 px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">
//             Services <FaCaretDown />
//           </button>
//           <ul className={`${dropdown ? 'block' : 'hidden'} lg:absolute z-30 bg-white shadow-md rounded mt-2 lg:mt-0 lg:w-48 lg:right-0`}>
//             <li><a href="/non-surgical-hair-replacement" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Non Surgical Hair Replacement</a></li>
//             <li><a href="/Hair_Wigs" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Hair Wigs</a></li>
//             <li><a href="/wear-hair" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Wear Hair</a></li>
//             {/* <li><a href="/services/hair-wigs" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Hair Wigs</a></li> */}
//           </ul>
//         </li>
//         <li>
//           <a href="/about" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">About</a>
//         </li>
//         <li>
//           <a href="/contact" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/logo.png'; // Update the path to your logo

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
    <>
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
            <a href="/" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">Home</a>
          </li>
          <li>
            <a href="/gallery" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">Gallery</a>
          </li>
          <li className="relative">
            <button onClick={handleDropdownClick} className="flex items-center gap-2 px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">
              Services <FaCaretDown />
            </button>
            <ul className={`${dropdown ? 'block' : 'hidden'} lg:absolute z-30 bg-white shadow-md rounded mt-2 lg:mt-0 lg:w-48 lg:right-0`}>
              <li><a href="/non-surgical-hair-replacement" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Non Surgical Hair Replacement</a></li>
              <li><a href="/Hair_Wigs" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Hair Wigs</a></li>
              <li><a href="/wear-hair" className="block px-4 py-2 hover:text-red-500 transition-colors rounded">Wear Hair</a></li>
            </ul>
          </li>
          <li>
            <a href="/about" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">About</a>
          </li>
          <li>
            <a href="/contact" className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-red-500 transition-colors rounded">Contact</a>
          </li>
        </ul>
      </nav>
      {clicked && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleClick}></div>}
    </>
  );
}
