"use client";
// import Image from "next/image";
import HeroSection from "../components/Herosection";
import GallerySection from "../components/GallerySection";
// import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus";
import WhyChooseUs from "../components/WhyChooseUsSection";
import ServicesCard from "../components/ServicesCard";
import ContactModal from "../components/ContactModal";
// import Testimonials from "../components/Testimonial";
import Vision from "../components/Vision";
import VideoSection from "../components/VideoSection";
// import tutorialVideo from '../asset'
import { useState } from "react";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <main className="   items-center justify-center ">
          <HeroSection />
        {/* <div className="mt-72"> */}
        {/* <div className="relative min-h-screen bg-gray-800"> */}
        <ContactModal isOpen={modalIsOpen} closeModal={closeModal} />
        {/* </div> */}
      {/* </div> */}
      </main>
     
      <div className="mt-2">
        <AboutUs />
      </div>
      <ServicesCard />
      <VideoSection
                title="Revolutionary Hair Care Solutions"
                videoSrc='/v3.mp4'// Path to your video file
            />
      <VideoSection
                title="Transforming Hair Solutions"
                videoSrc='/v2.mp4'// Path to your video file
            />
     
      <WhyChooseUs />
      <Vision/>
      
      {/* <Testimonials/> */}
      <div className="mt-6">
        <GallerySection />
      </div>
    </>
  );
}
