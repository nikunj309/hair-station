import React from "react";
import Image from "next/image";
import Head from "next/head";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import CommonHeroSectionCard from "../../components/CommonSection";
import bannerImg from "../../assets/banner.jpg";

const techniques = [
  {
    id: 1,
    title: "HAIR BONDING/HAIR FIXING",
    description:
      "Hair bonding uses medicated tape and glue, which are skin-friendly, to fix the hair patch. Made with 100% natural human hair, the patch can be styled and colored to your preference. Monthly studio visits are required for routine service, which includes cleaning old tape and glue, oiling, head massage, washing, cutting, hair spa, replacing old tape, and applying new glue, all at a nominal charge.",
    image: s1,
  },
  {
    id: 2,
    title: "HAIR CLIPPING",
    description:
      "The second technique is called hair clipping. In this process we use special hair clips which are principally made for hair patches. The hair clip is stitched inside ones hair system and is attached with ones hair. Under this process we don’t need to shave your hairs its attached through the help of clips. This fixture is very easy to wear and can be removed only if one is willing to remove it.",
    image: s2,
  },
  {
    id: 3,
    title: "HAIR TAPPING",
    description:
      "Hair tapping, similar to hair bonding but without applying glue on your head. Only medicated tape is used, making it ideal for those who prefer weekly services. Both hair fixing and hair clipping techniques give the same look, but hair clipping can be removed daily as it is attached with clips. Hair fixing cannot be removed by oneself and requires monthly studio visits. Both techniques are more economical than surgery.",
    image: s3,
  },
];

const advantages = [
  {
    title: "Natural Appearance",
    description:
      "Our non-surgical hair replacement offers a natural look that blends seamlessly with your existing hair, making you look 10-20 years younger.",
  },
  {
    title: "Affordable",
    description:
      "Economical compared to surgical methods, our techniques offer high-density hair without breaking the bank.",
  },
  {
    title: "Convenient",
    description:
      "Easy to wear and maintain, our hair replacement systems allow you to change styles at home or visit our studio for professional service.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Hair Station</title>
        <meta
          name="description"
          content="Discover our top-quality hair replacement services, including hair bonding, hair clipping, and hair tapping. Transform your look with Hair Station."
        />
        <meta
          name="keywords"
          content="Hair Station, hair replacement, hair bonding, hair clipping, hair tapping, non-surgical hair replacement"
        />
      </Head>
      <CommonHeroSectionCard
        title="Non-Surgical Hair Replacement"
        imageSrc={bannerImg}
        description=""
      />
     <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-1">Our Techniques</h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-4"></div>
        <p className="text-lg text-center text-gray-500 mb-12">
          Non-surgical hair replacement is the best technique for hair restoration which was introduced in India by Innovative Hair Studio in 1992. It is the fastest way to get ones hair back and provides superlative looking hair. It is a very easy technique in which a hair patch is developed by human hair woven onto lace - Monofilament or ultra skin lace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techniques.map((technique) => (
            <div key={technique.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image src={technique.image} alt={technique.title} className="rounded-md mb-4 w-full h-64 object-cover" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{technique.title}</h3>
              <p className="text-gray-700">{technique.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-1">Advantages of the Procedure</h2>
          <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">{advantage.title}</h4>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
