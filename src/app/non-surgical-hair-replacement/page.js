// import Image from "next/image";
// import Head from "next/head";
// import ServicPageCard from "../../components/servicePageCmt/ServicPageCard";
// import s1 from "../../assets/s1.png";
// import s2 from "../../assets/s2.png";
// import s3 from "../../assets/s3.png";

// const c1 = [
//   {
//     id: 1,
//     title: "HAIR BONDING/HAIR FIXING",
//     description1:
//       "The first technique is hair fixing, also known as hair bonding. This process uses medicated tape and medicated glue, which are skin-friendly, to fix the hair patch. Made with 100% natural human hair, the patch hair length is kept long by default. Any hairstyle or hair color is possible. You can also change hairstyles at home daily. Monthly studio visits are required for routine service, which includes cleaning old tape and glue, oiling, head massage, washing, cutting, hair spa, replacing old tape, and applying new glue, all at a nominal charge.",
//     image: "/hairs.jpeg",
//   },
// ];

// const c2 = [
//   {
//     id: 2,
//     title: "HAIR CLIPPING",
//     description1:
//       "The second technique is hair clipping, which uses special hair clips designed for hair patches. The hair clip is stitched inside one's hair system and attached to one's hair. This process does not require shaving your hair and can be removed only if desired. This fixture is easy to wear and remove.",
//     image: "/hairr.jpeg",
//   },
// ];

// const c3 = [
//   {
//     id: 3,
//     title: "HAIR TAPPING",
//     description1:
//       "The third technique is hair tapping, similar to hair bonding but without applying glue on your head. Only medicated tape is used, making it ideal for those who prefer weekly services. Both hair fixing and hair clipping techniques give the same look, but hair clipping can be removed daily as it is attached with clips. Hair fixing cannot be removed by oneself and requires monthly studio visits. Both techniques are more economical than surgery.",
//     image: "/hairb.jpeg",
//   },
// ];

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Our Services | Hair Station</title>
//         <meta
//           name="description"
//           content="Discover our top-quality hair replacement services, including hair bonding, hair clipping, and hair tapping. Transform your look with Hair Station."
//         />
//         <meta
//           name="keywords"
//           content="Hair Station, hair replacement, hair bonding, hair clipping, hair tapping, non-surgical hair replacement"
//         />
//       </Head>
//       <section className="relative bg-blue-600 text-white py-16">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="container mx-auto px-6 z-10 relative">
//           <h1 className="text-4xl font-bold mb-4">
//             Non-Surgical Hair Replacement
//           </h1>
//           <p className="text-lg mb-8">
//             The best technique for hair restoration introduced by Innovative
//             Hair Studio in 1992. Get your hair back with natural,
//             superlative-looking results.
//           </p>
//         </div>
//       </section>
//       <section className="container mx-auto py-16 px-6">
//         <h2 className="text-3xl font-semibold text-center text-blue-800 mb-12">
//           Our Techniques
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <Image src={s1} alt="Hair Bonding" className="rounded-md mb-4" />
//             <h3 className="text-2xl font-semibold text-blue-800 mb-2">
//               Hair Bonding
//             </h3>
//             <p className="text-gray-700">
//               Hair bonding uses medicated tape and glue, which are
//               skin-friendly, to fix the hair patch. Made with 100% natural human
//               hair, the patch can be styled and colored to your preference.
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <Image src={s2} alt="Hair Clipping" className="rounded-md mb-4" />
//             <h3 className="text-2xl font-semibold text-blue-800 mb-2">
//               Hair Clipping
//             </h3>
//             <p className="text-gray-700">
//               Hair clipping uses special hair clips stitched inside the hair
//               system, attaching to your existing hair without the need for
//               shaving. Easy to wear and remove.
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <Image src={s3} alt="Hair Tapping" className="rounded-md mb-4" />
//             <h3 className="text-2xl font-semibold text-blue-800 mb-2">
//               Hair Tapping
//             </h3>
//             <p className="text-gray-700">
//               Similar to hair bonding but only using medicated tape, this
//               technique is preferred for those needing weekly service. Both
//               methods provide a natural look.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center text-blue-800 mb-12">
//             Advantages of the Procedure
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">
//                 Natural Appearance
//               </h4>
//               <p className="text-gray-700">
//                 Our non-surgical hair replacement offers a natural look that
//                 blends seamlessly with your existing hair, making you look 10-20
//                 years younger.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">
//                 Affordable
//               </h4>
//               <p className="text-gray-700">
//                 Economical compared to surgical methods, our techniques offer
//                 high-density hair without breaking the bank.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h4 className="text-xl font-semibold text-blue-800 mb-2">
//                 Convenient
//               </h4>
//               <p className="text-gray-700">
//                 Easy to wear and maintain, our hair replacement systems allow
//                 you to change styles at home or visit our studio for
//                 professional service.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import Image from "next/image";
import Head from "next/head";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import CommonHeroSectionCard from "../../components/CommonSection";
import bannerImg from '../../assets/banner.jpg';

const techniques = [
  {
    id: 1,
    title: "HAIR BONDING/HAIR FIXING",
    description: "Hair bonding uses medicated tape and glue, which are skin-friendly, to fix the hair patch. Made with 100% natural human hair, the patch can be styled and colored to your preference. Monthly studio visits are required for routine service, which includes cleaning old tape and glue, oiling, head massage, washing, cutting, hair spa, replacing old tape, and applying new glue, all at a nominal charge.",
    image: s1,
  },
  {
    id: 2,
    title: "HAIR CLIPPING",
    description: "The second technique is called hair clipping. In this process we use special hair clips which are principally made for hair patches. The hair clip is stitched inside ones hair system and is attached with ones hair. Under this process we don’t need to shave your hairs its attached through the help of clips. This fixture is very easy to wear and can be removed only if one is willing to remove it.",
    image: s2,
  },
  {
    id: 3,
    title: "HAIR TAPPING",
    description: "Hair tapping, similar to hair bonding but without applying glue on your head. Only medicated tape is used, making it ideal for those who prefer weekly services. Both hair fixing and hair clipping techniques give the same look, but hair clipping can be removed daily as it is attached with clips. Hair fixing cannot be removed by oneself and requires monthly studio visits. Both techniques are more economical than surgery.",
    image: s3,
  },
];

const advantages = [
  {
    title: "Natural Appearance",
    description: "Our non-surgical hair replacement offers a natural look that blends seamlessly with your existing hair, making you look 10-20 years younger.",
  },
  {
    title: "Affordable",
    description: "Economical compared to surgical methods, our techniques offer high-density hair without breaking the bank.",
  },
  {
    title: "Convenient",
    description: "Easy to wear and maintain, our hair replacement systems allow you to change styles at home or visit our studio for professional service.",
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
      {/* <section className="relative bg-blue-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-4xl font-bold mb-4">Non-Surgical Hair Replacement</h1>
          <p className="text-lg mb-8">
            The best technique for hair restoration introduced by Innovative Hair Studio in 1992. Get your hair back with natural, superlative-looking results.
          </p>
        </div>
      </section> */}
      <CommonHeroSectionCard
        title='Non-Surgical Hair Replacement'
        imageSrc={bannerImg}
        description='Non surgical hair replacement is the best technique for hair restoration which was introduced in India by Innovative Hair Studio in 1992. It is the fastest way to get ones hair back and provides superlative looking hair. It is a very easy technique in which a hair patch is developed by human hair woven onto lace - Monofilament or ultra skin lace.'
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-12">Our Techniques</h2>
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
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-12">Advantages of the Procedure</h2>
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

