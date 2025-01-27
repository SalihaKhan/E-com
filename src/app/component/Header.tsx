'use client';
import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import circle from "@/app/assets/circle.png";
import Logo from "@/app/assets/Logo Icon.png";
import cart from "@/app/assets/cart (2).png";
import num from "@/app/assets/No.png";
import Header3 from './Head';

const Header = () => {
  return (
    <header className="bg-[#272343] text-[#FFFFFF] h-auto flex flex-col sm:flex-row justify-around items-center py-3 px-4 sm:px-10 lg:px-20 sm:py-5 rounded-lg shadow-lg">
      <div className="flex justify-center items-center gap-2 opacity-80 transition-opacity duration-300 hover:opacity-100">
        <IoMdCheckmark className="text-xl sm:text-2xl lg:text-3xl" />
        <p className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
          Free shipping on all orders over $50
        </p>
      </div>

      <div className="opacity-80 sm:mt-0 gap-4 sm:gap-6 lg:gap-7 font-normal text-sm sm:text-base lg:text-lg leading-6 flex flex-col sm:flex-row justify-between items-center transition-opacity duration-300 hover:opacity-100">
        <select
          className="bg-[#272343] ml-0 lg:ml-7 border border-[#FFFFFF] rounded-md focus:outline-none cursor-pointer hover:bg-[#434A7E] transition-colors duration-300 text-sm sm:text-base lg:text-lg p-2"
          aria-label="Select language"
        >
          <option value="eng">Eng</option>
        </select>

        <div>
          <Link href="/FAQs" className="hover:text-[#FFA500] transition-colors duration-300 text-sm sm:text-base lg:text-lg" aria-label="Go to FAQs page">
            FAQs
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300" aria-label="Help section">
          <Image src={circle} alt="Help icon" className="w-5 sm:w-6 lg:w-7" />
          <p className="hover:text-[#FFA500] transition-colors duration-300 text-sm sm:text-base lg:text-lg">Need Help</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

export const Header2 = () => {
  return (
    <header className="flex justify-around items-center py-3 sm:py-5 px-4 w-full">
      {/* Logo Section */}
      <div className="flex gap-2 sm:gap-3">
        <Image 
          src={Logo} 
          alt="Comforty brand logo" 
          className="w-8 sm:w-9 h-8 sm:h-9 bg-[#FFFFFF] rounded-full transition-transform duration-300 hover:scale-110" 
          aria-label="Comforty logo"
        />
        <h1 className="font-medium text-2xl sm:text-3xl leading-6 sm:leading-8 transition-all duration-300 hover:text-[#029FAE] cursor-pointer">
          Comforty
        </h1>
      </div>

      {/* Cart and Icon Section */}
      <div className=" hidden sm:flex  items-center gap-3 sm:gap-5">
        {/* Cart Icon */}
        <Image 
          src={cart} 
          alt="Cart icon" 
          className="w-6 sm:w-7 h-6 sm:h-7 transition-transform duration-300 hover:scale-110" 
          aria-label="Go to cart"
        />
        {/* Cart Link */}
        <Link 
          href="/cart" 
          className="font-medium text-sm sm:text-base leading-5 sm:leading-6 flex justify-center items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Go to cart page"
        >
          Cart
        </Link>
        {/* Notification/Indicator Icon */}
        <Image 
          src={num} 
          alt="Notification icon" 
          className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 hover:scale-110" 
          aria-label="Notifications"
        />
      </div>
    </header>
  );
};
