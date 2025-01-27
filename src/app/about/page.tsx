'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import whitechair from "@/app/assets/Image.png";
import deliverycart from "@/app/assets/Delivery.png";
import checkmark from "@/app/assets/Checkmark--outline.png";
import purchase from "@/app/assets/Purchase.png";
import sprout from "@/app/assets/Sprout.png";
import Largeproduct from "@/app/assets/Large.png";
import parentphoto from "@/app/assets/Parent.png";
import photo from "@/app/assets/Photo.png";
import Aboutsection from '../component/Aboutsection';

// Define Product interface for the fetched data
interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

// Fetch the product data from Sanity
const getData = async (): Promise<Product[]> => {
  const res: Product[] = await client.fetch(
    `*[_type == "popular" && title in ["The Popular Seude Sofa", "Modern Lounge Chair", "Classic Arm Chair"]] {
      "imageUrl": image.asset->url,
      _id,
      price,
      title
    }`
  );
  return res;
};

const Aboutpage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <Aboutsection />
      {/* Brand Difference Section */}
      <div>
        <p className="text-[#272343] text-[32px] leading-[35.2px] font-semibold text-center mb-16">
          What makes our Brand Different
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-24 px-32">
        {[ 
          { image: deliverycart, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
          { image: checkmark, title: "Quality Guaranteed", description: "We ensure premium materials for our products." },
          { image: purchase, title: "Easy Purchase", description: "Seamless checkout experience for every customer." },
          { image: sprout, title: "Eco-Friendly", description: "We prioritize sustainability in our manufacturing." }
        ].map((item, index) => (
          <div
            key={index}
            className="text-left transition-transform duration-300 hover:scale-105"
          >
            <Image src={item.image} alt={item.title} className="mb-3" />
            <h1 className="font-normal text-[20px] leading-[28px] text-[#007580] mb-2">
              {item.title}
            </h1>
            <p className="font-normal text-[16px] leading-[24px] text-[#007580] w-[213px] mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Popular Products Section */}
      <div>
        <p className="text-[#272343] text-[32px] leading-[35.2px] font-semibold text-center sm:text-left sm:ml-48 mb-12">
          Our Popular Products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center lg:px-28 mb-24">
        {/* Display dynamically fetched products */}
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="transition-transform duration-300 hover:scale-105">
              <Image
                src={product.imageUrl || '/placeholder-image.png'}
                alt={product.title}
                className="sm:w-[205px] w-[270px] h-[275px] mb-3"
                width={270}
                height={275}
              />
              <p className="font-normal text-[20px] leading-[28px] text-[#2A254B] mb-1">
                {product.title}
              </p>
              <p className="font-normal text-[18px] leading-[27px] text-[#2A254B]">
                ${product.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No popular products found.</p>
        )}
      </div>
    </div>
  );
};

export default Aboutpage;
