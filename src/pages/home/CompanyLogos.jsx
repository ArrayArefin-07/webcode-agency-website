import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa6";

const CompanyLogos = () => {
  const logos = [
    {
      icon: FaApple, name: "Apple"
    },
    {
      icon: FaGoogle, name: "Google"
    },
    {
      icon: FaAmazon, name: "Amazon"
    },
    {
      icon: FaMicrosoft, name: "Microsoft"
    },
    {
      icon: FaFacebook, name: "Facebook"
    },
  ]
  return (
    <div className="bg-colorBg">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <HeadingSection
          heading="Companies we've Worked With"
          subheading="Our Trusted Partners"
          description="We've worked with some of the best companies in the world to help them grow their businesses."
        />

        {/* Logo Container */}
        <div className="relative overflow-hidden border-y-[1px] p-8">
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
            {
              logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center bg-white rounded-full p-6 w-28 hover:scale-110 transition transform">
                  <logo.icon className="text-blue-600 text-4xl" title={logo.name}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
