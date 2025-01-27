import React from 'react';
import Image from 'next/image';
import plus from "@/app/assets/Plus.png"; // Ensure the path is correct

const FAQpage: React.FC = () => {
  return (
    <div className="px-4 sm:px-8">
      <div>
        <p className="text-[#272343] text-[28px] sm:text-[48px] leading-[36px] sm:leading-[56px] font-bold text-center mt-16 sm:mt-32 mb-6">
          Questions Look Here
        </p>
      </div>
      <p className="font-normal text-sm sm:text-base text-center text-[#4F4F4F] mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-start mb-16 sm:mb-44 lg:px-44">
        <div>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div key={index} className="mb-8">
                <h1 className="font-bold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#333333] mb-3">
                  What types of chairs do you offer?
                </h1>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#4F4F4F] sm:w-[400px] w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                  </p>
                  <Image src={plus} alt="plus" className="ml-4" />
                </div>
              </div>
            ))}
        </div>

        <div>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div key={index} className="mb-8">
                <h1 className="font-bold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#333333] mb-3">
                  What types of chairs do you offer?
                </h1>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#4F4F4F] sm:w-[400px] w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                  </p>
                  <Image src={plus} alt="plus" className="ml-4" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQpage;
