import React from 'react'
import Image from 'next/image';
import locicon from "@/app/assets/location.png"
import phoneicon from "@/app/assets/bxs_phone.png";
import clockicon from "@/app/assets/bi_clock-fill.png";
import trophy from "@/app/assets/trophy 1.png";
import guarantee from "@/app/assets/guarantee.png";
import vector from "@/app/assets/Vector (4).png";


const Contactpage = () => {
  return (
<div className="px-4 sm:px-8 md:px-12">
  <h1 className="font-Poppins font-semibold text-[28px] sm:text-[36px] md:text-[42px] leading-[36px] sm:leading-[54px] mb-5 text-center mt-24 text-[#000000]">
    Get In Touch With Us
  </h1>
  <h1 className="font-Poppins font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] sm:w-[644px] w-full text-[#9F9F9F] lg:ml-80 sm:ml-0  text-center">
    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </h1>
  
  <div className="sm:flex sm:flex-row justify-center gap-8 sm:gap-32 sm:mt-44 mt-9 flex-wrap">
    {/* Address Block */}
    <div className="sm:w-[300px] md:w-[350px] lg:w-[400px] mb-8 sm:mb-16">
      <div className="flex gap-4 mb-8 sm:mb-16 ml-9 sm:ml-0">
        <Image src={locicon} alt="icon" className="w-[22px] h-[27.59px]" />
        <div>
          <h1 className="font-medium text-[18px] sm:text-2xl leading-[24px] sm:leading-[36px] text-[#000000]">Address</h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.36px] text-[#000000]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      {/* Phone Block */}
      <div className="flex gap-4 mb-8 sm:mb-16 ml-9 sm:ml-0">
        <Image src={phoneicon} alt="icon" className="w-[30px] h-[30px]" />
        <div>
          <h1 className="font-medium text-[18px] sm:text-2xl leading-[24px] sm:leading-[36px] text-[#000000]">Phone</h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.36px] text-[#000000]">
            Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      {/* Working Time Block */}
      <div className="flex gap-4 lg:mb-96  mb-8 ml-9 sm:ml-0">
        <Image src={clockicon} alt="icon" className="w-[23px] h-[23px]" />
        <div>
          <h1 className="font-medium text-[18px] sm:text-2xl leading-[24px] sm:leading-[36px] text-[#000000]">Working Time</h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.36px] text-[#000000]">
            Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <div className="sm:w-[400px] md:w-[500px] w-full">
      <label>
        <h1 className="font-medium text-base leading-[24px] text-[#000000] font-Poppins mb-3 ml-9 sm:ml-0">Your name</h1>
        <input
          type="text"
          placeholder="Abc"
          className="border-[1px] pt-1 pl-6 rounded-[10px] ml-9 sm:ml-0 mb-5 w-full sm:w-[528.75px] h-[75px] border-[#9F9F9F]"
        />
      </label>

      <label>
        <h1 className="font-medium text-base leading-[24px] text-[#000000] font-Poppins mb-3 ml-9 sm:ml-0">Email address</h1>
        <input
          type="text"
          placeholder="Abc@def.com"
          className="border-[1px] pt-1 pl-6 rounded-[10px] mb-5 w-full sm:w-[528.75px] h-[75px] ml-9 sm:ml-0 border-[#9F9F9F]"
        />
      </label>

      <label>
        <h1 className="font-medium text-base leading-[24px] text-[#000000] font-Poppins mb-3 ml-9 sm:ml-0">Subject</h1>
        <input
          type="text"
          placeholder="This is an optional"
          className="border-[1px] pt-2 pl-6 rounded-[10px] mb-5 w-full sm:w-[528.75px] h-[75px] ml-9 sm:ml-0 border-[#9F9F9F]"
        />
      </label>

      <label>
        <h1 className="font-medium text-base leading-[24px] text-[#000000] font-Poppins lg:mb-3 mb-14 ml-9 sm:ml-0">Message</h1>
        <textarea
          placeholder="Hi! I’d like to ask about"
          className="border-[1px] pt-3 pl-6 rounded-[10px] ml-9 sm:ml-0 mb-5 w-full sm:w-[527px] h-[120px] border-[#9F9F9F]"
        />
      </label>

      <div>
        <button className="bg-[#029FAE]   text-[#FFFFFF] rounded-[5px] border-[1px] w-full sm:w-[334.67px] h-[60px] ml-9 sm:ml-0 sm:mb-0 mb-52">
          Submit
        </button>
      </div>
    </div>
  </div>

  {/* Feature Icons Section */}
  <div className="flex justify-center items-center gap-7 sm:gap-8 md:gap-10 mt-44 lg:mt-0 sm:mb-40 mb-20 sm:ml-0 ml-9 flex-wrap">
    {/* High Quality Icon */}
    <div className="flex justify-center items-center gap-2">
      <Image src={trophy} alt="icon" className="sm:w-[60px] sm:h-[60px] w-[30px] h-[30px]" />
      <div>
        <h1 className="font-Poppins font-semibold sm:text-[25px] text-[13px] leading-[37.5px] text-[#242424]">High Quality</h1>
        <p className="font-Poppins font-medium sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#898989]">
          Crafted from top materials
        </p>
      </div>
    </div>

    {/* Warranty Protection Icon */}
    <div className="flex justify-center items-center gap-2">
      <Image src={guarantee} alt="icon" className="sm:w-[60px] sm:h-[58.3px] w-[30px] h-[30px]" />
      <div>
        <h1 className="font-Poppins font-semibold sm:text-[25px] text-[12px] sm:leading-[37.5px] leading-[24px] text-[#242424]">
          Warranty Protection
        </h1>
        <p className="font-Poppins font-medium sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#898989]">
          Over 2 years
        </p>
      </div>
    </div>

    {/* 24/7 Support Icon */}
    <div className="flex justify-center items-center sm:gap-2 gap-2">
      <Image src={vector} alt="icon" className="sm:w-[60px] sm:h-[58.3px] w-[30px] h-[30px]" />
      <div>
        <h1 className="font-Poppins font-semibold sm:text-[25px] text-[12px] sm:leading-[37.5px] leading-[24px] text-[#242424]">
          24 / 7 Support
        </h1>
        <p className="font-Poppins font-medium sm:text-[20px] text-[14px] sm:leading-[30px] leading-[20px] text-[#898989]">
          Dedicated support
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Contactpage
