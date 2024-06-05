import React from "react";
import Image from "next/image";
import Head from "next/head";
import CommonHeroSectionCard from "../../components/CommonSection";
import bannerImg from "../../assets/banner.jpg";
const wigs = [
  {
    id: 1,
    title: "Hair Wigs for Men",
    description:
      "Hair wigs serve as the only option for people who are experiencing full baldness. These wigs are made with original 100% natural human hair, weaved on a skin finish net base. Available in fixed style and free style options, these wigs allow air and water to pass easily. They can be attached using fixing or elastic techniques.",
    image: "/img1.jpg",
    details: ["Fixing Technique", "Elastic Technique"],
  },
  {
    id: 2,
    title: "Hair Wigs for Women",
    description:
      "Hair wigs serve as the only option for women who are facing full baldness. These wigs are made with original 100% human hair, weaved on a skin finish net base. The reasons for hair loss determine the type of wig needed, such as hair loss due to chemotherapy or natural hair loss.",
    image: "/screen1.jpg",
    details: [
      "Chemotherapy treatment hair loss (cancer treatment)",
      "Natural hair loss",
    ],
  },
];

export default function HairWigsPage() {
  return (
    <>
      <Head>
        <title>Hair Wigs | Hair Station</title>
        <meta
          name="description"
          content="Explore our range of hair wigs for men and women. Whether due to chemotherapy or natural hair loss, find the perfect wig solution at Hair Station."
        />
        <meta
          name="keywords"
          content="Hair wigs, men's wigs, women's wigs, chemotherapy wigs, natural hair wigs, hair loss solutions"
        />
      </Head>
      {/* <section className="relative bg-blue-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-4xl font-bold mb-4">Hair Wigs</h1>
          <p className="text-lg mb-8">
            While undergoing chemotherapy for cancer, your psychological state
            plays an essential role in the recovery process. When choosing to
            cover up, not just any wig would suffice. A wig is a head or hair
            accessory made from human hair or synthetic fiber. Some people wear
            wigs to disguise baldness.
          </p>
        </div>
      </section> */}
      <CommonHeroSectionCard
        title="Hair Wigs"
        imageSrc={bannerImg}
        description=""
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-1">
          Our Hair Wigs
        </h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-yellow-500 mb-4"></div>
        <p className="text-lg text-center text-gray-500 mb-12">
          While undergoing chemotherapy for cancer, your psychological state
          plays an essential role in the recovery process. When choosing to
          cover up, not just any wig would suffice. A wig is a head or hair
          accessory made from human hair or synthetic fiber. Some people wear
          wigs to disguise baldness.
        </p>
        <div className="grid grid-cols-1 gap-12 justify-center items-center">
          {wigs.map((wig) => (
            <div
              key={wig.id}
              className="w-full md:w-3/5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8 mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-stretch">
                <div className="md:w-1/2">
                  <div className="bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden shadow-md">
                    <img
                      src={wig.image}
                      alt={wig.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    {wig.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{wig.description}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {wig.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
