// import React from 'react';
// import CommonHeroSectionCard from '../../components/CommonSection'
// import bannerImg from '../../assets/banner.jpg'

// const ContactPage = () => {
//     return (
//         <>
//         <CommonHeroSectionCard
//         title='Contact Info'
//         imageSrc={bannerImg}
//         description='Have questions or need assistance? Reach out to us! We are here to help you find the perfect hair solution. Contact us today for personalized support and expert advice.'
//       />
//         <div className="container mx-auto p-6">
//             <div className="flex flex-wrap justify-center">
//                 {/* Contact Info */}
//                 <div className="w-full lg:w-1/3 p-4">
//                     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
//                         <p className="mb-2">Mangal dhara complex, 83, Sampatrao Colony, Alkapuri, Vadodara, Gujarat 390007</p>
//                         <p className="mb-2">+9198988 20011</p>
//                         <p className="mb-2">
//                         </p>
//                         <p>
//                         </p>
//                         <div className="flex mt-4 space-x-3">
//                             <a href="#" className="text-gray-500">
//                                 <i className="fab fa-facebook-f"></i>
//                             </a>
//                             <a href="#" className="text-gray-500">
//                                 <i className="fab fa-instagram"></i>
//                             </a>
//                             <a href="#" className="text-gray-500">
//                                 <i className="fab fa-whatsapp"></i>
//                             </a>
//                             <a href="#" className="text-gray-500">
//                                 <i className="fab fa-youtube"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Contact Form */}
//                 <div className="w-full lg:w-2/3 p-4">
//                     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
//                         <form action="#" method="POST" className="space-y-4">
//                             <div className="flex flex-wrap -mx-2">
//                                 <div className="w-full md:w-1/2 px-2">
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Name"
//                                         className="w-full p-3 border border-gray-300 rounded-lg"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="w-full md:w-1/2 px-2">
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         placeholder="Phone"
//                                         className="w-full p-3 border border-gray-300 rounded-lg"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap -mx-2">
//                                 <div className="w-full px-2">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email"
//                                         className="w-full p-3 border border-gray-300 rounded-lg"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap -mx-2">
//                                 <div className="w-full px-2">
//                                     <input
//                                         type="text"
//                                         name="subject"
//                                         placeholder="Subject"
//                                         className="w-full p-3 border border-gray-300 rounded-lg"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap -mx-2">
//                                 <div className="w-full px-2">
//                                     <textarea
//                                         name="message"
//                                         rows="4"
//                                         placeholder="Message"
//                                         className="w-full p-3 border border-gray-300 rounded-lg"
//                                         required
//                                     ></textarea>
//                                 </div>
//                             </div>
//                             <div className="flex justify-start">
//                                 <button
//                                     type="submit"
//                                     className="bg-[#A47E56] text-white py-3 px-6 rounded-lg "
//                                 >
//                                     Send Message
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default ContactPage;

"use client"
import React, { useState } from 'react';
import CommonHeroSectionCard from '../../components/CommonSection';
import bannerImg from '../../assets/banner.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://script.google.com/macros/s/AKfycbzuMS8coQpNnT_LGSJEMV6tUCDeb5ToMmq8mh4KPnhnuFRUOnA7NIKyLrUr_zlBnRhpHA/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.result === 'success') {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Error sending message.');
    }
  };

  return (
    <>
      <CommonHeroSectionCard
        title='Contact Info'
        imageSrc={bannerImg}
        description='Have questions or need assistance? Reach out to us! We are here to help you find the perfect hair solution. Contact us today for personalized support and expert advice.'
      />
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap justify-center">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              <p className="mb-2">Mangal dhara complex, 83, Sampatrao Colony, Alkapuri, Vadodara, Gujarat 390007</p>
              <p className="mb-2">+9198988 20011</p>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
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
                    className="bg-[#A47E56] text-white py-3 px-6 rounded-lg"
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

