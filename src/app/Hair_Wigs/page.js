import Image from "next/image";
import Head from 'next/head';
import ServicPageCard from '../../components/servicePageCmt/ServicPageCard';

const man = [
  {
    id: 1,
    title: "FOR MEN",
    description1: "Hair wigs serve as the only option for the people who are having full baldness. It is a hair system where original 100% natural human hair are weaved on a skin finish net base. There are two types of hair wigs namely - (1) with the fixed style and (2) with the free style. In both the hair wigs, air and water can pass very easily. There are two different ways to fix wig on ones head -",
    description2: "Fixing technique - in this technique we use medicated tape and medicated glue which is skin friendly to enable sticking of hair wig. All hair styles are possible of ones choice and one can also change their hair styles at home. In this process one has to visit the studio once a month for routine service. Service will include cleaning of old tape and glue, oiling, head massage, washing, cutting, hair spa, changing old tape and using new tape and applying new medicated glue. It is done at very nominal charge.",
    description3: "Elastic technique - in this technique, border of the wig is elastic base and makes it comfortable for people to remove it on daily basis. You don’t have to visit the clinic for any service.",
    image: "/img1.jpg",
  },
];

const women = [
  {
    id: 2,
    title: "FOR WOMEN",
    description1: "Hair wigs serve as the only option for women who are facing full baldness. It is a hair system in which original 100% human hair are weaved on a skin finish net base. Hair loss reason decides which hair wig one should get. Few reasons are -",
    description2: "Chemotherapy treatment hair loss (cancer treatment) Chemotherapy treatment is performed for curing cancer problem which directly affects your hairs after the first dose injected in your body, 70% hair loss occurs after the first dose. Innovative hair studio provides solution for these by bringing silicon hair wigs which is best for women undergoing chemotherapy treatment. These hair wigs give 100% natural look and it comes in full length. One can make any desired hair style. Silicon hair feels like human hair and looks 100% natural. This hair wig is easily washable and air circulation is maintained because of the skin base net finish.",
    description3: "Natural hair loss Natural hair loss is a reason of hair loss because of genetic problem. Innovative hair studio has developed 100 percent natural human hair wig for women, which is very easy to wear its is washable and the air circulation is maintained because of the skin base net finish we can have any hair style we want and we can also change the hair style on daily basis. It comes with elastic base so it is very easy to wear and gives 100 percent natural look",
    image: "/screen1.jpg",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto mt-5">
      <Head>
        <title>Hair Wigs | Hair Station</title>
        <meta name="description" content="Discover top-quality hair wigs for men and women at Hair Station. Our wigs are made from 100% natural human hair and cater to those experiencing full baldness due to various reasons including chemotherapy and natural hair loss." />
        <meta name="keywords" content="hair wigs, natural hair wigs, wigs for men, wigs for women, chemotherapy wigs, hair loss solutions" />
      </Head>
      
      <div className="text-center m-5">
        <h1 className="text-2xl font-semibold">Hair Wigs</h1>
        <p className="my-5 mx-5 lg:mx-48">
          While undergoing chemotherapy for Cancer, It is a known fact that while undergoing chemotherapy, your psychological state plays an essential role in the recovery process. So, when choosing to cover up, not just any wig would suffice. A wig is a head or hair accessory made from human hair, or synthetic fiber. ... Some people wear wigs to disguise baldness; a wig may be used as a less intrusive and less expensive alternative to medical therapies for restoring hair or for a religious reason.
        </p>
      </div>

      <ServicPageCard data={man} imgside="left"/> 
      <ServicPageCard data={women} imgside="right" />   

      <div className="text-center my-5 p-16 text-white bg-orange-300">
        <h1 className="text-2xl font-semibold">Expert Advice</h1>
        <p className="mt-5 mx-5 lg:mx-48">
          The experts at our clinics will help you to choose the right type of wig that will restore your hair to its former glory. They can be styled in any way you wish. You may choose between a Synthetic hair and a Human Hair wig depending on your needs. These wigs are also available for patients suffering from Aloepecia Totalis, Aloepecia Universalis and other cases of complete baldness.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-xl m-5">Before & After Results</h3>
        <div className="flex justify-center items-center gap-3">
          <Image src="/img2.jpg" alt="Before and after hair wigs results - Image 1" width={300} height={300} className="rounded-lg" />
          <Image src="/screen1.jpg" alt="Before and after hair wigs results - Image 2" width={300} height={300} className="rounded-lg" />
          <Image src="/img1.jpg" alt="Before and after hair wigs results - Image 3" width={300} height={300} className="rounded-lg" />
        </div>
      </div>
    </main>
  );
}
