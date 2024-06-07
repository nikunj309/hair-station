"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import model from '../assets/hair-fixing.jpg'

const ContactModal = ({ isOpen, closeModal }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission
    console.log({ name, phone })
  }


  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="relative w-full max-w-4xl md:h-[72%] h-auto">
        <div className="relative flex flex-col md:flex-row h-full bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="relative flex-1 h-56 md:h-auto">
            <Image
              src={model}
              alt="Hair Patch"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg md:rounded-tr-none md:rounded-l-lg"></div>
          </div>
          <div className="relative z-10 w-full md:w-1/2 p-8 flex flex-col justify-center bg-opacity-70 bg-gray-800 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <div className="text-center text-white mb-6">
              <h2 className="mt-6 text-3xl font-extrabold">
                GET YOUR HAIR PATCH
              </h2>
              <p className="mt-2 text-lg text-red-500">
                DONE IN 5500 INR
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 z-20"
          onClick={closeModal}
        >
          <FiX className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
