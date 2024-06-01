import React from 'react';
import CommonHeroSectionCard from '../../components/CommonSection'
import bannerImg from '../../assets/banner.jpg'

const ContactPage = () => {
    return (
        <>
        <CommonHeroSectionCard
        title='Contact Info'
        imageSrc={bannerImg}
        description='Learn more about our company.'
      />
        <div className="container mx-auto p-6">
            <div className="flex flex-wrap justify-center">
                {/* Contact Info */}
                <div className="w-full lg:w-1/3 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
                        <p className="mb-2">104 first floor, Swapnil-5 above SBI Bank, near Commerce six road, Navrangpura, Ahmedabad- 380009</p>
                        <p className="mb-2">+91814 188 8227</p>
                        <p className="mb-2">+91 777 898 3668</p>
                        <p className="mb-2">
                            <a href="mailto:innovativecurehair@gmail.com" className="text-blue-500">
                                innovativecurehair@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="mailto:info@salon.com" className="text-blue-500">
                                info@salon.com
                            </a>
                        </p>
                        <div className="flex mt-4 space-x-3">
                            <a href="#" className="text-gray-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-500">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#" className="text-gray-500">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="w-full lg:w-2/3 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
                        <form action="#" method="POST" className="space-y-4">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full px-2">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full px-2">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full px-2">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Message"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="bg-[#A47E56] text-white py-3 px-6 rounded-lg "
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactPage;
