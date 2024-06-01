"use client";
// import Image from "next/image";
import HeroSection from "../components/Herosection";
import GallerySection from "../components/GallerySection";
// import Navbar from "../components/Navbar";
import AboutUs from "../components/Aboutus";
import WhyChooseUs from "../components/WhyChooseUsSection";
import ServicesCard from "../components/ServicesCard";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center p-6 md:p-24">
        <div className="mt-1">
          <HeroSection />
        </div>
        <div className="mt-72">
        <ContactModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>
      </main>
     
      <div className="mt-7">
        <AboutUs />
      </div>
      <WhyChooseUs />
      <ServicesCard />
      <div className="mt-6">
        <GallerySection />
      </div>
    </>
  );
}
