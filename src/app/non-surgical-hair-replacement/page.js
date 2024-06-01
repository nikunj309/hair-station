import Image from "next/image";
import Head from "next/head";
import ServicPageCard from "../../components/servicePageCmt/ServicPageCard";

const c1 = [
  {
    id: 1,
    title: "HAIR BONDING/HAIR FIXING",
    description1: "The first technique is hair fixing, also known as hair bonding. This process uses medicated tape and medicated glue, which are skin-friendly, to fix the hair patch. Made with 100% natural human hair, the patch hair length is kept long by default. Any hairstyle or hair color is possible. You can also change hairstyles at home daily. Monthly studio visits are required for routine service, which includes cleaning old tape and glue, oiling, head massage, washing, cutting, hair spa, replacing old tape, and applying new glue, all at a nominal charge.",
    image: "/hairs.jpeg",
  },
];

const c2 = [
  {
    id: 2,
    title: "HAIR CLIPPING",
    description1: "The second technique is hair clipping, which uses special hair clips designed for hair patches. The hair clip is stitched inside one's hair system and attached to one's hair. This process does not require shaving your hair and can be removed only if desired. This fixture is easy to wear and remove.",
    image: "/hairr.jpeg",
  },
];

const c3 = [
  {
    id: 3,
    title: "HAIR TAPPING",
    description1: "The third technique is hair tapping, similar to hair bonding but without applying glue on your head. Only medicated tape is used, making it ideal for those who prefer weekly services. Both hair fixing and hair clipping techniques give the same look, but hair clipping can be removed daily as it is attached with clips. Hair fixing cannot be removed by oneself and requires monthly studio visits. Both techniques are more economical than surgery.",
    image: "/hairb.jpeg",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto mt-5">
      <Head>
        <title>Non-Surgical Hair Replacement | Hair Station</title>
        <meta
          name="description"
          content="Discover non-surgical hair replacement techniques at Hair Station, including hair bonding, hair clipping, and hair tapping. Achieve a natural look with 100% human hair patches."
        />
        <meta
          name="keywords"
          content="non-surgical hair replacement, hair bonding, hair clipping, hair tapping, hair restoration, natural hair wigs"
        />
      </Head>

      <div className="text-center m-5">
        <h1 className="text-2xl font-semibold">Non-surgical Hair Replacement</h1>
        <p className="my-5 mx-5 lg:mx-48">
          Non-surgical hair replacement is the best technique for hair restoration, introduced in India by Innovative Hair Studio in 1992. It is the fastest way to get one's hair back and provides superlative looking hair. This easy technique involves developing a hair patch from human hair woven onto lace - Monofilament or ultra-skin lace. During the non-surgical hair replacement process, the hair patch or wig is customized according to the size of one's baldness and hair texture. There are three effective ways to fix a hair patch or wig on one's scalp:
        </p>
      </div>

      <ServicPageCard data={c1} imgside="left" />
      <ServicPageCard data={c2} imgside="right" />
      <ServicPageCard data={c3} imgside="left" />

      <div className="text-center my-5 p-16 text-white bg-orange-300">
        <h1 className="text-2xl font-semibold">Advantages of the Procedure</h1>
        <p className="mt-5 mx-5 lg:mx-48">
          The biggest advantage of the procedure is the density of hair it can offer. If you are looking to reverse the clock and look 10-20 years younger, this is the procedure for you.
        </p>
      </div>
    </main>
  );
}
