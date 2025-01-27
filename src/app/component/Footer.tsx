import React from 'react';
import Image from 'next/image';
import Logo from "@/app/assets/Logo Icon.png";
import icons from "@/app/assets/Social Links.png";
import rec from "@/app/assets/Rectangle 33.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 place-items-center md:flex md:justify-around lg:grid-cols-4 gap-8 lg:ml-44 mb-24 px-4">
      {/* Logo and Description */}
      <div className="text-center md:text-left">
        <div className="flex justify-center md:justify-start gap-2 mb-4">
          <Image src={Logo} alt="logo" className="w-[26.67px] h-[26.67px] bg-[#FFFFFF]" />
          <h1 className="font-medium text-[26px] sm:text-[28px] leading-[31.2px] text-[#272343] transition-transform duration-300 hover:scale-105">
            Comforty
          </h1>
        </div>
        <p className="pb-4 pt-4 font-normal text-[16px] leading-[24px] text-[#272343] opacity-[60%] max-w-[350px] mx-auto md:block hidden">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
        </p>
        <Image src={icons} alt="icons" className="mx-auto md:mx-0 transition-all duration-300 hover:scale-105" />
      </div>
  
      {/* Category Section */}
      <div className="lg:ml-0">
        <p className="text-[#9A9CAA] font-medium text-[14px] sm:text-[16px] leading-[15.4px] tracking-[6%] capitalize mb-2 text-center md:text-left">
          CATEGORY
        </p>
        <ul className="text-[#272343] font-normal text-[16px] sm:text-[18px] leading-[17.6px] space-y-3 text-center md:text-left">
          <li className="transition-transform duration-300 hover:scale-105">Sofa</li>
          <li className="transition-transform duration-300 hover:scale-105">Armchair</li>
          <li className="transition-transform duration-300 hover:scale-105">Wing Chair</li>
          <li className="text-[#007580] transition-transform duration-300 hover:scale-105">Desk Chair</li>
          <li className="transition-transform duration-300 hover:scale-105">Wooden Chair</li>
          <li className="transition-transform duration-300 hover:scale-105">Park Bench</li>
        </ul>
      </div>
  
      {/* Support Section */}
      <div className="mb-16">
        <p className="text-[#9A9CAA] font-medium text-[14px] sm:text-[16px] leading-[15.4px] tracking-[6%] capitalize mb-2 text-center md:text-left">
          SUPPORT
        </p>
        <ul className="text-[#272343] font-normal text-[16px] sm:text-[18px] leading-[17.6px] space-y-3 text-center md:text-left">
          <li className="transition-transform duration-300 hover:scale-105">Help & Support</li>
          <li className="transition-transform duration-300 hover:scale-105">Terms & Conditions</li>
          <li className="transition-transform duration-300 hover:scale-105">Privacy Policy</li>
          <li className="transition-transform duration-300 hover:scale-105">Help</li>
        </ul>
      </div>
  
      {/* Newsletter Section */}
      <div className="mx-auto lg:mx-0">
        <p className="text-[#9A9CAA] font-medium text-[14px] sm:text-[16px] text-center leading-[15.4px] tracking-[6%] capitalize sm:mb-2 mb-6">
          NEWSLETTER
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <input
            type="text"
            placeholder="your e-mail"
            className="border rounded-[8px] w-full sm:w-[250px] h-[46px] mb-2 text-[#E1E3E5] p-3 transition-all duration-300 hover:bg-[#f1f1f1]"
          />
          <button className="bg-[#029FAE] text-[#FFFFFF] rounded-[8px] sm:w-[100px] w-[200px] sm:h-[30px] h-[40px] transition-all duration-300 hover:bg-[#027e83]">
            Subscribe
          </button>
        </div>
        <p className="pb-4 pt-4 font-normal text-[16px] leading-[24px] text-center text-[#272343] opacity-[60%] w-full">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        </p>
      </div>
    </div>
  );
};

export default Footer;

export const Footerpart = () => {
  return (
    <div className="mb-11">
      <div className="flex justify-around items-center">
        <p className="text-[#9A9CAA] font-normal text-[14px] leading-[21px] w-[341px] h-[21px]">@ 2021 - Blogy - Designed & Develop by <span className="text-[#272343]">Zakirsoft</span></p>
        <Image src={rec} alt="rec" />
      </div>
    </div>
  );
};
