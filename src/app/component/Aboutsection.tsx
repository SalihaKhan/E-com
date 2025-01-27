'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import whitechair from "@/app/assets/Image.png"; // This can be replaced with your default image if needed

interface Product {
  _id: string;
  imageUrl?: string;
}

// Fetch the product data from Sanity
const getData = async (): Promise<Product[]> => {
  const res: Product[] = await client.fetch(
    `*[_type == "products" && title in ["Library Stool Chair"]] {
      "imageUrl": image.asset->url,
      _id,
    }`
  );
  return res;
};

const Aboutsection = () => {
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchProductData = async () => {
      const data = await getData();
      if (data.length > 0) {
        setProduct(data[0]); // Assuming the product is found
      }
    };

    fetchProductData();
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-32 mt-32 px-4">
        <div className="sm:w-[510px] w-[410px] h-[378px] bg-[#007580] text-white p-8 transition-transform duration-300 hover:scale-105">
          <h1 className="font-bold text-[32px] leading-[38.73px] pt-4">
            About Us - Comforty
          </h1>
          <p className="pt-4 mb-6">
            At Comforty, we believe that the right chair can blend ergonomic design, premium materials, and modern aesthetics seamlessly with functionality.
          </p>
          <button className="bg-[#F9F9F926] py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#007580]">
            View collection
          </button>
        </div>

        <div>
          {/* Dynamically render product image if available */}
          {product ? (
            <Image
              src={product.imageUrl || whitechair} // Fallback to default image if no URL is found
              alt="Library Stool Chair"
              className="sm:w-[510px] w-[410px] h-[378px] transition-transform duration-300 hover:scale-105"
              width={510}
              height={378}
            />
          ) : (
            <Image
              src={whitechair}
              alt="chair"
              className="sm:w-[510px] w-[410px] h-[378px] transition-transform duration-300 hover:scale-105"
              width={510}
              height={378}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
