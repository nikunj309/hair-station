
import React from "react";
import bannerImg from '../../assets/banner.jpg';
import CommonHeroSectionCard from "../../components/CommonSection";

const HairExtensionComponent = () => {
  return (
    <>
    <CommonHeroSectionCard
    title='Easy to Wear Hair Extensions'
    imageSrc={bannerImg}
    description='Before getting into the different types of hair extension application methods, the first thing you need to know
    about hair extensions is that they come in real human hair extensions and synthetic hair extensions.'
  />
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mt-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Clip Base Hair Extension
              </h3>
              <img
                src="/clip.png" // Replace with your image source
                alt="Clip Base Hair Extension"
                className="mt-4 mx-auto h-48 w-auto"
              />
              <p className="mt-4 max-w-2xl text-sm leading-5 text-gray-500">
                Clip base hair extensions, also known as clip-in hair
                extensions, come in individual strands or specific shaped pieces
                attached at the base with fabric or silicone. Clips are attached
                to this base and come ready to use. Each clip snaps open and
                closes with ease. They are the best permanent style of extensions
                because you can quickly remove them and put them back on whenever
                you want.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-5 text-gray-500">
                <strong>HOW LONG DO THEY LAST?</strong> Once again, this depends
                on how well you take care of them, what products you use, and
                how often you wear them. With proper care and regular wear,
                clip-ins last anywhere from 3 – 6 months, up to a year, and
                sometimes even longer.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {/* Additional Details */}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Lace Base Hair Extension
              </h3>
              <img
                src="/lace.png" // Replace with your image source
                alt="Lace Base Hair Extension"
                className="mt-4 mx-auto h-48 w-auto"
              />
              <p className="mt-4 max-w-2xl text-sm leading-5 text-gray-500">
                Lace base hair extensions offer another convenient solution for
                hair enhancement. They are also known as clip-in hair extensions
                and come in individual strands or specific shaped pieces attached
                at the base with fabric or silicone. Clips are attached to this
                base and come ready to use. Each clip snaps open and closes with
                ease. They are the best permanent style of extensions because
                you can quickly remove them and put them back on whenever you
                want.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {/* Additional Details */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HairExtensionComponent;
