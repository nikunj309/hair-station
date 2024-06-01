import Image from "next/image";
import Head from "next/head";
import ServicPageCard from "../../components/servicePageCmt/ServicPageCard";

const left = [
  {
    id: 1,
    title: "Clip Base Hair Extension",
    description1: "Clip base hair extensions, also known as clip-in hair extensions, come in strands and specific-shaped pieces attached at the base with either fabric or silicone. Clips are attached to this base and come ready to use. All you have to do is clip the pieces to your natural hair all on your own! Each clip snaps open and closes with ease. Clip-in hair extensions are the best permanent style of extensions because you can quickly remove them and put them back on whenever you want. Unlike some other hair extension applications, clip-ins usually take 5 – 15 minutes to apply at home. Clip-in hair extensions are also the least damaging because they don’t involve any chemicals, heat, pressure, or other installation methods—they simply clip onto your hair with ease, so there is zero damage to your natural hair. This is one of the many reasons why it’s one of the most popular hair extension types.",
    description2: "How long do they last?",
    description3: "Once again, this depends on how well you take care of them, what products you use, and how often you wear them. With proper care and regular wear, clip-ins last anywhere from 3 – 6 months, up to a year, and sometimes even longer.",
    image: "/clip.png",
  },
];

const right = [
  {
    id: 1,
    title: "Lace Base Hair Extension",
    description1: "Lace base hair extensions offer a natural-looking base that blends seamlessly with your scalp. These extensions come in specific-shaped pieces, attached at the base with lace. This method allows for a comfortable and secure fit, giving a natural appearance. Lace base extensions are easy to apply and remove, making them a popular choice for those looking for a temporary yet realistic hair enhancement. They are less damaging than other methods as they do not involve chemicals or heat.",
    image: "/lace.png",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto mt-5">
      <Head>
        <title>Easy to Wear Hair Extensions | Hair Station</title>
        <meta
          name="description"
          content="Discover the best clip base and lace base hair extensions at Hair Station. Learn about the benefits, application methods, and how long they last. Get natural-looking, damage-free hair extensions today."
        />
        <meta
          name="keywords"
          content="hair extensions, clip base hair extensions, lace base hair extensions, easy to wear hair extensions, natural hair extensions, synthetic hair extensions"
        />
      </Head>

      <div className="text-center m-5">
        <h1 className="text-2xl font-semibold">Easy to Wear Hair Extensions</h1>
        <p className="my-5 mx-5 lg:mx-48">
          Before getting into the different types of hair extension application methods, the first thing you need to know about hair extensions is that they come in real human hair extensions and synthetic hair extensions.
        </p>
      </div>

      <div className="text-center my-5 p-16 text-white bg-orange-300">
        <h1 className="text-2xl font-semibold">Quality & How Long Hair Extensions Last</h1>
        <p className="mt-5 mx-5 lg:mx-48">
          Synthetic hair is cheaper than real hair, but of course with that, comes a trade-off. Because they’re made out of synthetic fibres, they do not last as long as human hair as they can easily be damaged by factors such as sun, heat, etc. Generally, synthetic hair extensions last for a few months, whereas human hair extensions can last upwards of one year if they are well taken care of.
        </p>
        <p className="mt-5 mx-5 lg:mx-48">
          Human hair can be treated and styled just like your own hair and will look and feel the most natural. It will blend easily with your hair and last much longer than synthetic hair. Although they are cheaper than real hair, synthetic hair does not look as natural, cannot be styled with heating tools, and does not last as long as real hair.
        </p>
      </div>

      <ServicPageCard data={left} imgside="left" />
      <ServicPageCard data={right} imgside="right" />
    </main>
  );
}
