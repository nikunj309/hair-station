"use client";
import React, { useState } from "react";
import CommonHeroSectionCard from "../../components/CommonSection";
import bannerImg from "../../assets/banner.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzuMS8coQpNnT_LGSJEMV6tUCDeb5ToMmq8mh4KPnhnuFRUOnA7NIKyLrUr_zlBnRhpHA/exec",
      {
        method: "POST",
        body: new FormData(event.target),
      }
    );

    const result = await response.json();
    if (result.result === "success") {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <>
      <CommonHeroSectionCard
        title="Contact Info"
        imageSrc={bannerImg}
        description=""
      />
      <div className="justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-1 mt-6">
          Contact Info
        </h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-2"></div>
        <p className="text-lg text-center text-gray-500 mb-12 w-[80%]">
          Have questions or need assistance? Reach out to us! We are here to
          help you find the perfect hair solution. Contact us today for
          personalized support and expert advice.{" "}
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center">
          {/* Contact Info */}

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

          <div className="w-full lg:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              <p className="mb-2">
                Mangal dhara complex, 83, Sampatrao Colony, Alkapuri, Vadodara,
                Gujarat 390007
              </p>
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
          {/* Map */}
          <div className="w-full p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1678014171102!2d73.17272627498427!3d22.309492742562696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc929ce8cf02f%3A0xf9b74504f2a9e3e5!2sMehta%20Neurology%20Center%20(Dr.%20Manan%20Mehta)%20MD%2C%20DM%20Neurology%20(Gold%20Medallist)!5e0!3m2!1sen!2sin!4v1717611549522!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
