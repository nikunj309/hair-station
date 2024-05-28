import Image from "next/image";
import HeroSection from "./components/Herosection";
import GallerySection from "./components/GallerySection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Aboutus";
import WhyChooseUs from "./components/WhyChooseUsSection";
import ServicesCard from "./components/ServicesCard";

export default function Home() {
  return (
    <>
    <main className="relative flex min-h-screen items-center justify-center p-6 md:p-24">
      <div className="mt-96">

      <HeroSection/>
      </div>
    </main>
      <div className="mt-7">

      <AboutUs/>
      </div>
      <WhyChooseUs/>
      <ServicesCard/>
      <div className="mt-6">

      <GallerySection/>
      </div>
      </>
  );
}
