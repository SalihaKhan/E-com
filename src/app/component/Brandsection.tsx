import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import images
import logo1 from "@/app/assets/Logo (1).png";
import logo2 from "@/app/assets/Logo (2).png";
import logo3 from "@/app/assets/Logo (3).png";
import logo4 from "@/app/assets/Logo (4).png";
import logo5 from "@/app/assets/Logo (5).png";
import logo6 from "@/app/assets/Logo (6).png";
import logo7 from "@/app/assets/Logo (7).png";

// Define types for the logos
interface Logo {
  src: StaticImageData | string; // This can now accept both StaticImageData and string types
  alt: string;
  width: number;
  height: number;
}

// Array of logo data
const logos: Logo[] = [
  { src: logo1, alt: "Brand 1 Logo", width: 85, height: 87 },
  { src: logo2, alt: "Brand 2 Logo", width: 107, height: 109 },
  { src: logo3, alt: "Brand 3 Logo", width: 135, height: 139 },
  { src: logo4, alt: "Brand 4 Logo", width: 63, height: 65 },
  { src: logo5, alt: "Brand 5 Logo", width: 98, height: 101 },
  { src: logo6, alt: "Brand 6 Logo", width: 113, height: 115 },
  { src: logo7, alt: "Brand 7 Logo", width: 84, height: 87 },
];

const Brandsection: React.FC = () => {
  return (
    <div>
      {/* Logos Section */}
      <section
        aria-label="Brand Logos"
        role="region"
        className="flex flex-wrap justify-center sm:justify-around sm:mx-20 mt-20 sm:mt-32 gap-8 transition-all duration-300"
      >
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="transition-transform duration-300 hover:scale-105"
            loading="lazy" // Lazy load images
            style={{ objectFit: 'contain' }} // Ensure logo aspect ratio is maintained
          />
        ))}
      </section>

      {/* Featured Products Title */}
      <section aria-label="Featured Products Section">
        <div className="flex justify-center sm:justify-start">
          <p className="text-[#272343] text-[24px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[32px] lg:leading-[35.2px] mb-6 sm:mb-8 lg:mb-11 font-inter text-center lg:text-left sm:ml-48 sm:mt-7 mx-auto mt-7 transition-all duration-300 hover:text-[#029FAE]">
            Featured Products
          </p>
        </div>
      </section>
    </div>
  );
};

export default Brandsection;
