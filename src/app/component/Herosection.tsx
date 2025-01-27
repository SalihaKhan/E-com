import React from 'react'
import Image from 'next/image';
import Arrow from "@/app/assets/Right 24px.png";
import chair from "@/app/assets/Product Image.png";
import Link from 'next/link';

const Herosection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-20 lg:gap-28 mt-16 md:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-0 transition-all duration-300 max-w-screen-xl mx-auto">
    
      {/* Text Section */}
      <div className="mt-8 sm:mt-12 w-full md:w-3/5 lg:w-1/2 text-center sm:text-left">
        <p className="font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[14px] tracking-[12%] text-[#272343] mb-1 transition-all duration-300">
          Welcome to chairy
        </p>
        <h1 className="font-bold text-[30px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[36px] sm:leading-[56px] md:leading-[64px] lg:leading-[70px] text-[#272343] md:w-[90%] mb-4 sm:mb-6 md:mb-8 mt-3 transition-all duration-300 hover:text-[#029FAE]">
          Best Furniture Collection for your interior.
        </h1>

        {/* Shop Now Button with link */}
        <div className="bg-[#029FAE] w-max md:w-[180px] h-[48px] md:h-[52px] rounded-[8px] py-[10px] px-[24px] text-[#FFFFFF] flex justify-center items-center gap-2 mx-auto sm:mx-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Link href="/products" passHref>
            <button aria-label="Shop now for the best furniture collection" className="text-[14px] md:text-[16px] flex items-center gap-2">
              Shop Now
              <Image src={Arrow} alt="Right arrow indicating to go to products page" className="transition-all duration-300 transform hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
  
      {/* Image Section */}
      <div className="mt-8 sm:mt-0">
        <Image 
          src={chair} 
          alt="Modern ergonomic chair in the best furniture collection" 
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[240px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-all duration-300 transform hover:scale-105" 
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Herosection;
